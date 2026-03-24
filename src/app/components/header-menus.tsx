import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/svg-0l2mu7a3oe";
import fitScreenSvgPaths from "../../imports/svg-ian85gulwk";
import { ChevronDown, Search, SlidersHorizontal, Plus, Pencil, Copy, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { getCurrencySymbol, CURRENCIES, UNIT_CYCLE } from "./shared-types";
import type { Currency, DisplayUnit } from "./shared-types";

// ─── Measurement Date Picker Data ───────────────────────────────────────

interface MeasurementDateOption {
  value: string;
  label: string;
  subLabel?: string;
}

const MEASUREMENT_DATE_OPTIONS: MeasurementDateOption[] = [
  { value: "most-recent", label: "Most Recent", subLabel: "Auto-updates to latest" },
  { value: "2025-12-31", label: "December 31, 2025", subLabel: "Q4 2025 — Year End" },
  { value: "2025-09-30", label: "September 30, 2025", subLabel: "Q3 2025" },
  { value: "2025-06-30", label: "June 30, 2025", subLabel: "Q2 2025" },
  { value: "2025-03-31", label: "March 31, 2025", subLabel: "Q1 2025" },
  { value: "2024-12-31", label: "December 31, 2024", subLabel: "Q4 2024 — Year End" },
  { value: "2024-09-30", label: "September 30, 2024", subLabel: "Q3 2024" },
  { value: "2024-06-30", label: "June 30, 2024", subLabel: "Q2 2024" },
  { value: "2024-03-31", label: "March 31, 2024", subLabel: "Q1 2024" },
  { value: "2023-12-31", label: "December 31, 2023", subLabel: "Q4 2023 — Year End" },
  { value: "2023-09-30", label: "September 30, 2023", subLabel: "Q3 2023" },
  { value: "2023-06-30", label: "June 30, 2023", subLabel: "Q2 2023" },
];

// ─── Measurement Date Picker Component ──────────────────────────────────

interface MeasurementDatePickerProps {
  selectedDates: string[];
  onDatesChange: (dates: string[]) => void;
}

function MeasurementDatePicker({ selectedDates, onDatesChange }: MeasurementDatePickerProps) {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const toggleOption = useCallback(
    (value: string) => {
      const current = selectedDates;
      if (current.includes(value)) {
        if (current.length === 1) return;
        onDatesChange(current.filter((v) => v !== value));
      } else {
        onDatesChange([...current, value]);
      }
    },
    [selectedDates, onDatesChange],
  );

  const selectedSet = new Set(selectedDates);

  const getDisplayLabel = () => {
    if (selectedDates.length === 0) return "Select dates…";
    if (selectedDates.length === 1) {
      const opt = MEASUREMENT_DATE_OPTIONS.find((o) => o.value === selectedDates[0]);
      return opt?.label ?? selectedDates[0];
    }
    return `${selectedDates.length} dates selected`;
  };

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Measurement Date selector"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-[#f6f6f6] rounded-lg px-3 py-1.5 hover:bg-[#eeeeee] transition-colors cursor-pointer"
      >
        <span className="font-['Inter',sans-serif] font-normal text-sm text-[#1a1a1a]">
          Measurement Date
        </span>
        <span className="font-['Inter',sans-serif] font-normal text-sm text-[#037de8]">
          {getDisplayLabel()}
        </span>
        <ChevronDown
          className={`size-4 text-[#666] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          aria-label="Measurement dates"
          className="absolute right-0 top-full mt-1 z-50 w-[320px] bg-white border border-[#e5e5e5] rounded-lg shadow-xl overflow-hidden font-['Inter',sans-serif]"
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#f0f0f0] bg-[#f8fafc]">
            <span className="text-xs font-semibold text-[#01294c]">
              Select Measurement Dates
            </span>
            <span className="text-[10px] text-[#808080]">
              {selectedDates.length} selected
            </span>
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            {MEASUREMENT_DATE_OPTIONS.map((opt) => {
              const isSelected = selectedSet.has(opt.value);
              const isMostRecent = opt.value === "most-recent";

              return (
                <button
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => toggleOption(opt.value)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-[#f0f4f8] ${
                    isSelected ? "bg-[#f0f7ff]" : ""
                  } ${isMostRecent ? "border-b border-[#e5e5e5]" : ""}`}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleOption(opt.value)}
                    className="size-4 shrink-0"
                    aria-hidden
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-xs truncate ${
                        isSelected
                          ? "text-[#013e73] font-semibold"
                          : "text-[#1a1a1a] font-normal"
                      } ${isMostRecent ? "text-[#037de8]" : ""}`}
                    >
                      {opt.label}
                    </span>
                    {opt.subLabel && (
                      <span className="text-[10px] text-[#999] truncate">
                        {opt.subLabel}
                      </span>
                    )}
                  </div>
                  {isMostRecent && isSelected && (
                    <span className="ml-auto shrink-0 bg-[#037de8] text-white text-[9px] font-semibold px-1.5 py-0.5 rounded">
                      DEFAULT
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between px-3 py-2 border-t border-[#f0f0f0] bg-[#f8fafc]">
            <button
              type="button"
              onClick={() => onDatesChange(["most-recent"])}
              className="text-[10px] text-[#037de8] hover:underline cursor-pointer"
            >
              Reset to default
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-white bg-[#037de8] hover:bg-[#0267c1] px-3 py-1 rounded transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Currency Dropdown ──────────────────────────────────────────────────

interface CurrencyDropdownProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

function CurrencyDropdown({ currency, onCurrencyChange }: CurrencyDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center px-1.5 py-0.5 bg-white border border-[#e5e5e5] rounded-l cursor-pointer hover:bg-[#f0f0f0] transition-colors"
      >
        <span className="font-['Inter',sans-serif] font-normal text-[10px] text-[#00b04f]">
          {currency}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 z-50 w-[180px] bg-white border border-[#e5e5e5] rounded-lg shadow-xl overflow-hidden font-['Inter',sans-serif]">
          <div className="px-2 py-1.5 border-b border-[#f0f0f0] bg-[#f8fafc]">
            <span className="text-[10px] font-semibold text-[#01294c]">Select Currency</span>
          </div>
          <div className="max-h-[200px] overflow-y-auto">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  onCurrencyChange(c.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-2 py-1.5 text-left transition-colors hover:bg-[#f0f4f8] ${
                  currency === c.code ? "bg-[#f0f7ff]" : ""
                }`}
              >
                <span className="text-[10px] font-semibold text-[#00b04f] w-[32px]">
                  {c.symbol}
                </span>
                <span
                  className={`text-[10px] ${
                    currency === c.code ? "text-[#013e73] font-semibold" : "text-[#333] font-normal"
                  }`}
                >
                  {c.code} — {c.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PrimaryMenu ────────────────────────────────────────────────────────

interface PrimaryMenuProps {
  selectedDates: string[];
  onDatesChange: (dates: string[]) => void;
}

export function PrimaryMenu({ selectedDates, onDatesChange }: PrimaryMenuProps) {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-1 w-full">
      <h1 className="font-['Inter',sans-serif] font-semibold text-[24px] leading-[32px] text-[#1a1a1a]">
        The Firm
      </h1>
      <MeasurementDatePicker selectedDates={selectedDates} onDatesChange={onDatesChange} />
    </div>
  );
}

