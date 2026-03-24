import svgPaths from "./svg-anjv3pscpg";

function ButtonIcon() {
  return (
    <div className="bg-[#e3e8f0] relative rounded-[8px] shrink-0 w-full" data-name="Button_Icon">
      <div aria-hidden="true" className="absolute border border-[#64748b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Search">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" />
            </svg>
            <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
                <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #1E293B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Find a Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[184px]">
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">Figma</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#94a3b8] relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0f172a] text-[12px]">
              <p className="leading-[16px]">X-Code LLC</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">ACME Inc.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">{`Capsule Corp. `}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="menu items">
      <Frame />
    </div>
  );
}

export default function CompanyList() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] size-full" data-name="Company List">
      <ButtonIcon />
      <div className="content-stretch flex flex-col h-[128px] items-start relative shrink-0 w-full" data-name="Menu Container">
        <MenuItems />
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#037de8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                  <path d={svgPaths.p951d880} fill="var(--fill-0, #037DE8)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[16px]">Add New Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}