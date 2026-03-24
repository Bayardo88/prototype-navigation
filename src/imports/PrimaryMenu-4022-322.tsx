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
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Financials</p>
        </div>
      </div>
      <div className="bg-[#cbd5e1] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] whitespace-nowrap">
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

export default function PrimaryMenu() {
  return (
    <div className="bg-[#475569] content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full" data-name="Primary Menu">
      <Frame />
    </div>
  );
}