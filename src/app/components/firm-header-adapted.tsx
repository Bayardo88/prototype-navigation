import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/svg-9pgj3kgk0q";
import svgPathsCompany from "../../imports/svg-xjx37gtuz3";
import filterIconPaths from "../../imports/svg-kahe0su0d2";
import imgAvatar from "@/assets/7988f0c1d291e15af6b050e31020b2eccc85ea2d.png";
import { ChevronDown, Plus, Pencil, Copy, Trash2, Pin } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { getCurrencySymbol, CURRENCIES, UNIT_CYCLE } from "./shared-types";
import type { Currency, DisplayUnit, PrimaryNavSelectionFocus } from "./shared-types";
import { CapTableTertiaryMenu } from "./cap-table-tertiary-menu";
import { ValuationsTertiaryMenu } from "./valuations-tertiary-menu";

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
  { value: "2024-12-31", label: "December 31, 2024", subLabel: "Q4 2024  Year End" },
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
        className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] rounded-[8px] cursor-pointer hover:bg-[#3f4e62] transition-colors"
      >
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#cbd5e1] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Measurement Date</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#037de8] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{getDisplayLabel()}</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dorop_down">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
              <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #CBD5E1)" id="Vector" />
            </svg>
          </div>
        </div>
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
        className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-bl-[4px] rounded-tl-[4px] shrink-0 z-[3] cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      >
        <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#00b04f] text-[10px] whitespace-nowrap">
          <p className="leading-[14px]">{currency}</p>
        </div>
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

// ─── MeatballMenu ─────────────────────────────────────────────────────

function MeatballMenu({ color = "#0F172A" }: { color?: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Meatball_menu">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
      <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
          <path d={svgPaths.p2221d880} fill={color} id="Vector" />
        </svg>
      </div>
    </div>
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
    <>
      <button
        onClick={onSelect}
        onDoubleClick={handleDoubleClick}
        className={`${
          isActive ? "bg-[#cbd5e1]" : ""
        } content-stretch flex gap-[4px] items-center justify-center p-[8px] rounded-[4px] shrink-0 cursor-pointer hover:bg-[#cbd5e1]/50 transition-colors`}
      >
        {editing ? (
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commitRename}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172a] text-[12px] bg-white border border-[#037de8] rounded px-1 py-0 outline-none min-w-[60px]"
          />
        ) : (
          <>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[#0f172a] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">{tab.label}</p>
            </div>
            <div
              ref={meatballRef}
              onClick={handleMeatballClick}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <MeatballMenu color="#0F172A" />
            </div>
          </>
        )}
      </button>

      {/* Dropdown menu – portalled to body to escape overflow clipping */}
      {menuOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "fixed", top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
            className="w-[140px] bg-white rounded-md shadow-lg border border-[#e5e5e5] py-1 font-['Inter',sans-serif]"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onEdit();
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] text-[#333] hover:bg-[#f0f4f8] transition-colors cursor-pointer"
            >
              <Pencil className="size-3 text-[#666]" />
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onDuplicate();
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] text-[#333] hover:bg-[#f0f4f8] transition-colors cursor-pointer"
            >
              <Copy className="size-3 text-[#666]" />
              Duplicate
            </button>
            <div className="border-t border-[#e5e5e5] my-0.5" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
                onDelete();
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash2 className="size-3 text-red-500" />
              Delete
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}

// ─── Primary Menu ────────────────────────────────────────��───────────────

interface PrimaryMenuProps {
  selectedDates: string[];
  onDatesChange: (dates: string[]) => void;
  selectedFirm: string | null;
  onFirmChange: (firm: string | null) => void;
  primaryNavFocus: PrimaryNavSelectionFocus;
  selectedFund: string | null;
  onFundChange: (fund: string | null) => void;
  selectedCompany: string | null;
  onCompanyChange: (company: string | null) => void;
}

// Fake firm data — up to 5 firms per Navigation V3 firm list (Figma node 334:11050)
const AVAILABLE_FIRMS = [
  "Blackstone Capital Partners",
  "KKR Global Investments",
  "Apollo Investment Management",
  "Carlyle Group",
  "TPG Capital",
];

// Fake fund data
const AVAILABLE_FUNDS = [
  "Fund I",
  "Fund II",
  "Fund III",
  "Growth Fund 2024",
  "Opportunity Fund V",
];

// Fake company data
const AVAILABLE_COMPANIES = [
  "Apple Inc.",
  "Microsoft Corporation",
  "Google LLC",
  "Amazon.com Inc.",
  "Tesla Inc.",
];

const STORAGE_PINNED_FIRMS = "navigation-summary-pinned-firms";
const STORAGE_PINNED_FUNDS = "navigation-summary-pinned-funds";
const STORAGE_PINNED_COMPANIES = "navigation-summary-pinned-companies";

function readPinnedIds(key: string, valid: Set<string>): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string" && valid.has(x));
  } catch {
    return [];
  }
}

function writePinnedIds(key: string, ids: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    /* ignore quota / private mode */
  }
}

function toggleIdInOrder(prev: string[], id: string): string[] {
  if (prev.includes(id)) return prev.filter((x) => x !== id);
  return [...prev, id];
}

interface NavPickerRowProps {
  label: string;
  selected: boolean;
  showPinBesideName: boolean;
  onSelect: () => void;
  onTogglePin: () => void;
}

/** Pinned rows: filled pin beside name (pin click = unpin). Unpinned: name + outline pin to pin. */
function NavPickerRow({
  label,
  selected,
  showPinBesideName,
  onSelect,
  onTogglePin,
}: NavPickerRowProps) {
  const rowClass = selected
    ? "bg-[#94a3b8] hover:bg-[#94a3b8]"
    : "bg-white hover:bg-[#f1f5f9]";
  const nameClass = selected
    ? "text-[#0f172a] font-semibold"
    : "text-[#475569] font-normal";
  const pinMuted = "text-[#64748b]";
  const pinActive = "text-[#037de8]";
  const nameTypography = `truncate font-['Inter:Regular',sans-serif] text-[12px] leading-4 ${nameClass}`;

  if (showPinBesideName) {
    return (
      <div className={`flex w-full items-stretch ${rowClass} transition-colors`}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onTogglePin();
          }}
          className="flex shrink-0 items-center px-2 py-2 hover:bg-black/5"
          aria-label="Unpin"
        >
          <Pin className={`size-3.5 ${pinActive}`} fill="currentColor" strokeWidth={1.5} />
        </button>
        <button type="button" onClick={onSelect} className={`flex min-w-0 flex-1 items-center py-2 pr-2 text-left ${nameTypography}`}>
          {label}
        </button>
      </div>
    );
  }

  return (
    <div className={`flex w-full items-stretch ${rowClass} transition-colors`}>
      <button type="button" onClick={onSelect} className={`flex min-w-0 flex-1 items-center px-2 py-2 text-left ${nameTypography}`}>
        {label}
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onTogglePin();
        }}
        className="flex shrink-0 items-center px-2 py-2 hover:bg-black/5"
        aria-label="Pin"
      >
        <Pin className={`size-3.5 ${pinMuted}`} fill="none" strokeWidth={1.5} />
      </button>
    </div>
  );
}