// ─── SecondaryMenu ──────────────────────────────────────────────────────

export function SecondaryMenu() {
  const items = [
    { label: "Summary", active: true },
    { label: "Settings", active: false },
    { label: "Comp Groups", active: false, hasDropdown: true },
    { label: "User Management", active: false },
    { label: "Waterfall", active: false },
    { label: "Single Sign On", active: false },
  ];

  return (
    <div className="flex items-center bg-[#013e73] px-4 w-full">
      {items.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-1 px-2 py-2"
        >
          <span
            className={`font-['Inter',sans-serif] font-semibold text-xs ${
              item.active ? "text-white" : "text-[#9acbf6]"
            }`}
          >
            {item.label}
          </span>
          {item.hasDropdown && (
            <svg width="7" height="4" viewBox="0 0 6.66667 3.33333" fill="none">
              <path d={svgPaths.p357a42c0} fill="#9ACBF6" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── MeatballMenu ─────────────────────────────────────────────────────

function MeatballMenu({ color = "#808080" }: { color?: string }) {
  return (
    <svg width="3" height="11" viewBox="0 0 2.66667 10.6667" fill="none" className="ml-1">
      <path d={svgPaths.p2221d880} fill={color} />
    </svg>
  );
}

// ─── Editable Tab ───────────────────────────────────────────────────────

interface TabItem {
  id: string;
  label: string;
}

interface EditableTabProps {
  tab: TabItem;
  isActive: boolean;
  onSelect: () => void;
  onRename: (label: string) => void;
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

function EditableTab({ tab, isActive, onSelect, onRename, onEdit, onDuplicate, onDelete }: EditableTabProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(tab.label);
  const inputRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const meatballRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        meatballRef.current && !meatballRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  const commitRename = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== tab.label) {
      onRename(trimmed);
    } else {
      setDraft(tab.label);
    }
    setEditing(false);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDraft(tab.label);
    setEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      commitRename();
    } else if (e.key === "Escape") {
      setDraft(tab.label);
      setEditing(false);
    }
  };

  const handleMeatballClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!menuOpen && meatballRef.current) {
      const rect = meatballRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 2, left: rect.left });
    }
    setMenuOpen((prev) => !prev);
  };

  return (
    <button
      onClick={onSelect}
      onDoubleClick={handleDoubleClick}
      className={`flex items-center gap-1 px-2 py-2 min-w-0 max-w-[180px] ${
        isActive ? "bg-[#ccc]" : ""
      }`}
    >
      {editing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitRename}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          className="font-['Inter',sans-serif] font-semibold text-xs text-[#1a1a1a] bg-white border border-[#037de8] rounded px-1 py-0 outline-none w-full min-w-[60px]"
        />
      ) : (
        <>
          <span
            className={`font-['Inter',sans-serif] font-semibold text-xs truncate ${
              isActive ? "text-[#1a1a1a]" : "text-[#808080]"
            }`}
            title={tab.label}
          >
            {tab.label}
          </span>
          <div
            ref={meatballRef}
            onClick={handleMeatballClick}
            className="flex items-center justify-center shrink-0 cursor-pointer rounded hover:bg-black/10 p-0.5"
          >
            <MeatballMenu color={isActive ? "#1A1A1A" : "#808080"} />
          </div>
        </>
      )}

      {/* Dropdown menu – portalled to body to escape overflow clipping */}
      {menuOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "fixed", top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
            className="w-[184px] bg-white rounded-lg shadow-lg border border-[#e5e5e5] p-2 font-['Inter',sans-serif]"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onEdit();
              }}
              className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
            >
              <span className="leading-4">Edit</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onDuplicate();
              }}
              className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
            >
              <span className="leading-4">Duplicate</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onDelete();
              }}
              className="w-full flex items-center px-2 py-2 text-left text-xs text-[#d4183d] hover:bg-[#d4183d]/10 hover:text-[#d4183d] transition-colors cursor-pointer rounded"
            >
              <span className="leading-4">Delete</span>
            </button>
          </div>,
          document.body,
        )}
    </button>
  );
}

