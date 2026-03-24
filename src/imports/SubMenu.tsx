function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[184px]">
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] w-[102px]">
              <p className="leading-[16px]">Excel Export</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">Bulk Actions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Submenu Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#475569] text-[12px]">
              <p className="leading-[16px]">PDF Export</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu Container">
      <Frame />
    </div>
  );
}

export default function SubMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] size-full" data-name="sub-Menu">
      <MenuContainer />
    </div>
  );
}