const PRIMARY_NAV_DROPDOWN_Z = 10000;
const PRIMARY_NAV_DROPDOWN_WIDTH = 220;

/**
 * Same DOM/CSS structure as the Company dropdown search (Figma / in-tree reference).
 * `type="text"` and `overflow-clip` + `size-[16px]` icon match the working Company picker.
 */
function PrimaryNavSearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (next: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative w-full shrink-0 rounded-[8px] bg-[#e3e8f0]" data-name="Button_Icon">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[8px] border border-solid border-[#64748b]"
      />
      <div className="flex w-full min-h-[36px] flex-row items-stretch">
        <div className="content-stretch relative flex w-full min-h-[36px] items-center gap-[4px] px-[8px] py-[4px]">
          <div className="relative size-[16px] shrink-0 overflow-clip" data-name="Search">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
            <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
                <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #1E293B)" id="Vector" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            autoComplete="off"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-[28px] min-w-0 flex-1 bg-transparent font-['Inter:Regular',sans-serif] text-[14px] font-normal text-[#1e293b] outline-none placeholder:text-[#64748b]"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Firm dropdown search — [Navigation V3 / Firm dropdown menu](https://www.figma.com/design/ovDXo60vmHGOgtZN5knuAF/Navigation-V3?node-id=331-10875)
 * Rows use the same NavPickerRow pattern as Fund / Company (pins on every row).
 */
function FirmDropdownSearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div
      className="flex w-full shrink-0 items-center gap-[4px] rounded-[8px] border border-solid border-[#64748b] bg-[#e3e8f0] px-[8px] py-[4px]"
      data-name="Button_Icon"
    >
      <div className="relative size-[16px] shrink-0 overflow-clip" data-name="Search">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
            <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #1E293B)" id="Vector" />
          </svg>
        </div>
      </div>
      <input
        type="text"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Find a Firm"
        className="min-h-[20px] min-w-0 flex-1 bg-transparent font-['Inter:Regular',sans-serif] text-[14px] font-normal leading-5 text-[#1e293b] outline-none placeholder:text-[#64748b]"
      />
    </div>
  );
}

