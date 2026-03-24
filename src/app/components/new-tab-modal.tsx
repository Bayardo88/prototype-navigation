import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { Search, X, GripVertical, Check } from "lucide-react";
import {
  KNOWLEDGE_BASE_METRICS,
  METRIC_CATEGORIES,
  type KnowledgeBaseMetricKey,
} from "./knowledge-base-metrics";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import type { PageContext } from "./shared-types";

// ─── Column registry ────────────────────────────────────────────────────

export interface ColumnDef {
  key: string;
  label: string;
  category: string;
  removable: boolean;
}

const BASE_COLUMNS: ColumnDef[] = [
  { key: "funds", label: "All Funds", category: "Default", removable: true },
  { key: "valuation", label: "Valuation Date", category: "Default", removable: true },
  { key: "initial", label: "Initial Investment Date", category: "Default", removable: true },
  { key: "recent", label: "Most Recent Investment", category: "Default", removable: true },
  { key: "fdo", label: "Fully Diluted Ownership", category: "Default", removable: true },
  { key: "invested", label: "Invested Capital", category: "Default", removable: true },
  { key: "realized", label: "Realized Value", category: "Default", removable: true },
  { key: "unrealized", label: "Unrealized Value", category: "Default", removable: true },
  { key: "total", label: "Total Value", category: "Default", removable: true },
  { key: "irr", label: "Gross IRR", category: "Default", removable: true },
  { key: "moic", label: "MOIC", category: "Default", removable: true },
  ...Array.from({ length: 7 }, (_, i) => ({
    key: `invested-${i}`,
    label: `Invested Capital ${i + 1}`,
    category: "Invested Capital",
    removable: true,
  })),
];

// Add a column for "Process Management" that's Fund-specific
const FUND_SPECIFIC_COLUMNS: ColumnDef[] = [
  { key: "process", label: "Process Management", category: "Default", removable: true },
];

const ALL_COLUMNS: ColumnDef[] = [...BASE_COLUMNS, ...FUND_SPECIFIC_COLUMNS];

const METRIC_COLUMNS: ColumnDef[] = Object.entries(KNOWLEDGE_BASE_METRICS).map(
  ([key, label]) => ({
    key: `extra-${key}`,
    label,
    category: "metric",
    removable: true,
  }),
);

const ALL_COLUMNS_WITH_METRICS: ColumnDef[] = [...BASE_COLUMNS, ...FUND_SPECIFIC_COLUMNS, ...METRIC_COLUMNS];

export const DEFAULT_COLUMN_ORDER = [
  "funds",
  "valuation",
  "initial",
  "recent",
  "fdo",
  "invested",
  "realized",
  "unrealized",
  "total",
  "irr",
  "moic",
];

export const FUND_COLUMN_ORDER = [
  "process",
  "valuation",
  "initial",
  "recent",
  "fdo",
  "invested",
  "realized",
  "unrealized",
  "total",
  "irr",
  "moic",
];

// Helper to get column label by key
export function getColumnLabel(key: string): string {
  const col = ALL_COLUMNS_WITH_METRICS.find((c) => c.key === key);
  return col?.label ?? key;
}

// ─── ColumnPickerItem ───────────────────────────────────────────────────

interface ColumnPickerItemProps {
  column: ColumnDef;
  isSelected: boolean;
  onToggle: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  isDragOver?: boolean;
}