// ─── TertiaryMenu ──────────────────────────────────────────────────────

interface TertiaryMenuProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  displayUnit: DisplayUnit;
  onDisplayUnitChange: (u: DisplayUnit) => void;
  tabs: TabItem[];
  activeTabId: string;
  onAddTab: () => void;
  onRenameTab: (id: string, label: string) => void;
  onSelectTab: (id: string) => void;
  onEditTab: (id: string) => void;
  onDuplicateTab: (id: string) => void;
  onDeleteTab: (id: string) => void;
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  onFitColumns: () => void;
}

export function TertiaryMenu({
  currency,
  onCurrencyChange,
  displayUnit,
  onDisplayUnitChange,
  tabs,
  activeTabId,
  onAddTab,
  onRenameTab,
  onSelectTab,
  onEditTab,
  onDuplicateTab,
  onDeleteTab,
  searchQuery,
  onSearchQueryChange,
  onFitColumns,
}: TertiaryMenuProps) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchDraft, setSearchDraft] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setSearchDraft(searchQuery);
    setSearchExpanded(true);
  };

  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchExpanded]);

  const commitSearch = () => {
    onSearchQueryChange(searchDraft.trim());
    setSearchExpanded(false);
  };

  const cancelSearch = () => {
    setSearchDraft("");
    onSearchQueryChange("");
    setSearchExpanded(false);
  };

  const cycleUnit = () => {
    const idx = UNIT_CYCLE.indexOf(displayUnit);
    const next = UNIT_CYCLE[(idx + 1) % UNIT_CYCLE.length];
    onDisplayUnitChange(next);
  };

  const sym = getCurrencySymbol(currency);

  return (
    <div className="flex items-center justify-between bg-[#f8fafc] px-0 w-full">
      {/* Left: dynamic tabs + add button */}
      <div className="flex items-center min-w-0 overflow-x-auto">
        {tabs.map((tab) => (
          <EditableTab
            key={tab.id}
            tab={tab}
            isActive={tab.id === activeTabId}
            onSelect={() => onSelectTab(tab.id)}
            onRename={(label) => onRenameTab(tab.id, label)}
            onEdit={() => onEditTab(tab.id)}
            onDuplicate={() => onDuplicateTab(tab.id)}
            onDelete={() => onDeleteTab(tab.id)}
          />
        ))}
        <button
          onClick={onAddTab}
          title="Add new view"
          className="flex items-center justify-center size-7 mx-1 rounded hover:bg-[#e0e0e0] transition-colors shrink-0 cursor-pointer"
        >
          <Plus className="size-3.5 text-[#808080]" />
        </button>
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-2 pr-4">
        {/* Currency selector + Unit toggle */}
        <div className="flex items-center">
          <CurrencyDropdown currency={currency} onCurrencyChange={onCurrencyChange} />
          <button
            type="button"
            onClick={cycleUnit}
            className="flex items-center justify-center px-1.5 py-0.5 bg-[#e5e5e5] rounded-r cursor-pointer hover:bg-[#d5d5d5] transition-colors select-none"
          >
            <span className="font-['Inter',sans-serif] font-normal text-[10px] text-[#333]">
              ({sym}) {displayUnit}
            </span>
          </button>
        </div>

        {/* Fiscal year */}
        <div className="flex items-center gap-1 p-1">
          <span className="font-['Inter',sans-serif] font-normal text-xs text-[#333]">Fiscal Year End:</span>
          <span className="font-['Inter',sans-serif] font-normal text-xs text-[#3597ed]">12/31</span>
        </div>

        {/* Search button */}
        {searchExpanded ? (
          <div className="flex items-center bg-white border border-[#037de8] rounded p-1">
            <Search className="size-4 text-[#037de8] shrink-0" />
            <input
              ref={searchInputRef}
              value={searchDraft}
              onChange={(e) => setSearchDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") commitSearch();
                if (e.key === "Escape") cancelSearch();
              }}
              placeholder="Search..."
              className="font-['Inter',sans-serif] font-normal text-[10px] text-[#1a1a1a] bg-transparent outline-none w-[100px] ml-1 placeholder:text-[#999]"
            />
            {searchDraft && (
              <button
                type="button"
                onClick={cancelSearch}
                className="flex items-center justify-center size-3 shrink-0 text-[#999] hover:text-[#333] cursor-pointer"
              >
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        ) : (
          <button
            className={`flex items-center justify-center p-1 rounded cursor-pointer transition-colors ${
              searchQuery ? "bg-[#037de8]" : "bg-[#e5e5e5] hover:bg-[#d5d5d5]"
            }`}
            onClick={openSearch}
            title={searchQuery ? `Searching: "${searchQuery}"` : "Search firms"}
          >
            <Search className={`size-4 ${searchQuery ? "text-white" : "text-[#1a1a1a]"}`} />
          </button>
        )}

        {/* Fit screen button */}
        <button
          className="flex items-center justify-center p-1 bg-[#e5e5e5] rounded hover:bg-[#d5d5d5] transition-colors cursor-pointer"
          title="Fit to screen"
          onClick={onFitColumns}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-4">
            <path d={fitScreenSvgPaths.p120bb00} fill="#1A1A1A" transform="translate(1.333 2.667)" />
          </svg>
        </button>

        {/* Filter button */}
        <button className="flex items-center justify-center p-1 bg-[#e5e5e5] rounded">
          <SlidersHorizontal className="size-4 text-[#1a1a1a]" />
        </button>
      </div>
    </div>
  );
}