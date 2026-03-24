function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[184px]">
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[102px]">
              <p className="leading-[16px]">Firm Name 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[102px]">
              <p className="leading-[16px]">Firm Name 2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[102px]">
              <p className="leading-[16px]">Firm Name 4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">Firm Name 5</p>
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

export default function FirmList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] size-full" data-name="Firm List">
      <div className="content-stretch flex flex-col h-[128px] items-start relative shrink-0 w-full" data-name="Menu Container">
        <MenuItems />
      </div>
    </div>
  );
}