function ColumnPickerItem({
  column,
  isSelected,
  onToggle,
  draggable,
  onDragStart,
  onDragOver,
  onDrop,
  isDragOver,
}: ColumnPickerItemProps) {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex items-center gap-2 px-3 py-2 transition-colors ${
        isDragOver ? "bg-blue-50 border-t-2 border-blue-400" : ""
      } ${isSelected ? "bg-[#f0f7ff]" : "hover:bg-[#f0f4f8]"}`}
    >
      {draggable && (
        <GripVertical className="size-4 text-[#999] cursor-grab shrink-0" />
      )}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <div
          className={`size-4 shrink-0 rounded border flex items-center justify-center ${
            isSelected
              ? "bg-[#037de8] border-[#037de8]"
              : "border-[#d1d5db] bg-white"
          }`}
        >
          {isSelected && <Check className="size-3 text-white" />}
        </div>
        <span
          className={`text-xs truncate ${
            isSelected ? "text-[#013e73] font-semibold" : "text-[#333] font-normal"
          }`}
        >
          {column.label}
        </span>
      </button>
    </div>
  );
}

// ─── ColumnPicker (with search and categories) ─────────────────────────

interface ColumnPickerProps {
  selected: string[];
  onToggle: (key: string) => void;
  search: string;
  onSearchChange: (val: string) => void;
}

function ColumnPicker({ selected, onToggle, search, onSearchChange }: ColumnPickerProps) {
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const filteredColumns = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ALL_COLUMNS_WITH_METRICS;
    return ALL_COLUMNS_WITH_METRICS.filter((col) => col.label.toLowerCase().includes(q));
  }, [search]);

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<string, ColumnDef[]>();
    for (const col of filteredColumns) {
      const cat = col.category;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(col);
    }
    return Array.from(map.entries());
  }, [filteredColumns]);

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-4 py-2 border-b border-[#f0f0f0]">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5 text-[#999]" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search columns..."
            className="pl-7 h-8 text-xs border-[#e5e5e5]"
          />
        </div>
      </div>

      {/* Column list */}
      <div className="flex-1 overflow-y-auto">
        {grouped.map(([category, cols]) => (
          <div key={category}>
            <div className="sticky top-0 z-10 bg-[#f8fafc] px-3 py-1.5 border-b border-[#f0f0f0]">
              <span className="text-[10px] font-semibold text-[#808080] uppercase tracking-wider">
                {category}
              </span>
            </div>
            {cols.map((col) => (
              <ColumnPickerItem
                key={col.key}
                column={col}
                isSelected={selectedSet.has(col.key)}
                onToggle={() => onToggle(col.key)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NewTabModal ─────────────────────────────────────────────────────────

interface NewTabModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (tabName: string, columnOrder: string[]) => void;
  pageContext: PageContext;
}

export function NewTabModal({ open, onClose, onCreate, pageContext }: NewTabModalProps) {
  const [tabName, setTabName] = useState(`New ${pageContext} View`);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([...DEFAULT_COLUMN_ORDER]);
  const [search, setSearch] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Drag state
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  // Reset when modal opens
  useEffect(() => {
    if (open) {
      setTabName(`New ${pageContext} View`);
      setSelectedColumns([...DEFAULT_COLUMN_ORDER]);
      setSearch("");
      setTimeout(() => nameInputRef.current?.select(), 50);
    }
  }, [open, pageContext]);

  const handleToggle = useCallback((key: string) => {
    setSelectedColumns((prev) => {
      if (prev.includes(key)) {
        return prev.filter((k) => k !== key);
      }
      return [...prev, key];
    });
  }, []);

  const handleCreate = () => {
    if (tabName.trim() && selectedColumns.length > 0) {
      onCreate(tabName.trim(), selectedColumns);
      onClose();
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDragIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragIndex === null) return;
    setOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === dropIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }

    setSelectedColumns((prev) => {
      const next = [...prev];
      const [item] = next.splice(dragIndex, 1);
      next.splice(dropIndex, 0, item);
      return next;
    });
    setDragIndex(null);
    setOverIndex(null);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[910px] h-[85vh] p-0 font-['Inter',sans-serif] flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 shrink-0">
          <DialogTitle className="text-lg font-semibold text-[#01294c]">
            Create New Tab
          </DialogTitle>
          <DialogDescription className="text-xs text-[#808080]">
            Name your tab and select which columns to display.
          </DialogDescription>
        </DialogHeader>

        {/* Tab name input */}
        <div className="px-6 shrink-0">
          <label className="block text-xs font-semibold text-[#01294c] mb-1">
            Tab Name
          </label>
          <Input
            ref={nameInputRef}
            value={tabName}
            onChange={(e) => setTabName(e.target.value)}
            placeholder="Enter tab name"
            className="h-9 text-sm"
          />
        </div>

        <Separator className="my-4 shrink-0" />

        {/* Two-column layout */}
        <div className="flex gap-4 px-6 flex-1 min-h-0">
          {/* Left: Column picker */}
          <div className="flex-1 border border-[#e5e5e5] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#f8fafc] px-3 py-2 border-b border-[#e5e5e5] shrink-0">
              <span className="text-xs font-semibold text-[#01294c]">
                Available Columns
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ColumnPicker
                selected={selectedColumns}
                onToggle={handleToggle}
                search={search}
                onSearchChange={setSearch}
              />
            </div>
          </div>

          {/* Right: Selected columns (reorderable) */}
          <div className="flex-1 border border-[#e5e5e5] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#f8fafc] px-3 py-2 border-b border-[#e5e5e5] shrink-0">
              <span className="text-xs font-semibold text-[#01294c]">
                Selected Columns ({selectedColumns.length})
              </span>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0">
              {selectedColumns.length === 0 ? (
                <div className="flex items-center justify-center h-full text-xs text-[#999]">
                  No columns selected
                </div>
              ) : (
                selectedColumns.map((key, idx) => {
                  const col = ALL_COLUMNS_WITH_METRICS.find((c) => c.key === key);
                  if (!col) return null;
                  return (
                    <ColumnPickerItem
                      key={key}
                      column={col}
                      isSelected={true}
                      onToggle={() => handleToggle(key)}
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx)}
                      onDragOver={(e) => handleDragOver(e, idx)}
                      onDrop={(e) => handleDrop(e, idx)}
                      isDragOver={overIndex === idx && dragIndex !== idx}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="px-6 pb-6 pt-4 shrink-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!tabName.trim() || selectedColumns.length === 0}
          >
            Create Tab
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ─── EditTabModal ────────────────────────────────────────────────────────

interface EditTabModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (columnOrder: string[]) => void;
  tabName: string;
  initialColumnOrder: string[];
}

export function EditTabModal({ open, onClose, onSave, tabName, initialColumnOrder }: EditTabModalProps) {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  // Drag state
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  // Initialize from initialColumnOrder when modal opens
  useEffect(() => {
    if (open) {
      setSelectedColumns([...initialColumnOrder]);
      setSearch("");
    }
  }, [open, initialColumnOrder]);

  const handleToggle = useCallback((key: string) => {
    setSelectedColumns((prev) => {
      if (prev.includes(key)) {
        return prev.filter((k) => k !== key);
      }
      return [...prev, key];
    });
  }, []);

  const handleSave = () => {
    if (selectedColumns.length > 0) {
      onSave(selectedColumns);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDragIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragIndex === null) return;
    setOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === dropIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }

    setSelectedColumns((prev) => {
      const next = [...prev];
      const [item] = next.splice(dragIndex, 1);
      next.splice(dropIndex, 0, item);
      return next;
    });
    setDragIndex(null);
    setOverIndex(null);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[910px] h-[85vh] p-0 font-['Inter',sans-serif] flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 shrink-0">
          <DialogTitle className="text-lg font-semibold text-[#01294c]">
            Edit Tab: {tabName}
          </DialogTitle>
          <DialogDescription className="text-xs text-[#808080]">
            Select and reorder columns for this tab.
          </DialogDescription>
        </DialogHeader>

        <Separator className="my-4 shrink-0" />

        {/* Two-column layout */}
        <div className="flex gap-4 px-6 flex-1 min-h-0">
          {/* Left: Column picker */}
          <div className="flex-1 border border-[#e5e5e5] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#f8fafc] px-3 py-2 border-b border-[#e5e5e5] shrink-0">
              <span className="text-xs font-semibold text-[#01294c]">
                Available Columns
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ColumnPicker
                selected={selectedColumns}
                onToggle={handleToggle}
                search={search}
                onSearchChange={setSearch}
              />
            </div>
          </div>

          {/* Right: Selected columns (reorderable) */}
          <div className="flex-1 border border-[#e5e5e5] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#f8fafc] px-3 py-2 border-b border-[#e5e5e5] shrink-0">
              <span className="text-xs font-semibold text-[#01294c]">
                Selected Columns ({selectedColumns.length})
              </span>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0">
              {selectedColumns.length === 0 ? (
                <div className="flex items-center justify-center h-full text-xs text-[#999]">
                  No columns selected
                </div>
              ) : (
                selectedColumns.map((key, idx) => {
                  const col = ALL_COLUMNS_WITH_METRICS.find((c) => c.key === key);
                  if (!col) return null;
                  return (
                    <ColumnPickerItem
                      key={key}
                      column={col}
                      isSelected={true}
                      onToggle={() => handleToggle(key)}
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx)}
                      onDragOver={(e) => handleDragOver(e, idx)}
                      onDrop={(e) => handleDrop(e, idx)}
                      isDragOver={overIndex === idx && dragIndex !== idx}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="px-6 pb-6 pt-4 shrink-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={selectedColumns.length === 0}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}