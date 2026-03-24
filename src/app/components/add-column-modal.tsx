import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, Check } from "lucide-react";
import {
  KNOWLEDGE_BASE_METRICS,
  METRIC_CATEGORIES,
  type KnowledgeBaseMetricKey,
} from "./knowledge-base-metrics";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface AddColumnModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (metricKey: KnowledgeBaseMetricKey, config?: { multiplier?: number }) => void;
  alreadyAddedKeys: string[];
  anchorRect?: DOMRect | null;
}

export function AddColumnModal({
  open,
  onClose,
  onAdd,
  alreadyAddedKeys,
  anchorRect,
}: AddColumnModalProps) {
  const [search, setSearch] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Set<KnowledgeBaseMetricKey>>(new Set());
  const [breakevenMultiplier, setBreakevenMultiplier] = useState("1.0");
  const panelRef = useRef<HTMLDivElement>(null);

  const alreadySet = useMemo(() => new Set(alreadyAddedKeys), [alreadyAddedKeys]);

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    return METRIC_CATEGORIES.map((cat) => ({
      ...cat,
      keys: cat.keys.filter((key) => {
        // Allow breakevenEquityExitValue to be added multiple times (with different multipliers)
        if (key !== "breakevenEquityExitValue" && alreadySet.has(key)) return false;
        if (!q) return true;
        return KNOWLEDGE_BASE_METRICS[key].toLowerCase().includes(q);
      }),
    })).filter((cat) => cat.keys.length > 0);
  }, [search, alreadySet]);

  const totalFiltered = filteredCategories.reduce((s, c) => s + c.keys.length, 0);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setSelectedKeys(new Set());
      setBreakevenMultiplier("1.0");
    }
  }, [open]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const hasBreakeven = selectedKeys.has("breakevenEquityExitValue");
  const parsedMultiplier = parseFloat(breakevenMultiplier);
  const isValidMultiplier = !isNaN(parsedMultiplier) && parsedMultiplier > 0;
  const canAdd = selectedKeys.size > 0 && (!hasBreakeven || isValidMultiplier);

  const handleToggle = (key: KnowledgeBaseMetricKey) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleAdd = () => {
    if (!canAdd) return;
    for (const key of selectedKeys) {
      if (key === "breakevenEquityExitValue") {
        onAdd(key, { multiplier: parsedMultiplier });
      } else {
        onAdd(key);
      }
    }
    setSelectedKeys(new Set());
    setSearch("");
    setBreakevenMultiplier("1.0");
  };

  // Position the modal near the anchor (Add Column header), or fallback to top-right
  // Clamp to viewport so it never overflows off-screen
  const MODAL_W = 380;
  const MODAL_MAX_H = 520;
  const MARGIN = 8;

  const style: React.CSSProperties = {
    position: "fixed",
    zIndex: 1000,
  };
  if (anchorRect) {
    // Preferred: below the anchor, aligned left of anchor
    let top = anchorRect.bottom + 4;
    let left = anchorRect.left - 200;

    // Clamp horizontally
    if (left + MODAL_W > window.innerWidth - MARGIN) {
      left = window.innerWidth - MODAL_W - MARGIN;
    }
    if (left < MARGIN) left = MARGIN;

    // Clamp vertically: if it would overflow bottom, flip above anchor or clamp
    if (top + MODAL_MAX_H > window.innerHeight - MARGIN) {
      // Try placing above the anchor
      const aboveTop = anchorRect.top - MODAL_MAX_H - 4;
      if (aboveTop >= MARGIN) {
        top = aboveTop;
      } else {
        // Neither fits perfectly — clamp to bottom
        top = window.innerHeight - MODAL_MAX_H - MARGIN;
        if (top < MARGIN) top = MARGIN;
      }
    }

    style.top = top;
    style.left = left;
  } else {
    style.top = 110;
    style.right = 24;
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-label="Add metric column"
      style={style}
      className="w-[380px] max-h-[520px] bg-white border border-[#e5e5e5] rounded-lg shadow-xl flex flex-col font-['Inter',sans-serif] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <h3 className="text-sm font-semibold text-[#01294c]">
          Add Metric Column{selectedKeys.size > 0 ? `s (${selectedKeys.size})` : ""}
        </h3>
        <button
          onClick={onClose}
          className="flex items-center justify-center size-6 rounded hover:bg-gray-100"
        >
          <X className="size-4 text-[#666]" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pb-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5 text-[#999]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search metrics..."
            className="pl-7 h-8 text-xs border-[#e5e5e5]"
          />
        </div>
      </div>

      <Separator />

      {/* Scrollable metric list */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {filteredCategories.map((cat) => (
          <div key={cat.label}>
            <div className="sticky top-0 z-10 bg-[#f8fafc] px-4 py-1.5 border-b border-[#f0f0f0]">
              <span className="text-[10px] font-semibold text-[#808080] uppercase tracking-wider">
                {cat.label}
              </span>
            </div>
            {cat.keys.map((key) => {
              const isSelected = selectedKeys.has(key);
              return (
                <button
                  key={key}
                  onClick={() => handleToggle(key)}
                  className={`w-full flex items-center gap-2 px-4 py-1.5 text-left hover:bg-[#f0f4f8] transition-colors ${
                    isSelected ? "bg-[#e8f0fe]" : ""
                  }`}
                >
                  <div
                    className={`flex items-center justify-center size-4 rounded border shrink-0 ${
                      isSelected
                        ? "bg-[#037de8] border-[#037de8]"
                        : "border-[#ccc] bg-white"
                    }`}
                  >
                    {isSelected && <Check className="size-3 text-white" />}
                  </div>
                  <span className="text-[11px] text-[#013e73] truncate">
                    {KNOWLEDGE_BASE_METRICS[key]}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
        {totalFiltered === 0 && (
          <div className="px-4 py-6 text-center text-xs text-[#999]">
            No metrics match your search.
          </div>
        )}
      </div>

      {/* Breakeven multiplier input */}
      {hasBreakeven && (
        <div className="px-4 py-2 bg-[#f8fafc] border-t border-[#e5e5e5]">
          <label className="text-[10px] font-semibold text-[#01294c] mb-1 block">
            Breakeven Multiple
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min="0.1"
              step="0.5"
              value={breakevenMultiplier}
              onChange={(e) => setBreakevenMultiplier(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && isValidMultiplier) handleAdd(); }}
              placeholder="e.g. 1.0, 2.5, 10.0"
              className="h-7 text-xs border-[#e5e5e5] w-32"
            />
            <span className="text-[10px] text-[#666]">
              → Breakeven ({isValidMultiplier ? parsedMultiplier : "?"}x)
            </span>
          </div>
        </div>
      )}

      <Separator />

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-[10px] text-[#999]">
          {selectedKeys.size > 0
            ? `${selectedKeys.size} selected · ${totalFiltered} available`
            : `${totalFiltered} metric${totalFiltered !== 1 ? "s" : ""} available`}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-7 text-xs px-3"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleAdd}
            disabled={!canAdd}
            className="h-7 text-xs px-3 bg-[#037de8] hover:bg-[#0267c1] text-white"
          >
            Add {selectedKeys.size > 1 ? `${selectedKeys.size} Columns` : "Column"}
          </Button>
        </div>
      </div>
    </div>
  );
}