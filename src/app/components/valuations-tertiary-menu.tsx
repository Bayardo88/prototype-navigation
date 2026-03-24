import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-cviwv6bbyb";
import {
  CURRENCIES,
  getCurrencySymbol,
  UNIT_CYCLE,
  type Currency,
  type DisplayUnit,
} from "./shared-types";

interface ValuationsTertiaryMenuProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  displayUnit: DisplayUnit;
  onDisplayUnitChange: (u: DisplayUnit) => void;
  onFitColumns: () => void;
}

const INACTIVE_LABELS = [
  "GPC",
  "GT",
  "Backsolve",
  "Future Exit",
  "Discounted Cash Flow",
  "External Valuation",
] as const;

/** Inactive tab radius per [Navigation V3 node 206:4949] — only GPC uses rounded-[4px] when inactive. */
function valuationsTertiaryInactiveRounded(label: string): string {
  return label === "GPC" ? "rounded-[4px]" : "";
}

function ValuationsCurrencyTrigger({
  currency,
  onCurrencyChange,
}: {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}) {
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
        data-name="Currency Container"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#e3e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]"
        />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#00b04f] text-[10px] tracking-[0] whitespace-nowrap">
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
                type="button"
                onClick={() => {
                  onCurrencyChange(c.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-2 py-1.5 text-left transition-colors hover:bg-[#f0f4f8] ${
                  currency === c.code ? "bg-[#f0f7ff]" : ""
                }`}
              >
                <span className="text-[10px] font-semibold text-[#00b04f] w-[32px]">{c.symbol}</span>
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

/** [Navigation V3 node 206:4949] — tertiary row when secondary Valuations is selected */
export function ValuationsTertiaryMenu({
  currency,
  onCurrencyChange,
  displayUnit,
  onDisplayUnitChange,
  onFitColumns,
}: ValuationsTertiaryMenuProps) {
  const sym = getCurrencySymbol(currency);

  const cycleUnit = () => {
    const idx = UNIT_CYCLE.indexOf(displayUnit);
    const next = UNIT_CYCLE[(idx + 1) % UNIT_CYCLE.length];
    onDisplayUnitChange(next);
  };

  return (
    <div
      className="bg-[#f1f5f9] content-stretch flex gap-[86px] items-center px-[16px] py-[8px] relative w-full border-b border-[#e2e8f0]"
      data-name="Tertiary Menu"
    >
      <div
        className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative overflow-x-auto"
        data-name="Secondary menu items"
      >
        <div
          className="bg-[#cbd5e1] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 cursor-pointer"
          data-name="Menu-horizontal-item"
        >
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] tracking-[0] whitespace-nowrap">
            <p className="leading-[16px]">Valuation Summary</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Meatball_menu">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
            <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
                <path d={svgPaths.p2221d880} fill="var(--fill-0, #0F172A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        {INACTIVE_LABELS.map((label) => (
          <div
            key={label}
            className={`content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#e2e8f0]/80 transition-colors ${valuationsTertiaryInactiveRounded(label)}`}
            data-name="Menu-horizontal-item"
          >
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0] whitespace-nowrap">
              <p className="leading-[16px]">{label}</p>
            </div>
          </div>
        ))}
        <div
          className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#e2e8f0]/80 transition-colors"
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
        </div>
      </div>

      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
          <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
            <ValuationsCurrencyTrigger currency={currency} onCurrencyChange={onCurrencyChange} />
            <button
              type="button"
              onClick={cycleUnit}
              className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2] cursor-pointer hover:bg-[#d3d8e0] transition-colors"
              data-name="Amount Container"
            >
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[#1e293b] text-[10px] tracking-[0] whitespace-nowrap">
                <p className="leading-[14px]">
                  ({sym}) {displayUnit}
                </p>
              </div>
            </button>
          </div>
          <button
            type="button"
            onClick={onFitColumns}
            className="bg-[#f1f5f9] content-stretch flex gap-[0px] items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors"
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
          <div
            className="bg-[#f1f5f9] content-stretch flex gap-[0px] items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors"
            data-name="Button_Icon"
          >
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
          <div className="bg-[#00b04f] content-stretch flex gap-[4px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#009944] transition-colors" data-name="Button">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0] whitespace-nowrap">
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
          <div className="overflow-clip relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Meatball menu">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
            <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
                <path d={svgPaths.p56f6880} fill="var(--fill-0, #0F172A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
