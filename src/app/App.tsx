import { useState, useRef, useEffect, useCallback } from "react";
import { FirmHeaderAdapted } from "./components/firm-header-adapted";
import { FirmTable, buildDefaultTableState } from "./components/firm-table";
import { Dashboard } from "./components/dashboard";
import { CompsGroup } from "./components/comps-group";
import { Waterfalls } from "./components/waterfalls";
import type { TabTableState } from "./components/firm-table";
import type { Currency, DisplayUnit, PageContext, PrimaryNavSelectionFocus } from "./components/shared-types";
import { NewTabModal, EditTabModal } from "./components/new-tab-modal";
import { FUND_COLUMN_ORDER } from "./components/new-tab-modal";

export interface Tab {
  id: string;
  label: string;
}

// ─── Helper function to generate context-aware default tab labels ───────
function getDefaultTabLabel(context: PageContext, tabType: "summary" | "glance"): string {
  if (tabType === "summary") {
    return `${context} Summary`;
  }
  return `${context} at a Glance`;
}

let nextTabId = 3;

export default function App() {
  // ─── Page context (Firm or Fund) ───────────────────────────────────────
  const [pageContext] = useState<PageContext>("Firm");
  
  const [selectedDates, setSelectedDates] = useState<string[]>(["most-recent"]);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [displayUnit, setDisplayUnit] = useState<DisplayUnit>("Thousands");
  const [selectedFirm, setSelectedFirm] = useState<string | null>(null);
  const [selectedFund, setSelectedFund] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [primaryNavFocus, setPrimaryNavFocus] = useState<PrimaryNavSelectionFocus>(null);

  const handleFirmChange = useCallback((firm: string | null) => {
    setSelectedFirm(firm);
    if (firm) setPrimaryNavFocus("firm");
  }, []);

  const handleFundChange = useCallback((fund: string | null) => {
    setSelectedFund(fund);
    if (fund) setPrimaryNavFocus("fund");
  }, []);

  const handleCompanyChange = useCallback((company: string | null) => {
    setSelectedCompany(company);
    if (company) setPrimaryNavFocus("company");
  }, []);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewTabModal, setShowNewTabModal] = useState(false);
  const [fitColumnsTrigger, setFitColumnsTrigger] = useState(0);
  const [showEditTabModal, setShowEditTabModal] = useState(false);
  const [editingTabId, setEditingTabId] = useState<string | null>(null);
  const [activeSecondaryTab, setActiveSecondaryTab] = useState("summary");

  // ─── Tab state ──────────────────────────────────────────────────────
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "1", label: getDefaultTabLabel(pageContext, "summary") },
    { id: "2", label: getDefaultTabLabel(pageContext, "glance") },
  ]);
  const [activeTabId, setActiveTabId] = useState("1");

  // Update tab labels and column orders when selectedFund changes
  useEffect(() => {
    const context: PageContext = selectedFund ? "Fund" : "Firm";
    
    // Update tab labels
    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        // Only update default tabs (id "1" and "2")
        if (tab.id === "1") {
          return { ...tab, label: getDefaultTabLabel(context, "summary") };
        }
        if (tab.id === "2") {
          return { ...tab, label: getDefaultTabLabel(context, "glance") };
        }
        return tab;
      })
    );
    
    // Update column orders for default tabs when switching to Fund
    if (selectedFund) {
      setTabStates((prev) => {
        const updated = { ...prev };
        
        // Update tab "1" and "2" to use Fund column order
        ["1", "2"].forEach((tabId) => {
          if (updated[tabId]) {
            const widths = { ...updated[tabId].columnWidths };
            // Add width for "process" column if not present
            if (!("process" in widths)) {
              widths.process = 150;
            }
            updated[tabId] = {
              ...updated[tabId],
              columnOrder: [...FUND_COLUMN_ORDER],
              columnWidths: widths,
            };
          }
        });
        
        return updated;
      });
    } else {
      // Revert to Firm column order when deselecting Fund
      setTabStates((prev) => {
        const updated = { ...prev };
        
        ["1", "2"].forEach((tabId) => {
          if (updated[tabId]) {
            // Remove "process" column and revert to DEFAULT_COLUMN_ORDER
            const baseState = buildDefaultTableState();
            updated[tabId] = {
              ...updated[tabId],
              columnOrder: [...baseState.columnOrder],
            };
          }
        });
        
        return updated;
      });
    }
  }, [selectedFund]);

  // When company is selected, switch to company-summary tab
  useEffect(() => {
    if (selectedCompany) {
      setActiveSecondaryTab("company-summary");
    } else {
      setActiveSecondaryTab("summary");
    }
  }, [selectedCompany]);

  // Firm/Fund nav (Figma V3) no longer uses these secondary ids — map to closest equivalent
  useEffect(() => {
    if (!selectedFirm || selectedCompany) return;
    const mapLegacy: Record<string, string> = {
      "at-a-glance": "schedule-of-investment",
      financials: "schedule-of-investment",
      "cap-table": "schedule-of-investment",
      valuations: "schedule-of-investment",
      waterfall: "waterfalls",
    };
    const next = mapLegacy[activeSecondaryTab];
    if (next) setActiveSecondaryTab(next);
  }, [selectedFirm, selectedCompany, activeSecondaryTab]);

  // Fund page secondary bar only allows Summary + Schedule of Investment (Figma node 206:5124)
  useEffect(() => {
    if (!selectedFirm || selectedCompany || !selectedFund) return;
    const allowed = new Set(["summary", "schedule-of-investment"]);
    if (!allowed.has(activeSecondaryTab)) {
      setActiveSecondaryTab("summary");
    }
  }, [selectedFirm, selectedCompany, selectedFund, activeSecondaryTab]);

  // ─── Per-tab table state (persisted across tab switches) ───────────
  const [tabStates, setTabStates] = useState<Record<string, TabTableState>>(() => ({
    "1": buildDefaultTableState(),
    "2": buildDefaultTableState(),
  }));

  const handleFitColumns = useCallback(() => {
    setFitColumnsTrigger((c) => c + 1);
  }, []);

  const handleAddTab = useCallback(() => {
    setShowNewTabModal(true);
  }, []);

  const handleCreateTab = useCallback((tabName: string, columnOrder: string[]) => {
    const id = String(nextTabId++);
    const newTab: Tab = { id, label: tabName };
    setTabs((prev) => [...prev, newTab]);

    // Build table state with the chosen column order
    const baseState = buildDefaultTableState();
    // Derive extraColumns from columnOrder
    const extras = columnOrder
      .filter((k) => k.startsWith("extra-"))
      .map((k) => k.slice(6)) as any[];
    // Ensure all columns in columnOrder have widths
    const widths = { ...baseState.columnWidths };
    for (const key of columnOrder) {
      if (!(key in widths)) {
        widths[key] = key.startsWith("extra-") ? 120 : 100;
      }
    }
    setTabStates((prev) => ({
      ...prev,
      [id]: {
        ...baseState,
        columnOrder,
        extraColumns: extras,
        columnWidths: widths,
        columnConfigs: {},
        evOverrides: {},
      },
    }));
    setActiveTabId(id);
    setShowNewTabModal(false);
  }, []);

  const handleRenameTab = useCallback((id: string, label: string) => {
    setTabs((prev) => prev.map((t) => (t.id === id ? { ...t, label } : t)));
  }, []);

  const handleSelectTab = useCallback((id: string) => {
    setActiveTabId(id);
  }, []);

  // ─── Edit tab (open column editor modal) ───────────────────────────
  const handleEditTab = useCallback((id: string) => {
    setEditingTabId(id);
    setShowEditTabModal(true);
  }, []);

  const handleSaveEditTab = useCallback((columnOrder: string[]) => {
    if (!editingTabId) return;
    const extras = columnOrder
      .filter((k) => k.startsWith("extra-"))
      .map((k) => k.slice(6)) as any[];
    setTabStates((prev) => {
      const current = prev[editingTabId] ?? buildDefaultTableState();
      const widths = { ...current.columnWidths };
      for (const key of columnOrder) {
        if (!(key in widths)) {
          widths[key] = key.startsWith("extra-") ? 120 : 100;
        }
      }
      return {
        ...prev,
        [editingTabId]: {
          ...current,
          columnOrder,
          extraColumns: extras,
          columnWidths: widths,
        },
      };
    });
    setShowEditTabModal(false);
    setEditingTabId(null);
  }, [editingTabId]);

  // ─── Duplicate tab ─────────────────────────────────────────────────
  const handleDuplicateTab = useCallback((id: string) => {
    const sourceTab = tabs.find((t) => t.id === id);
    if (!sourceTab) return;
    const newId = String(nextTabId++);
    const newTab: Tab = { id: newId, label: `${sourceTab.label} Copy` };
    setTabs((prev) => [...prev, newTab]);
    setTabStates((prev) => ({
      ...prev,
      [newId]: structuredClone(prev[id] ?? buildDefaultTableState()),
    }));
    setActiveTabId(newId);
  }, [tabs]);

  // ─── Delete tab ────────────────────────────────────────────────────
  const handleDeleteTab = useCallback((id: string) => {
    setTabs((prev) => {
      if (prev.length <= 1) return prev; // don't delete the last tab
      return prev.filter((t) => t.id !== id);
    });
    setTabStates((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    // If deleting the active tab, switch to the first remaining tab
    setActiveTabId((currentActive) => {
      if (currentActive === id) {
        const remaining = tabs.filter((t) => t.id !== id);
        return remaining.length > 0 ? remaining[0].id : currentActive;
      }
      return currentActive;
    });
  }, [tabs]);

  const handleTableStateChange = useCallback((updater: TabTableState | ((prev: TabTableState) => TabTableState)) => {
    setTabStates((prev) => {
      const current = prev[activeTabId] ?? buildDefaultTableState();
      const next = typeof updater === "function" ? updater(current) : updater;
      return { ...prev, [activeTabId]: next };
    });
  }, [activeTabId]);

  // Ensure active tab always has a state entry
  const activeTableState = tabStates[activeTabId] ?? buildDefaultTableState();

  // Measure the scroll container's viewport width & height so sticky-left headers
  // don't stretch to the full scroll-content width, and the table fills the viewport.
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) {
        setContainerWidth(rect.width);
        setContainerHeight(rect.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-['Inter',sans-serif]">
      {/* Single scroll container – vertical + horizontal */}
      <div
        ref={scrollContainerRef}
        className="flex-1 min-w-0 overflow-auto"
      >
        {/* Header menus: sticky left so they don't pan horizontally,
            normal flow so they scroll away vertically */}
        <div
          className="sticky left-0 z-40"
          style={{ width: containerWidth || "100%" }}
        >
          <FirmHeaderAdapted
            selectedDates={selectedDates}
            onDatesChange={setSelectedDates}
            currency={currency}
            onCurrencyChange={setCurrency}
            displayUnit={displayUnit}
            onDisplayUnitChange={setDisplayUnit}
            tabs={tabs}
            activeTabId={activeTabId}
            onAddTab={handleAddTab}
            onRenameTab={handleRenameTab}
            onSelectTab={handleSelectTab}
            onEditTab={handleEditTab}
            onDuplicateTab={handleDuplicateTab}
            onDeleteTab={handleDeleteTab}
            onFitColumns={handleFitColumns}
            selectedFirm={selectedFirm}
            onFirmChange={handleFirmChange}
            primaryNavFocus={primaryNavFocus}
            selectedFund={selectedFund}
            onFundChange={handleFundChange}
            selectedCompany={selectedCompany}
            onCompanyChange={handleCompanyChange}
            activeSecondaryTab={activeSecondaryTab}
            onSecondaryTabChange={setActiveSecondaryTab}
          />
        </div>

        {/* Conditionally render Dashboard or Table based on firm selection */}
        {!selectedFirm ? (
          <Dashboard />
        ) : activeSecondaryTab === "comps" ? (
          <CompsGroup />
        ) : activeSecondaryTab === "waterfalls" ? (
          <Waterfalls />
        ) : (
          <FirmTable
            key={activeTabId}
            selectedDates={selectedDates}
            currency={currency}
            displayUnit={displayUnit}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
            tableState={activeTableState}
            onTableStateChange={handleTableStateChange}
            searchQuery={searchQuery}
            fitColumnsTrigger={fitColumnsTrigger}
            isFundView={!!selectedFund}
          />
        )}
      </div>

      {/* New Tab Modal */}
      <NewTabModal
        open={showNewTabModal}
        onClose={() => setShowNewTabModal(false)}
        onCreate={handleCreateTab}
        pageContext={pageContext}
      />

      {/* Edit Tab Modal */}
      <EditTabModal
        open={showEditTabModal}
        onClose={() => { setShowEditTabModal(false); setEditingTabId(null); }}
        onSave={handleSaveEditTab}
        tabName={tabs.find((t) => t.id === editingTabId)?.label ?? ""}
        initialColumnOrder={editingTabId ? (tabStates[editingTabId]?.columnOrder ?? []) : []}
      />
    </div>
  );
}