function PrimaryMenuComponent({
  selectedDates,
  onDatesChange,
  selectedFirm,
  onFirmChange,
  primaryNavFocus,
  selectedFund,
  onFundChange,
  selectedCompany,
  onCompanyChange,
}: PrimaryMenuProps) {
  const [firmDropdownOpen, setFirmDropdownOpen] = useState(false);
  const [firmSearchQuery, setFirmSearchQuery] = useState("");
  const firmPickerRef = useRef<HTMLDivElement>(null);

  const [fundDropdownOpen, setFundDropdownOpen] = useState(false);
  const [fundSearchQuery, setFundSearchQuery] = useState("");
  const fundPickerRef = useRef<HTMLDivElement>(null);

  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [companySearchQuery, setCompanySearchQuery] = useState("");
  const companyPickerRef = useRef<HTMLDivElement>(null);

  const fundDropdownPortalRef = useRef<HTMLDivElement>(null);
  const companyDropdownPortalRef = useRef<HTMLDivElement>(null);

  const [pinnedFirms, setPinnedFirms] = useState<string[]>(() =>
    readPinnedIds(STORAGE_PINNED_FIRMS, new Set(AVAILABLE_FIRMS)),
  );
  const [pinnedFunds, setPinnedFunds] = useState<string[]>(() =>
    readPinnedIds(STORAGE_PINNED_FUNDS, new Set(AVAILABLE_FUNDS)),
  );
  const [pinnedCompanies, setPinnedCompanies] = useState<string[]>(() =>
    readPinnedIds(STORAGE_PINNED_COMPANIES, new Set(AVAILABLE_COMPANIES)),
  );

  const togglePinFirm = useCallback((name: string) => {
    setPinnedFirms((prev) => {
      const next = toggleIdInOrder(prev, name);
      writePinnedIds(STORAGE_PINNED_FIRMS, next);
      return next;
    });
  }, []);

  const togglePinFund = useCallback((name: string) => {
    setPinnedFunds((prev) => {
      const next = toggleIdInOrder(prev, name);
      writePinnedIds(STORAGE_PINNED_FUNDS, next);
      return next;
    });
  }, []);

  const togglePinCompany = useCallback((name: string) => {
    setPinnedCompanies((prev) => {
      const next = toggleIdInOrder(prev, name);
      writePinnedIds(STORAGE_PINNED_COMPANIES, next);
      return next;
    });
  }, []);

  const firmQueryLower = firmSearchQuery.toLowerCase();
  const firmsMatchingSearch = AVAILABLE_FIRMS.filter((f) =>
    f.toLowerCase().includes(firmQueryLower),
  );
  const pinnedFirmsInMenu = pinnedFirms.filter((f) => firmsMatchingSearch.includes(f));
  const unpinnedFirmsInMenu = firmsMatchingSearch.filter((f) => !pinnedFirms.includes(f));
  const fundQueryLower = fundSearchQuery.toLowerCase();
  const fundsMatchingSearch = AVAILABLE_FUNDS.filter((f) =>
    f.toLowerCase().includes(fundQueryLower),
  );
  const pinnedFundsInMenu = pinnedFunds.filter((f) => fundsMatchingSearch.includes(f));
  const unpinnedFundsInMenu = fundsMatchingSearch.filter((f) => !pinnedFunds.includes(f));

  const companyQueryLower = companySearchQuery.toLowerCase();
  const companiesMatchingSearch = AVAILABLE_COMPANIES.filter((c) =>
    c.toLowerCase().includes(companyQueryLower),
  );
  const pinnedCompaniesInMenu = pinnedCompanies.filter((c) => companiesMatchingSearch.includes(c));
  const unpinnedCompaniesInMenu = companiesMatchingSearch.filter((c) => !pinnedCompanies.includes(c));

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /** List vs calendar control in Miscellaneous actions — matches active pill styling (#037de8 + white icon). */
  const [miscViewMode, setMiscViewMode] = useState<"list" | "calendar">("list");

  // Global cmd+k listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Close search modal on Escape
  useEffect(() => {
    if (!searchModalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchModalOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [searchModalOpen]);

  // Close firm dropdown on outside click (panel is in-tree under firmPickerRef)
  useEffect(() => {
    if (!firmDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (firmPickerRef.current?.contains(e.target as Node)) return;
      setFirmDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [firmDropdownOpen]);

  // Close firm dropdown on Escape
  useEffect(() => {
    if (!firmDropdownOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFirmDropdownOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [firmDropdownOpen]);

  // Close fund dropdown on outside click (anchor + portalled panel)
  useEffect(() => {
    if (!fundDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (fundPickerRef.current?.contains(t)) return;
      if (fundDropdownPortalRef.current?.contains(t)) return;
      setFundDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [fundDropdownOpen]);

  // Close fund dropdown on Escape
  useEffect(() => {
    if (!fundDropdownOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFundDropdownOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [fundDropdownOpen]);

  // Close company dropdown on outside click (anchor + portalled panel)
  useEffect(() => {
    if (!companyDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Node;
      if (companyPickerRef.current?.contains(t)) return;
      if (companyDropdownPortalRef.current?.contains(t)) return;
      setCompanyDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [companyDropdownOpen]);

  // Close company dropdown on Escape
  useEffect(() => {
    if (!companyDropdownOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCompanyDropdownOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [companyDropdownOpen]);

  useEffect(() => {
    if (!firmDropdownOpen) setFirmSearchQuery("");
  }, [firmDropdownOpen]);

  useEffect(() => {
    if (!fundDropdownOpen) setFundSearchQuery("");
  }, [fundDropdownOpen]);

  useLayoutEffect(() => {
    if (!fundDropdownOpen) return;
    const anchor = fundPickerRef.current;
    const panel = fundDropdownPortalRef.current;
    if (!anchor || !panel) return;
    const apply = () => {
      const r = anchor.getBoundingClientRect();
      panel.style.position = "fixed";
      panel.style.top = `${r.bottom + 4}px`;
      panel.style.left = `${r.left}px`;
      panel.style.width = `${PRIMARY_NAV_DROPDOWN_WIDTH}px`;
      panel.style.zIndex = `${PRIMARY_NAV_DROPDOWN_Z}`;
    };
    apply();
    window.addEventListener("resize", apply);
    document.addEventListener("scroll", apply, true);
    return () => {
      window.removeEventListener("resize", apply);
      document.removeEventListener("scroll", apply, true);
    };
  }, [fundDropdownOpen]);

  useLayoutEffect(() => {
    if (!companyDropdownOpen) return;
    const anchor = companyPickerRef.current;
    const panel = companyDropdownPortalRef.current;
    if (!anchor || !panel) return;
    const apply = () => {
      const r = anchor.getBoundingClientRect();
      panel.style.position = "fixed";
      panel.style.top = `${r.bottom + 4}px`;
      panel.style.left = `${r.left}px`;
      panel.style.width = `${PRIMARY_NAV_DROPDOWN_WIDTH}px`;
      panel.style.zIndex = `${PRIMARY_NAV_DROPDOWN_Z}`;
    };
    apply();
    window.addEventListener("resize", apply);
    document.addEventListener("scroll", apply, true);
    return () => {
      window.removeEventListener("resize", apply);
      document.removeEventListener("scroll", apply, true);
    };
  }, [companyDropdownOpen]);

  return (
    <div className="relative w-full shrink-0 overflow-visible bg-[#0f172a]" data-name="Primary Menu">
      <div className="flex size-full flex-row items-center overflow-visible">
        <div className="content-stretch relative flex w-full items-center gap-[8px] overflow-visible px-[16px] py-[8px]">
          <div className="relative shrink-0 size-[28px]" data-name="Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d={svgPaths.p1309200} fill="var(--fill-0, white)" id="Logo" />
            </svg>
          </div>
          <div className="content-stretch relative flex shrink-0 items-center gap-[8px] overflow-visible">
            <div ref={firmPickerRef} className="relative overflow-visible">
              <button
                type="button"
                onClick={() => setFirmDropdownOpen((o) => !o)}
                className={`${
                  selectedFirm && primaryNavFocus === "firm"
                    ? "bg-[#037de8] hover:bg-[#0369d1]"
                    : "bg-[#334155] hover:bg-[#3f4e62]"
                } content-stretch flex gap-[4px] items-center px-[8px] py-[4px] rounded-[8px] shrink-0 cursor-pointer transition-colors`}
                data-name="Picker"
              >
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
                      <path d={svgPaths.p2c054100} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">{selectedFirm || "Firm"}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                      <path d={svgPaths.pae532e0} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Firm dropdown menu — Figma 331:10875 (absolute under picker) */}
              {firmDropdownOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-1 w-[220px] overflow-hidden rounded-[8px] border border-[#e5e5e5] bg-white font-['Inter',sans-serif] shadow-xl"
                  data-name="Firm dropdown menu"
                >
                  <div className="flex flex-col gap-[8px] p-[8px]">
                    <FirmDropdownSearchField value={firmSearchQuery} onChange={setFirmSearchQuery} />

                    <div className="flex w-full flex-col items-start" data-name="Menu Container">
                      {pinnedFirmsInMenu.length > 0 && (
                        <div className="relative flex max-h-[96px] w-full shrink-0 flex-col overflow-y-auto border-b border-[#e5e5e5] pb-2">
                          {pinnedFirmsInMenu.map((firm) => (
                            <NavPickerRow
                              key={`pinned-firm-${firm}`}
                              label={firm}
                              selected={firm === selectedFirm}
                              showPinBesideName
                              onSelect={() => {
                                onFirmChange(firm);
                                setFirmDropdownOpen(false);
                                setFirmSearchQuery("");
                              }}
                              onTogglePin={() => togglePinFirm(firm)}
                            />
                          ))}
                        </div>
                      )}

                      <div className="relative flex h-[128px] w-full shrink-0 flex-col items-start overflow-y-auto">
                        {unpinnedFirmsInMenu.map((firm) => (
                          <NavPickerRow
                            key={firm}
                            label={firm}
                            selected={firm === selectedFirm}
                            showPinBesideName={false}
                            onSelect={() => {
                              onFirmChange(firm);
                              setFirmDropdownOpen(false);
                              setFirmSearchQuery("");
                            }}
                            onTogglePin={() => togglePinFirm(firm)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={fundPickerRef} className="relative">
              <button
                type="button"
                onClick={() => setFundDropdownOpen((o) => !o)}
                className={`${
                  selectedFund && primaryNavFocus === "fund"
                    ? "bg-[#037de8] hover:bg-[#0369d1]"
                    : "bg-[#334155] hover:bg-[#3f4e62]"
                } content-stretch flex gap-[4px] items-center px-[8px] py-[4px] rounded-[8px] shrink-0 cursor-pointer transition-colors`}
                data-name="Picker"
              >
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[12.5%_4.17%_16.67%_4.17%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 11.3333">
                      <g id="Group">
                        <path d={filterIconPaths.p1adf7d00} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                        <path d={filterIconPaths.p1dd53b00} fill="var(--fill-0, #F1F5F9)" id="Vector_2" />
                        <path d={filterIconPaths.pa89cd00} fill="var(--fill-0, #F1F5F9)" id="Vector_3" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">{selectedFund || "Fund"}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                      <path d={svgPaths.pae532e0} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Fund Dropdown — portalled */}
              {fundDropdownOpen &&
                createPortal(
                  <div
                    ref={fundDropdownPortalRef}
                    className="flex w-[220px] flex-col gap-[8px] rounded-[8px] border border-[#e5e5e5] bg-white p-[8px] font-['Inter',sans-serif] shadow-xl"
                  >
                    <PrimaryNavSearchField
                      value={fundSearchQuery}
                      onChange={setFundSearchQuery}
                      placeholder="Find a Fund"
                    />

                    {pinnedFundsInMenu.length > 0 && (
                      <div className="relative flex max-h-[96px] w-full shrink-0 flex-col overflow-y-auto border-b border-[#e5e5e5] pb-2">
                        {pinnedFundsInMenu.map((fund) => (
                          <NavPickerRow
                            key={`pinned-fund-${fund}`}
                            label={fund}
                            selected={fund === selectedFund}
                            showPinBesideName
                            onSelect={() => {
                              onFundChange(fund);
                              setFundDropdownOpen(false);
                              setFundSearchQuery("");
                            }}
                            onTogglePin={() => togglePinFund(fund)}
                          />
                        ))}
                      </div>
                    )}

                    <div
                      className="relative flex h-[128px] w-full shrink-0 flex-col items-start overflow-y-auto"
                      data-name="Menu Container"
                    >
                      {unpinnedFundsInMenu.map((fund) => (
                        <NavPickerRow
                          key={fund}
                          label={fund}
                          selected={fund === selectedFund}
                          showPinBesideName={false}
                          onSelect={() => {
                            onFundChange(fund);
                            setFundDropdownOpen(false);
                            setFundSearchQuery("");
                          }}
                          onTogglePin={() => togglePinFund(fund)}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        console.log("Add new fund clicked");
                      }}
                      className="relative w-full shrink-0 rounded-[4px] transition-colors hover:bg-[#f0f7ff]"
                      data-name="Button"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[4px] border border-solid border-[#037de8]"
                      />
                      <div className="flex size-full flex-row items-center justify-center">
                        <div className="relative flex w-full items-center justify-center gap-1 p-1">
                          <div className="relative size-4 shrink-0 overflow-hidden" data-name="Add">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g id="Vector" />
                            </svg>
                            <div className="absolute inset-[20.83%]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                                <path d={svgPaths.p951d880} fill="var(--fill-0, #037DE8)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold leading-4 text-[#037de8]">
                            Add New Fund
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>,
                  document.body,
                )}
            </div>
            <div ref={companyPickerRef} className="relative">
              <button
                type="button"
                onClick={() => setCompanyDropdownOpen((o) => !o)}
                className={`${
                  selectedCompany && primaryNavFocus === "company"
                    ? "bg-[#037de8] hover:bg-[#0369d1]"
                    : "bg-[#334155] hover:bg-[#3f4e62]"
                } content-stretch flex gap-[4px] items-center px-[8px] py-[4px] rounded-[8px] shrink-0 cursor-pointer transition-colors`}
                data-name="Picker"
              >
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10.6667">
                      <path d={svgPaths.p3d272000} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] whitespace-nowrap">
                  <p className="leading-[20px]">{selectedCompany || "Company"}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                      <path d={svgPaths.pae532e0} fill="var(--fill-0, #F1F5F9)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Company Dropdown — portalled */}
              {companyDropdownOpen &&
                createPortal(
                  <div
                    ref={companyDropdownPortalRef}
                    className="flex w-[220px] flex-col gap-[8px] rounded-[8px] border border-[#e5e5e5] bg-white p-[8px] font-['Inter',sans-serif] shadow-xl"
                  >
                    <PrimaryNavSearchField
                      value={companySearchQuery}
                      onChange={setCompanySearchQuery}
                      placeholder="Find a Company"
                    />

                    {pinnedCompaniesInMenu.length > 0 && (
                      <div className="relative flex max-h-[96px] w-full shrink-0 flex-col overflow-y-auto border-b border-[#e5e5e5] pb-2">
                        {pinnedCompaniesInMenu.map((company) => (
                          <NavPickerRow
                            key={`pinned-company-${company}`}
                            label={company}
                            selected={company === selectedCompany}
                            showPinBesideName
                            onSelect={() => {
                              onCompanyChange(company);
                              setCompanyDropdownOpen(false);
                              setCompanySearchQuery("");
                            }}
                            onTogglePin={() => togglePinCompany(company)}
                          />
                        ))}
                      </div>
                    )}

                    <div
                      className="relative flex h-[128px] w-full shrink-0 flex-col items-start overflow-y-auto"
                      data-name="Menu Container"
                    >
                      {unpinnedCompaniesInMenu.map((company) => (
                        <NavPickerRow
                          key={company}
                          label={company}
                          selected={company === selectedCompany}
                          showPinBesideName={false}
                          onSelect={() => {
                            onCompanyChange(company);
                            setCompanyDropdownOpen(false);
                            setCompanySearchQuery("");
                          }}
                          onTogglePin={() => togglePinCompany(company)}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        // TODO: Implement add new company logic
                        console.log("Add new company clicked");
                      }}
                      className="relative w-full shrink-0 rounded-[4px] transition-colors hover:bg-[#f0f7ff]"
                      data-name="Button"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[4px] border border-solid border-[#037de8]"
                      />
                      <div className="flex size-full flex-row items-center justify-center">
                        <div className="relative flex w-full items-center justify-center gap-1 p-1">
                          <div className="relative size-4 shrink-0 overflow-hidden" data-name="Add">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g id="Vector" />
                            </svg>
                            <div className="absolute inset-[20.83%]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                                <path d={svgPaths.p951d880} fill="var(--fill-0, #037DE8)" id="Vector" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col justify-center font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold leading-4 text-[#037de8]">
                            Add New Company
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>,
                  document.body,
                )}
            </div>
            
          </div>
          <MeasurementDatePicker selectedDates={selectedDates} onDatesChange={onDatesChange} />
          <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px" data-name="Title" />
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className="bg-[#1e293b] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[100px] cursor-pointer hover:bg-[#2d3748] transition-colors"
            data-name="Button_Icon"
          >
            <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Search icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
                  <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #94A3B8)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">cmd + K</p>
            </div>
          </button>
          <div className="bg-[#1e293b] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Notifications">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Notification icon">
              <div className="absolute inset-[10.42%_16.67%_8.33%_16.67%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13">
                  <path d={svgPaths.p2d748b80} fill="var(--fill-0, #64748B)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="absolute left-[20px] size-[10px] top-[2px]" data-name="Notification badge">
              <div className="absolute bg-[#ff2f3d] left-0 rounded-[8px] size-[10px] top-0" data-name="Notification background" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[5px] not-italic size-[10px] text-[6px] text-center text-white top-[5px]">
                <p className="leading-[6px]">6</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#1e293b] content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0"
            data-name="Miscellaneous actions"
          >
            <button
              type="button"
              onClick={() => setMiscViewMode("list")}
              aria-pressed={miscViewMode === "list"}
              className={`content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors ${
                miscViewMode === "list" ? "bg-[#037de8] hover:bg-[#0369d1]" : "bg-transparent hover:bg-[#334155]/60"
              }`}
              data-name="List container"
            >
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="List icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path
                      d={svgPaths.p25ac6b00}
                      fill={miscViewMode === "list" ? "#ffffff" : "#64748B"}
                      id="Vector"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setMiscViewMode("calendar")}
              aria-pressed={miscViewMode === "calendar"}
              className={`content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors ${
                miscViewMode === "calendar"
                  ? "bg-[#037de8] hover:bg-[#0369d1]"
                  : "bg-transparent hover:bg-[#334155]/60"
              }`}
              data-name="Calendar container"
            >
              <div className="relative shrink-0 size-[16px]" data-name="Calendar icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip0_primary_menu_calendar)" id="mdi_event">
                    <path
                      d={svgPaths.p2b879080}
                      fill={miscViewMode === "calendar" ? "#ffffff" : "#64748B"}
                      id="Vector"
                    />
                    <g id="Vector_2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_primary_menu_calendar">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
          <div className="content-stretch flex items-center justify-center p-[8px] pointer-events-none relative rounded-[24px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgAvatar} />
            <div aria-hidden="true" className="absolute border-2 border-[#037de8] border-solid inset-0 rounded-[24px]" />
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Meatball menu">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
            <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                <path d={svgPaths.p56f6880} fill="var(--fill-0, #475569)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {searchModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] bg-black/50"
            onClick={() => {
              setSearchModalOpen(false);
              setSearchQuery("");
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[600px] bg-white rounded-[12px] shadow-2xl overflow-hidden font-['Inter',sans-serif]"
            >
              {/* Search Input */}
              <div className="flex items-center gap-[12px] px-[16px] py-[12px] border-b border-[#e5e5e5]">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
                      <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #64748B)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search firms, funds, companies, metrics..."
                  autoFocus
                  className="flex-1 text-[16px] text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                />
                <button
                  onClick={() => {
                    setSearchModalOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-[12px] text-[#64748b] bg-[#f1f5f9] px-[8px] py-[4px] rounded-[4px] hover:bg-[#e2e8f0] transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[400px] overflow-y-auto">
                {searchQuery.trim() === "" ? (
                  <div className="px-[16px] py-[32px] text-center">
                    <p className="text-[14px] text-[#94a3b8]">
                      Start typing to search across firms, funds, companies, and metrics
                    </p>
                  </div>
                ) : (
                  <div className="py-[8px]">
                    {/* Quick Actions Section */}
                    <div className="px-[16px] py-[8px]">
                      <p className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide mb-[8px]">
                        Quick Actions
                      </p>
                      <button className="w-full flex items-center gap-[12px] px-[12px] py-[8px] rounded-[6px] hover:bg-[#f1f5f9] transition-colors text-left">
                        <div className="overflow-clip relative shrink-0 size-[16px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Vector" />
                          </svg>
                          <div className="absolute inset-[20.83%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                              <path d={svgPaths.p951d880} fill="var(--fill-0, #037DE8)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[13px] text-[#0f172a] font-medium">Add New Company</p>
                          <p className="text-[11px] text-[#64748b]">Create a new portfolio company</p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-[12px] px-[12px] py-[8px] rounded-[6px] hover:bg-[#f1f5f9] transition-colors text-left mt-[4px]">
                        <div className="overflow-clip relative shrink-0 size-[16px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Vector" />
                          </svg>
                          <div className="absolute inset-[20.83%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                              <path d={svgPaths.p951d880} fill="var(--fill-0, #037DE8)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[13px] text-[#0f172a] font-medium">Add Column</p>
                          <p className="text-[11px] text-[#64748b]">Insert a new metric column</p>
                        </div>
                      </button>
                    </div>

                    {/* Results Section */}
                    <div className="px-[16px] py-[8px] mt-[8px] border-t border-[#f1f5f9]">
                      <p className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wide mb-[8px]">
                        No Results Found
                      </p>
                      <p className="text-[13px] text-[#94a3b8] px-[12px] py-[16px]">
                        Try searching for firms, funds, companies, or metrics
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-[16px] py-[10px] border-t border-[#e5e5e5] bg-[#f8fafc]">
                <div className="flex items-center gap-[12px] text-[11px] text-[#64748b]">
                  <span className="flex items-center gap-[4px]">
                    <kbd className="bg-white border border-[#e5e5e5] px-[6px] py-[2px] rounded-[3px] text-[10px]">↑</kbd>
                    <kbd className="bg-white border border-[#e5e5e5] px-[6px] py-[2px] rounded-[3px] text-[10px]">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-[4px]">
                    <kbd className="bg-white border border-[#e5e5e5] px-[6px] py-[2px] rounded-[3px] text-[10px]">↵</kbd>
                    to select
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

// ─── Secondary Menu ──────────────────────────────────────────────────────

interface SecondaryMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  selectedFund: string | null;
  selectedCompany: string | null;
  currency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  displayUnit?: DisplayUnit;
  onDisplayUnitChange?: (u: DisplayUnit) => void;
  onFitColumns?: () => void;
}

/** Firm-only secondary bar — [Navigation V3](https://www.figma.com/design/ovDXo60vmHGOgtZN5knuAF/Navigation-V3?node-id=206-5724) */
const FIRM_SECONDARY_NAV: { id: string; label: string }[] = [
  { id: "summary", label: "Summary" },
  { id: "schedule-of-investment", label: "Schedule of Investments" },
  { id: "comps", label: "Comp Groups" },
  { id: "waterfalls", label: "Waterfalls" },
];

/** Fund-only secondary bar — [Navigation V3](https://www.figma.com/design/ovDXo60vmHGOgtZN5knuAF/Navigation-V3?node-id=206-5124) */
const FUND_SECONDARY_NAV: { id: string; label: string }[] = [
  { id: "summary", label: "Summary" },
  { id: "schedule-of-investment", label: "Schedule of Investment" },
];

function SecondaryMenuComponent({ activeTab, onTabChange, selectedFund, selectedCompany, currency, onCurrencyChange, displayUnit, onDisplayUnitChange, onFitColumns }: SecondaryMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const meatballRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  
  // Financials-specific state
  const [financialsVersion, setFinancialsVersion] = useState("Primary Financials Ver..");
  const [financialsDate, setFinancialsDate] = useState("12/31/2023");
  
  // Valuations-specific state
  const [valuationVersion, setValuationVersion] = useState("12/31/2023");

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

  const handleMeatballClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!menuOpen && meatballRef.current) {
      const rect = meatballRef.current.getBoundingClientRect();
      const menuWidth = 184; // Width of dropdown menu
      const padding = 8; // Padding from screen edge
      
      // Calculate left position, ensuring it doesn't overflow right edge
      let left = rect.left;
      if (left + menuWidth > window.innerWidth - padding) {
        left = window.innerWidth - menuWidth - padding;
      }
      
      // Ensure it doesn't overflow left edge either
      if (left < padding) {
        left = padding;
      }
      
      setMenuPos({ top: rect.bottom + 4, left });
    }
    setMenuOpen((prev) => !prev);
  };
  
  const cycleUnit = () => {
    const idx = UNIT_CYCLE.indexOf(displayUnit);
    const next = UNIT_CYCLE[(idx + 1) % UNIT_CYCLE.length];
    onDisplayUnitChange(next);
  };

  const sym = getCurrencySymbol(currency);

  const isFundPage = Boolean(selectedFund && !selectedCompany);
  const isCompanyFinancials = Boolean(selectedCompany && activeTab === "financials");
  const isCompanyCapTable = Boolean(selectedCompany && activeTab === "cap-table");
  const isCompanyValuations = Boolean(selectedCompany && activeTab === "valuations");

  /** [Navigation V3 node 263:10846] — inactive items use rounded only on some tabs; spacing is padding-only (no flex gap between items). */
  const companyCapTableItemRounded = (tabId: string, isActive: boolean) => {
    if (tabId === "at-a-glance" || tabId === "waterfalls") {
      return isActive ? "rounded-[4px]" : "";
    }
    return "rounded-[4px]";
  };

  /** [Navigation V3 node 206:4935] — only Firm Summary (inactive) + Valuations (active) use rounded-[4px]; other inactives have no radius. */
  const companyValuationsItemRounded = (tabId: string, isActive: boolean) => {
    if (tabId === "valuations") return isActive ? "rounded-[4px]" : "";
    if (tabId === "company-summary") return "rounded-[4px]";
    return "";
  };

  return (
    <div
      className="bg-[#475569] relative shrink-0 w-full"
      data-name={isFundPage ? "secondary menu" : "Secondary Menu"}
    >
      <div className="flex flex-row items-center size-full">
        <div
          className={`content-stretch flex items-center px-[16px] py-[8px] relative w-full ${
            isCompanyFinancials
              ? "gap-[8px]"
              : isCompanyCapTable
                ? "gap-[16px]"
                : "justify-between"
          }`}
        >
          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
            {selectedCompany ? (
              // Company tabs
              <>
                <button 
                  onClick={() => onTabChange("company-summary")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "company-summary" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("company-summary", activeTab === "company-summary")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("company-summary", activeTab === "company-summary")
                        : activeTab === "company-summary"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "company-summary" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">
                      {isCompanyCapTable || isCompanyValuations ? "Firm Summary" : "Company Summary"}
                    </p>
                  </div>
                  {activeTab === "company-summary" && (
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Meatball_menu">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
                          <path d={svgPathsCompany.p2221d880} fill="var(--fill-0, #0F172A)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
                
                <button 
                  onClick={() => onTabChange("at-a-glance")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "at-a-glance" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("at-a-glance", activeTab === "at-a-glance")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("at-a-glance", activeTab === "at-a-glance")
                        : activeTab === "at-a-glance"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "at-a-glance" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">At a Glance</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => onTabChange("financials")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "financials" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("financials", activeTab === "financials")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("financials", activeTab === "financials")
                        : activeTab === "financials"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "financials" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">Financials</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => onTabChange("cap-table")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "cap-table" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("cap-table", activeTab === "cap-table")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("cap-table", activeTab === "cap-table")
                        : activeTab === "cap-table"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "cap-table" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">Cap Table</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => onTabChange("valuations")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "valuations" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("valuations", activeTab === "valuations")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("valuations", activeTab === "valuations")
                        : activeTab === "valuations"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "valuations" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">Valuations</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => onTabChange("waterfalls")}
                  className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 transition-colors ${
                    activeTab === "waterfalls" ? "bg-[#cbd5e1] " : ""
                  }${
                    isCompanyCapTable
                      ? companyCapTableItemRounded("waterfalls", activeTab === "waterfalls")
                      : isCompanyValuations
                        ? companyValuationsItemRounded("waterfalls", activeTab === "waterfalls")
                        : activeTab === "waterfalls"
                          ? "rounded-[4px]"
                          : ""
                  }`}
                  data-name="Menu-horizontal-item"
                >
                  <div
                    className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                      activeTab === "waterfalls" ? "text-[#0f172a]" : "text-[#94a3b8]"
                    }`}
                  >
                    <p className="leading-[16px]">{isCompanyCapTable || isCompanyValuations ? "Waterfall" : "Waterfalls"}</p>
                  </div>
                </button>
              </>
            ) : isFundPage ? (
              // Fund page only — [Navigation V3 node 206:5124]
              <>
                {FUND_SECONDARY_NAV.map(({ id, label }) => {
                  const isActive = activeTab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onTabChange(id)}
                      className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 transition-colors ${
                        isActive ? "bg-[#cbd5e1]" : ""
                      }`}
                      data-name="Menu-horizontal-item"
                    >
                      <div
                        className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                          isActive ? "text-[#0f172a]" : "text-[#94a3b8]"
                        }`}
                      >
                        <p className="leading-[16px]">{label}</p>
                      </div>
                    </button>
                  );
                })}
              </>
            ) : (
              // Firm page only (no fund, no company) — node 206:5724
              <>
                {FIRM_SECONDARY_NAV.map(({ id, label }) => {
                  const isActive = activeTab === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onTabChange(id)}
                      className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 transition-colors ${
                        isActive ? "bg-[#cbd5e1]" : ""
                      }`}
                      data-name="Menu-horizontal-item"
                    >
                      <div
                        className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[0] whitespace-nowrap ${
                          isActive ? "text-[#0f172a]" : "text-[#94a3b8]"
                        }`}
                      >
                        <p className="leading-[16px]">{label}</p>
                      </div>
                    </button>
                  );
                })}
              </>
            )}
          </div>

          {isFundPage ? (
            <>
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px" data-name="Title" />
              <div
                ref={meatballRef}
                onClick={handleMeatballClick}
                className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:bg-white/10 rounded transition-colors"
                data-name="Meatball menu"
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                    <path d={svgPaths.p56f6880} fill="var(--fill-0, #94A3B8)" id="Vector" />
                  </svg>
                </div>
              </div>
            </>
          ) : activeTab === "cap-table" && !selectedCompany && !selectedFund ? (
            // Cap Table view (firm) — [Navigation V3 node 263:10846] tabs only
            null
          ) : isCompanyCapTable ? (
            // Company + Cap Table — tabs only, no measurements row
            null
          ) : (activeTab === "valuations" && !selectedCompany && !selectedFund) || isCompanyValuations ? (
            // Valuations — [Navigation V3 node 206:4935] tabs + Measurement Date (justify-between row)
            <div className="content-stretch flex items-center relative shrink-0" data-name="Measurement Date">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[0] not-italic p-[4px] relative shrink-0 text-[14px] text-center tracking-[0] whitespace-nowrap" data-name="Information Label">
                  <div className="flex flex-col justify-center relative shrink-0 text-[#e3e8f0]">
                    <p className="leading-[20px]">Equity Value</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#00b04f]">
                    <p className="leading-[20px]">$34,560,000</p>
                  </div>
                </div>
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[0] not-italic p-[4px] relative shrink-0 text-[14px] text-center tracking-[0] whitespace-nowrap" data-name="Information Label">
                  <div className="flex flex-col justify-center relative shrink-0 text-[#e3e8f0]">
                    <p className="leading-[20px]">Unrealized Firm Total</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#00b04f]">
                    <p className="leading-[20px]">$48,871,695</p>
                  </div>
                </div>
                <div className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#3d4e63] transition-colors" data-name="Picker">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] tracking-[0] whitespace-nowrap">
                    <p className="leading-[20px]">Valuation Version</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] tracking-[0] whitespace-nowrap">
                    <p className="leading-[20px]">{valuationVersion}</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dorop_down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                        <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #CBD5E1)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : isCompanyFinancials ? (
            // Company + Financials — [Navigation V3 node 261:10111]
            <>
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px" data-name="Title" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="Measurement Date">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
                  <div className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#3d4e63] transition-colors" data-name="Picker">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
                      <p className="leading-[20px]">Financials Version</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] whitespace-nowrap">
                      <p className="leading-[20px]">{financialsVersion}</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dorop_down">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                          <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #CBD5E1)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#3d4e63] transition-colors" data-name="Picker">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
                      <p className="leading-[20px]">Financials Date</p>
                    </div>
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] whitespace-nowrap">
                      <p className="leading-[20px]">{financialsDate}</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dorop_down">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                          <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #CBD5E1)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
                  <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
                    <CurrencyDropdown currency={currency} onCurrencyChange={onCurrencyChange} />
                    <button
                      type="button"
                      onClick={cycleUnit}
                      className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2] cursor-pointer hover:bg-[#d3d8e0] transition-colors"
                      data-name="Amount Container"
                    >
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#1e293b] text-[10px] whitespace-nowrap">
                        <p className="leading-[14px]">
                          ({sym}) {displayUnit}
                        </p>
                      </div>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={onFitColumns}
                    className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 hover:bg-[#e2e8f0] transition-colors"
                    data-name="Button_Icon"
                  >
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fit_screen/outline">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="Group">
                          <g id="Vector" />
                        </g>
                      </svg>
                      <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                          <g id="Group">
                            <path d={svgPathsCompany.p120bb00} fill="var(--fill-0, #0F172A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 hover:bg-[#e2e8f0] transition-colors"
                    data-name="Button_Icon"
                  >
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                          <path d={svgPathsCompany.pe961600} fill="var(--fill-0, #0F172A)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
                  <div className="bg-[#00b04f] content-stretch flex gap-[4px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0 hover:bg-[#009944] transition-colors cursor-pointer" data-name="Button">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                      <p className="leading-[16px]">Save</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron_down">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <g id="Vector" />
                      </svg>
                      <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                          <path d={svgPathsCompany.pae532e0} fill="var(--fill-0, white)" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={meatballRef}
                    onClick={handleMeatballClick}
                    className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:bg-white/10 rounded transition-colors"
                    data-name="Meatball menu"
                  >
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                        <path d={svgPathsCompany.p56f6880} fill="var(--fill-0, #94A3B8)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : selectedCompany && !isCompanyCapTable && !isCompanyValuations ? (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
              {/* Measurement Value */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
                {/* Currency & Display Unit Selector */}
                <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
                  <CurrencyDropdown currency={currency} onCurrencyChange={onCurrencyChange} />
                  <button
                    type="button"
                    onClick={cycleUnit}
                    className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2] cursor-pointer hover:bg-[#d3d8e0] transition-colors"
                    data-name="Amount Container"
                  >
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#1e293b] text-[10px] whitespace-nowrap">
                      <p className="leading-[14px]">({sym}) {displayUnit}</p>
                    </div>
                  </button>
                </div>
                
                {/* Fit Screen Button */}
                <button
                  onClick={onFitColumns}
                  className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 hover:bg-[#e2e8f0] transition-colors"
                  data-name="Button_Icon"
                >
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fit_screen/outline">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <g id="Vector" />
                      </g>
                    </svg>
                    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                        <g id="Group">
                          <path d={svgPathsCompany.p120bb00} fill="var(--fill-0, #0F172A)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Filter Button */}
                <button className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 hover:bg-[#e2e8f0] transition-colors" data-name="Button_Icon">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                        <path d={svgPathsCompany.pe961600} fill="var(--fill-0, #0F172A)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Actions */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
                <div className="bg-[#00b04f] content-stretch flex gap-[4px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0 hover:bg-[#009944] transition-colors cursor-pointer" data-name="Button">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                    <p className="leading-[16px]">Save</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron_down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                        <path d={svgPathsCompany.pae532e0} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  ref={meatballRef}
                  onClick={handleMeatballClick}
                  className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:bg-white/10 rounded transition-colors"
                  data-name="Meatball menu"
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                      <path d={svgPathsCompany.p56f6880} fill="var(--fill-0, #94A3B8)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Firm/Fund view - show original meatball menu
            <>
              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px" data-name="Title" />
              <div 
                ref={meatballRef}
                onClick={handleMeatballClick}
                className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:bg-white/10 rounded transition-colors" 
                data-name="Meatball menu"
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                    <path d={svgPaths.p56f6880} fill="var(--fill-0, #94A3B8)" id="Vector" />
                  </svg>
                </div>
              </div>
            </>
          )}

          {/* Dropdown menu – portalled to body */}
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
                    // Handle Settings action
                  }}
                  className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
                >
                  <span className="leading-4">Settings</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                    // Handle User Management action
                  }}
                  className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
                >
                  <span className="leading-4">User Management</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                    // Handle Single Sign-On action
                  }}
                  className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
                >
                  <span className="leading-4">Single Sign-On</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(false);
                    // Handle SCIM action
                  }}
                  className="w-full flex items-center px-2 py-2 text-left text-xs text-[#475569] hover:bg-[#e9ebef] hover:text-[#030213] transition-colors cursor-pointer rounded"
                >
                  <span className="leading-4">SCIM</span>
                </button>
              </div>,
              document.body,
            )}
        </div>
      </div>
    </div>
  );
}

// ─── Tertiary Menu ──────────────────────────────────────────────────────

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
  onFitColumns: () => void;
  /** Fund page: omit Save control (Figma / product spec). */
  hideSaveButton?: boolean;
  /** Company Financials: tab strip + only (secondary bar holds currency / Save). */
  tabsOnly?: boolean;
}

function TertiaryMenuComponent({
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
  onFitColumns,
  hideSaveButton = false,
  tabsOnly = false,
}: TertiaryMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const meatballRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

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

  const handleMeatballClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!menuOpen && meatballRef.current) {
      const rect = meatballRef.current.getBoundingClientRect();
      const menuWidth = 184; // Width of dropdown menu
      const padding = 8; // Padding from screen edge
      
      // Calculate left position, ensuring it doesn't overflow right edge
      let left = rect.left;
      if (left + menuWidth > window.innerWidth - padding) {
        left = window.innerWidth - menuWidth - padding;
      }
      
      // Ensure it doesn't overflow left edge either
      if (left < padding) {
        left = padding;
      }
      
      setMenuPos({ top: rect.bottom + 4, left });
    }
    setMenuOpen((prev) => !prev);
  };

  const cycleUnit = () => {
    const idx = UNIT_CYCLE.indexOf(displayUnit);
    const next = UNIT_CYCLE[(idx + 1) % UNIT_CYCLE.length];
    onDisplayUnitChange(next);
  };

  const sym = getCurrencySymbol(currency);

  if (tabsOnly) {
    return (
      <div className="bg-[#f1f5f9] h-[48px] relative shrink-0 w-full" data-name="Tertiary Menu">
        <div className="flex flex-row items-center size-full px-[16px]">
          <div
            className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-0 relative overflow-x-auto"
            data-name="Secondary menu items"
          >
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
              type="button"
              onClick={onAddTab}
              className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#cbd5e1]/50 rounded-[4px] transition-colors"
              data-name="Menu-horizontal-item"
            >
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[20.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                    <path d={svgPaths.p951d880} fill="var(--fill-0, #64748B)" id="Vector" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f5f9] h-[48px] relative shrink-0 w-full" data-name="Tertiary Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[86px] items-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-0 relative overflow-x-auto" data-name="Secondary menu items">
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
              type="button"
              onClick={onAddTab}
              className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#cbd5e1]/50 rounded-[4px] transition-colors"
              data-name="Menu-horizontal-item"
            >
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[20.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                    <path d={svgPaths.p951d880} fill="var(--fill-0, #64748B)" id="Vector" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
              <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
                <CurrencyDropdown currency={currency} onCurrencyChange={onCurrencyChange} />
                <button
                  type="button"
                  onClick={cycleUnit}
                  className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2] cursor-pointer hover:bg-[#d3d8e0] transition-colors"
                  data-name="Amount Container"
                >
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#1e293b] text-[10px] whitespace-nowrap">
                    <p className="leading-[14px]">({sym}) {displayUnit}</p>
                  </div>
                </button>
              </div>
              <button
                onClick={onFitColumns}
                className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e1e5e9] transition-colors"
                data-name="Button_Icon"
              >
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fit_screen/outline">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="Group">
                      <g id="Vector" />
                    </g>
                  </svg>
                  <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
                      <g id="Group">
                        <path d={svgPaths.p120bb00} fill="var(--fill-0, #0F172A)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
              <div className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button_Icon">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector" />
                  </svg>
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                      <path d={svgPaths.pe961600} fill="var(--fill-0, #0F172A)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
              {!hideSaveButton && (
                <div className="bg-[#00b04f] content-stretch flex gap-[4px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
                    <p className="leading-[16px]">Save</p>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron_down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g id="Vector" />
                    </svg>
                    <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94">
                        <path d={svgPaths.pae532e0} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <div 
                ref={meatballRef}
                onClick={handleMeatballClick}
                className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:bg-[#e2e8f0] rounded transition-colors" 
                data-name="Meatball menu"
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                    <path d={svgPaths.p56f6880} fill="var(--fill-0, #0F172A)" id="Vector" />
                  </svg>
                </div>
              </div>

              {/* Dropdown menu – portalled to body */}
              {menuOpen &&
                createPortal(
                  <div
                    ref={menuRef}
                    style={{ position: "fixed", top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
                    className="bg-white content-stretch flex flex-col items-start p-[8px] rounded-[8px] shadow-lg border border-[#e5e5e5] w-[184px] font-['Inter',sans-serif]"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                        // Handle Excel Export action
                      }}
                      className="bg-white w-full flex items-center p-[8px] text-left text-[12px] text-[#475569] hover:bg-[#e9ebef] transition-colors cursor-pointer rounded"
                    >
                      <span className="leading-[16px]">Excel Export</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                        // Handle Bulk Actions action
                      }}
                      className="bg-white w-full flex items-center p-[8px] text-left text-[12px] text-[#475569] hover:bg-[#e9ebef] transition-colors cursor-pointer rounded"
                    >
                      <span className="leading-[16px]">Bulk Actions</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                        // Handle PDF Export action
                      }}
                      className="bg-white w-full flex items-center p-[8px] text-left text-[12px] text-[#475569] hover:bg-[#e9ebef] transition-colors cursor-pointer rounded"
                    >
                      <span className="leading-[16px]">PDF Export</span>
                    </button>
                  </div>,
                  document.body,
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Adapted Header ────────────────────────────────────────────────

interface FirmHeaderAdaptedProps {
  selectedDates: string[];
  onDatesChange: (dates: string[]) => void;
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
  onFitColumns: () => void;
  selectedFirm: string | null;
  onFirmChange: (firm: string | null) => void;
  primaryNavFocus: PrimaryNavSelectionFocus;
  selectedFund: string | null;
  onFundChange: (fund: string | null) => void;
  selectedCompany: string | null;
  onCompanyChange: (company: string | null) => void;
  activeSecondaryTab: string;
  onSecondaryTabChange: (tab: string) => void;
}

export function FirmHeaderAdapted({
  selectedDates,
  onDatesChange,
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
  onFitColumns,
  selectedFirm,
  onFirmChange,
  primaryNavFocus,
  selectedFund,
  onFundChange,
  selectedCompany,
  onCompanyChange,
  activeSecondaryTab,
  onSecondaryTabChange,
}: FirmHeaderAdaptedProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="Header">
      <PrimaryMenuComponent 
        selectedDates={selectedDates} 
        onDatesChange={onDatesChange}
        selectedFirm={selectedFirm}
        onFirmChange={onFirmChange}
        primaryNavFocus={primaryNavFocus}
        selectedFund={selectedFund}
        onFundChange={onFundChange}
        selectedCompany={selectedCompany}
        onCompanyChange={onCompanyChange}
      />
      {selectedFirm && (
        <>
          <SecondaryMenuComponent 
            activeTab={activeSecondaryTab}
            onTabChange={onSecondaryTabChange}
            selectedFund={selectedFund}
            selectedCompany={selectedCompany}
            currency={currency}
            onCurrencyChange={onCurrencyChange}
            displayUnit={displayUnit}
            onDisplayUnitChange={onDisplayUnitChange}
            onFitColumns={onFitColumns}
          />
          {activeSecondaryTab === "cap-table" && (!selectedFund || selectedCompany) ? (
            <CapTableTertiaryMenu
              currency={currency}
              onCurrencyChange={onCurrencyChange}
              displayUnit={displayUnit}
              onDisplayUnitChange={onDisplayUnitChange}
              onFitColumns={onFitColumns}
              onAddTab={onAddTab}
            />
          ) : selectedCompany && activeSecondaryTab === "financials" ? (
            <TertiaryMenuComponent
              currency={currency}
              onCurrencyChange={onCurrencyChange}
              displayUnit={displayUnit}
              onDisplayUnitChange={onDisplayUnitChange}
              tabs={tabs}
              activeTabId={activeTabId}
              onAddTab={onAddTab}
              onRenameTab={onRenameTab}
              onSelectTab={onSelectTab}
              onEditTab={onEditTab}
              onDuplicateTab={onDuplicateTab}
              onDeleteTab={onDeleteTab}
              onFitColumns={onFitColumns}
              tabsOnly
            />
          ) : activeSecondaryTab === "valuations" &&
            (selectedCompany || (!selectedFund && !selectedCompany)) ? (
            <ValuationsTertiaryMenu
              currency={currency}
              onCurrencyChange={onCurrencyChange}
              displayUnit={displayUnit}
              onDisplayUnitChange={onDisplayUnitChange}
              onFitColumns={onFitColumns}
            />
          ) : (activeSecondaryTab === "summary" || activeSecondaryTab === "schedule-of-investment") &&
            !selectedCompany ? (
            <TertiaryMenuComponent
              currency={currency}
              onCurrencyChange={onCurrencyChange}
              displayUnit={displayUnit}
              onDisplayUnitChange={onDisplayUnitChange}
              tabs={tabs}
              activeTabId={activeTabId}
              onAddTab={onAddTab}
              onRenameTab={onRenameTab}
              onSelectTab={onSelectTab}
              onEditTab={onEditTab}
              onDuplicateTab={onDuplicateTab}
              onDeleteTab={onDeleteTab}
              onFitColumns={onFitColumns}
              hideSaveButton={Boolean(selectedFund && !selectedCompany)}
            />
          ) : null}
        </>
      )}
    </div>
  );
}