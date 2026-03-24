import svgPaths from "./svg-dw22cin6eo";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#cbd5e1] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Company Summary</p>
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
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">At a Glance</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Financials</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Cap Table</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Valuations</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Waterfall</p>
        </div>
      </div>
    </div>
  );
}

function CurrencyContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 z-[3]" data-name="Currency Container">
      <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00b04f] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">USD</p>
      </div>
    </div>
  );
}

function AmountContainer() {
  return (
    <div className="bg-[#e3e8f0] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2]" data-name="Amount Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">($) Thousands</p>
      </div>
    </div>
  );
}

function LeadingHeaderSelector() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Leading Header Selector">
      <CurrencyContainer />
      <AmountContainer />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
        <g id="Group">
          <path d={svgPaths.p120bb00} fill="var(--fill-0, #0F172A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MeasurementValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurement value">
      <LeadingHeaderSelector />
      <div className="bg-[#f1f5f9] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button_Icon">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fit_screen/outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
            </g>
          </svg>
          <Group />
        </div>
      </div>
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
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Meatball menu">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p56f6880} fill="var(--fill-0, #94A3B8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MeasurementsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Measurements Container">
      <MeasurementValue />
      <Actions />
    </div>
  );
}

export default function PrimaryMenu() {
  return (
    <div className="bg-[#475569] content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full" data-name="Primary Menu">
      <Frame />
      <MeasurementsContainer />
    </div>
  );
}