function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Firm Summary</p>
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
      <div className="bg-[#cbd5e1] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
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

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[0] not-italic p-[4px] relative shrink-0 text-[14px] text-center whitespace-nowrap" data-name="Information Label">
        <div className="flex flex-col justify-center relative shrink-0 text-[#e3e8f0]">
          <p className="leading-[20px]">Equity Value</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#00b04f]">
          <p className="leading-[20px]">$34,560,000</p>
        </div>
      </div>
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[0] not-italic p-[4px] relative shrink-0 text-[14px] text-center whitespace-nowrap" data-name="Information Label">
        <div className="flex flex-col justify-center relative shrink-0 text-[#e3e8f0]">
          <p className="leading-[20px]">Unrealized Firm Total</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#00b04f]">
          <p className="leading-[20px]">$48,871,695</p>
        </div>
      </div>
      <div className="bg-[#334155] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Picker">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Valuation Version</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">12/31/2023</p>
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
  );
}

function MeasurementDate() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Measurement Date">
      <Container />
    </div>
  );
}

export default function PrimaryMenu() {
  return (
    <div className="bg-[#475569] content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full" data-name="Primary Menu">
      <Frame />
      <MeasurementDate />
    </div>
  );
}