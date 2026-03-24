import svgPaths from "../../imports/svg-cviwv6bbyb";

interface CapTableTertiaryMenuProps {
  currency: string;
  onCurrencyChange: (currency: string) => void;
  displayUnit: string;
  onDisplayUnitChange: (unit: string) => void;
  onFitColumns: () => void;
  /** Opens the same Create New Tab modal as Summary / Financials tertiary + */
  onAddTab: () => void;
  capTableVersion?: string;
}

export function CapTableTertiaryMenu({
  currency,
  onCurrencyChange,
  displayUnit,
  onDisplayUnitChange,
  onFitColumns,
  onAddTab,
  capTableVersion = "Cap Tab...",
}: CapTableTertiaryMenuProps) {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full" data-name="Tertiary Menu">
      {/* Tertiary tabs when secondary = Cap Table — order: Cap Table, Fund Ownership, Breakpoint Analysis, Cash Flow Ledger, + */}
      <div className="content-stretch flex items-center relative shrink-0" data-name="Secondary menu items">
        <div className="bg-[#cbd5e1] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Menu-horizontal-item">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Cap Table</p>
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
        {(["Fund Ownership", "Breakpoint Analysis", "Cash Flow Ledger"] as const).map((label) => (
          <div
            key={label}
            className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors"
            data-name="Menu-horizontal-item"
          >
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">{label}</p>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={onAddTab}
          className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors"
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

      {/* Title spacer */}
      <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px" data-name="Title" />

      {/* Cap Table Version picker */}
      <div className="content-stretch flex items-center relative shrink-0" data-name="Measurement Date">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
          <div className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#3d4e63] transition-colors" data-name="Picker">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Cap Table Version</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{capTableVersion}</p>
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

      {/* Measurements Container */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
        {/* Measurement value */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
          {/* Leading Header Selector - Currency and Display Unit */}
          <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
            <div 
              className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 z-[3] cursor-pointer hover:bg-[#f8fafc] transition-colors" 
              data-name="Currency Container"
              onClick={() => {
                const currencies = ["USD", "EUR", "GBP", "JPY"];
                const currentIndex = currencies.indexOf(currency);
                const nextIndex = (currentIndex + 1) % currencies.length;
                onCurrencyChange(currencies[nextIndex]);
              }}
            >
              <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00b04f] text-[10px] whitespace-nowrap">
                <p className="leading-[14px]">{currency}</p>
              </div>
            </div>
            <div 
              className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2] cursor-pointer hover:bg-[#cbd5e1] transition-colors" 
              data-name="Amount Container"
              onClick={() => {
                const units = ["($) Thousands", "($) Millions", "($) Billions", "($) Actual"];
                const currentIndex = units.indexOf(displayUnit);
                const nextIndex = (currentIndex + 1) % units.length;
                onDisplayUnitChange(units[nextIndex]);
              }}
            >
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[10px] whitespace-nowrap">
                <p className="leading-[14px]">{displayUnit}</p>
              </div>
            </div>
          </div>

          {/* Fit screen button */}
          <div 
            className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors" 
            data-name="Button_Icon"
            onClick={onFitColumns}
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
          </div>

          {/* Filter button */}
          <div className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e2e8f0] transition-colors" data-name="Button_Icon">
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

        {/* Actions */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
          <div className="bg-[#00b04f] content-stretch flex gap-[4px] items-center pl-[8px] pr-[4px] py-[4px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#009944] transition-colors" data-name="Button">
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
