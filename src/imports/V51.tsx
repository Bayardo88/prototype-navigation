import svgPaths from "./svg-4gvzye2o7g";
import imgAvatar from "@/assets/7988f0c1d291e15af6b050e31020b2eccc85ea2d.png";

function Frame() {
  return (
    <div className="h-[39.5px] relative shrink-0 w-[24.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 39.5">
        <g id="Frame 2361">
          <path d={svgPaths.p32b5b980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[-10.25px] p-[10px] top-[-17.75px]">
      <Frame />
    </div>
  );
}

function BiThreeDotsVertical() {
  return (
    <div className="-translate-y-1/2 absolute overflow-clip right-[-138px] size-[24px] top-[calc(50%-306px)]" data-name="bi:three-dots-vertical">
      <Frame1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-y-1/2 absolute contents right-[-138px] top-[calc(50%-306px)]">
      <BiThreeDotsVertical />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[16px] relative w-full">
          <div className="relative shrink-0 size-[40px]" data-name="Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p35e70c00} fill="var(--fill-0, #037DE8)" id="Logo" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_4.17%_16.67%_4.17%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 11.3333">
        <g id="Group">
          <path d={svgPaths.p1adf7d00} fill="var(--fill-0, #B3B3B3)" id="Vector" />
          <path d={svgPaths.p1dd53b00} fill="var(--fill-0, #B3B3B3)" id="Vector_2" />
          <path d={svgPaths.pa89cd00} fill="var(--fill-0, #B3B3B3)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%_4.17%_16.67%_4.17%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Div() {
  return <div className="flex-[1_0_0] min-h-px min-w-px rounded-[4px] w-[32px]" data-name="Div" />;
}

function Icons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Icons">
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Style=Default, State=Default">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.334 14">
              <path d={svgPaths.p2653ee00} fill="var(--fill-0, #B3B3B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Style=Default, State=Default">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Group">
              <g id="Vector" />
            </g>
          </svg>
          <Group />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Style=Default, State=Default">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
              <path d={svgPaths.p2ccca700} fill="var(--fill-0, #B3B3B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Div />
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Side-Bar_Icon">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 11.3333">
              <path d={svgPaths.p1b43600} fill="var(--fill-0, #B3B3B3)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="avatar">
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 size-[32px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-2 border-[#037de8] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">BV</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[8px] pointer-events-none relative rounded-[24px] shrink-0 size-[32px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgAvatar} />
        <div aria-hidden="true" className="absolute border-2 border-[#037de8] border-solid inset-0 rounded-[24px]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[8px] relative size-full">
          <Icons />
          <div className="h-px relative shrink-0 w-[48px]" data-name="Divider">
            <div aria-hidden="true" className="absolute border border-[#e1e1e2] border-solid inset-0 pointer-events-none" />
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">The Firm</p>
      </div>
    </div>
  );
}

function PrimaryMenu() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Primary Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[4px] relative w-full">
          <Title />
          <div className="bg-[#f6f6f6] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Picker">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Measurement Date</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#037de8] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Most Recent</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dorop_down">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                  <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #666666)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryMenuItems() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Secondary menu items">
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[16px]">Summary</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9acbf6] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Settings</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9acbf6] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Comp Groups</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dorop_down">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 3.33333">
              <path d={svgPaths.p357a42c0} fill="var(--fill-0, #9ACBF6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9acbf6] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">User Management</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9acbf6] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Waterfall</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#9acbf6] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Single Sign On</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryMenu() {
  return (
    <div className="bg-[#013e73] relative shrink-0 w-full" data-name="Secondary Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <SecondaryMenuItems />
        </div>
      </div>
    </div>
  );
}

function SecondaryMenuItems1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Secondary menu items">
      <div className="bg-[#ccc] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Default Firm Summary</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Meatball_menu">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
              <path d={svgPaths.p2221d880} fill="var(--fill-0, #1A1A1A)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Menu-horizontal-item">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">At a Glance</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Meatball_menu">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
              <path d={svgPaths.p2221d880} fill="var(--fill-0, #808080)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrencyContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 z-[3]" data-name="Currency Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#00b04f] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">USD</p>
      </div>
    </div>
  );
}

function AmountContainer() {
  return (
    <div className="bg-[#e5e5e5] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 z-[2]" data-name="Amount Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[10px] whitespace-nowrap">
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <LeadingHeaderSelector />
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] not-italic p-[4px] relative shrink-0 text-[12px] text-center whitespace-nowrap" data-name="Information Label">
        <div className="flex flex-col justify-center relative shrink-0 text-[#333]">
          <p className="leading-[16px]">Fiscal Year End:</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#3597ed]">
          <p className="leading-[16px]">12/31</p>
        </div>
      </div>
      <div className="bg-[#e5e5e5] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button_Icon">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Search">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 11.66">
              <path d={svgPaths.p2f0511f0} fill="var(--fill-0, #1A1A1A)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#e5e5e5] content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button_Icon">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Filter">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
              <path d={svgPaths.pe961600} fill="var(--fill-0, #1A1A1A)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TertiaryMenu() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Tertiary Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[86px] items-center pr-[16px] relative w-full">
          <SecondaryMenuItems1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-0 w-[1304px]" data-name="Header">
      <PrimaryMenu />
      <SecondaryMenu />
      <TertiaryMenu />
    </div>
  );
}

function DateContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function DateContainer19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(91.67%+5px)] top-[104px] w-[109px]">
      <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[8px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
              <p className="leading-[14px] whitespace-pre-wrap">Add Column</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                  <path d={svgPaths.p951d880} fill="var(--fill-0, #666666)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="absolute right-0 size-[8px] top-0">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer1 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer2 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer3 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer4 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer5 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer6 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer7 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer8 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer9 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer10 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer11 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer12 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer13 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer14 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer16 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer17 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer18 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[4px] relative size-full">
            <DateContainer19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Global Finance Group</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Capital Investments LLC</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Goldman Sachs</p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Morgan Stanley</p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Morgan Stanley</p>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Morgan Stanley</p>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Morgan Stanley</p>
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">BlackRock</p>
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Fidelity Investments</p>
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Charles Schwab</p>
    </div>
  );
}

function Title11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Citigroup</p>
    </div>
  );
}

function Title12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Wells Fargo</p>
    </div>
  );
}

function Title13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Bank of America</p>
    </div>
  );
}

function Title14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Deutsche Bank</p>
    </div>
  );
}

function Title15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">UBS Group</p>
    </div>
  );
}

function Title16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Barclays</p>
    </div>
  );
}

function Title17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Credit Suisse</p>
    </div>
  );
}

function Title18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Nomura Holdings</p>
    </div>
  );
}

function Title19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">AllianceBernstein</p>
    </div>
  );
}

function Title20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">BlackRock</p>
    </div>
  );
}

function Title21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Vanguard</p>
    </div>
  );
}

function Title22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Total</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[144px] w-[185px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title1 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title2 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title3 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title4 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Minus">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Group">
                  <g id="Vector" />
                  <path d={svgPaths.p27763400} fill="var(--fill-0, #999999)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] pl-[16px] pr-[4px] py-[4px] relative w-full">
            <Title5 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] pl-[16px] pr-[4px] py-[4px] relative w-full">
            <Title6 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] pl-[16px] pr-[4px] py-[4px] relative w-full">
            <Title7 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title8 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                  <path d={svgPaths.p951d880} fill="var(--fill-0, #999999)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title9 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title10 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title11 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                  <path d={svgPaths.p951d880} fill="var(--fill-0, #999999)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title12 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title13 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title14 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title16 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title17 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title18 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title19 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title20 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title21 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Global Wealth Partners</p>
    </div>
  );
}

function Title24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Pinnacle Capital Group</p>
    </div>
  );
}

function Title25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Silverstone Investments</p>
    </div>
  );
}

function Title26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Summit Financial Services</p>
    </div>
  );
}

function Title27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Summit Financial Services</p>
    </div>
  );
}

function Title28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Summit Financial Services</p>
    </div>
  );
}

function Title29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Summit Financial Services</p>
    </div>
  );
}

function Title30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Evergreen Asset Management</p>
    </div>
  );
}

function Title31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Visionary Investments</p>
    </div>
  );
}

function Title32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Noble Wealth Advisors</p>
    </div>
  );
}

function Title33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Citadel Financial Group</p>
    </div>
  );
}

function Title34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Frontier Bank</p>
    </div>
  );
}

function Title35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Unity Bank Corp</p>
    </div>
  );
}

function Title36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Horizon Bank</p>
    </div>
  );
}

function Title37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Vertex Capital Group</p>
    </div>
  );
}

function Title38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Crescent Financial Services</p>
    </div>
  );
}

function Title39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Atlas Investment Group</p>
    </div>
  );
}

function Title40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Atlas Investment Group</p>
    </div>
  );
}

function Title41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Atlas Investment Group</p>
    </div>
  );
}

function Title42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Zenith Holdings</p>
    </div>
  );
}

function Title43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">Synergy Investments</p>
    </div>
  );
}

function Title44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#013e73] text-[10px]">&nbsp;</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(16.67%+21px)] top-[144px] w-[170px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title23 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title24 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title25 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title26 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title27 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title28 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title29 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title30 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title31 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title32 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title33 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title34 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title35 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title36 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title37 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title38 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title39 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title40 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title41 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title42 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title43 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="TItle Item Row">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <Title44 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(25%+77px)] top-[144px] w-[70px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer20 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer21 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer22 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer23 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer24 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer25 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer26 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer27 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer28 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer29 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer30 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer31 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer32 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer33 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer34 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer35 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer36 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer37 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer38 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer39 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer40 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer41 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer54() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(33.33%+33px)] top-[144px] w-[70px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer42 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer43 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer44 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer45 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer46 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer47 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer48 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer49 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer50 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer51 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer52 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer53 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer54 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer55 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer56 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer57 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer58 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer59 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer60 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer61 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer62 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer63 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer65() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer67() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer69() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer71() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer72() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer75() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer76() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer77() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer79() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer81() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer82() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer83() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">11/11/30</p>
    </div>
  );
}

function DateContainer85() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(41.67%-11px)] top-[144px] w-[70px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer64 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer65 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer66 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer67 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer68 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer69 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer70 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer71 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer72 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer73 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer74 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer75 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer76 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer77 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer78 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer79 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer80 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer81 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer82 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer83 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer84 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer85 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer86() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">30.4%</p>
    </div>
  );
}

function DateContainer87() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">25.7%</p>
    </div>
  );
}

function DateContainer88() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">32.1%</p>
    </div>
  );
}

function DateContainer89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">28.4%</p>
    </div>
  );
}

function DateContainer90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">35.6%</p>
    </div>
  );
}

function DateContainer91() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">22.9%</p>
    </div>
  );
}

function DateContainer92() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">29.3%</p>
    </div>
  );
}

function DateContainer93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">31.8%</p>
    </div>
  );
}

function DateContainer94() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">27.5%</p>
    </div>
  );
}

function DateContainer95() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">33.2%</p>
    </div>
  );
}

function DateContainer96() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">24.6%</p>
    </div>
  );
}

function DateContainer97() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">30.9%</p>
    </div>
  );
}

function DateContainer98() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">26.4%</p>
    </div>
  );
}

function DateContainer99() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">34.7%</p>
    </div>
  );
}

function DateContainer100() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">21.8%</p>
    </div>
  );
}

function DateContainer101() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">36.3%</p>
    </div>
  );
}

function DateContainer102() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">23.1%</p>
    </div>
  );
}

function DateContainer103() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">34.1%</p>
    </div>
  );
}

function DateContainer104() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">22.5%</p>
    </div>
  );
}

function DateContainer105() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">30.2%</p>
    </div>
  );
}

function DateContainer106() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">29.9%</p>
    </div>
  );
}

function DateContainer107() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">&nbsp;</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(41.67%+59px)] top-[144px] w-[50px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer86 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer87 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer88 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer89 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer90 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer91 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer92 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer93 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer94 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer95 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer96 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer97 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer98 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer99 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer100 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer101 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer102 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer103 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer104 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer105 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer106 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer107 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer108() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,500,000</p>
    </div>
  );
}

function DateContainer109() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,750,000</p>
    </div>
  );
}

function DateContainer110() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,200,000</p>
    </div>
  );
}

function DateContainer111() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,300,000</p>
    </div>
  );
}

function DateContainer112() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,500,000</p>
    </div>
  );
}

function DateContainer113() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer114() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,600,000</p>
    </div>
  );
}

function DateContainer115() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,400,000</p>
    </div>
  );
}

function DateContainer116() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,900,000</p>
    </div>
  );
}

function DateContainer117() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer118() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,300,000</p>
    </div>
  );
}

function DateContainer119() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,100,000</p>
    </div>
  );
}

function DateContainer120() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,700,000</p>
    </div>
  );
}

function DateContainer121() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer122() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,900,000</p>
    </div>
  );
}

function DateContainer123() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$14,600,000</p>
    </div>
  );
}

function DateContainer124() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,600,000</p>
    </div>
  );
}

function DateContainer125() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,800,000</p>
    </div>
  );
}

function DateContainer126() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,250,000</p>
    </div>
  );
}

function DateContainer127() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$3,800,000</p>
    </div>
  );
}

function DateContainer128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,000,000</p>
    </div>
  );
}

function DateContainer129() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,000,000</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%-5px)] top-[144px] w-[100px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer108 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer109 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer110 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer111 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer112 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer113 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer114 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer115 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer116 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer117 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer118 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer119 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer120 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer121 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer122 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer123 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer124 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer125 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer126 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer127 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer128 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer129 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer130() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,750,000</p>
    </div>
  );
}

function DateContainer131() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer132() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,500,000</p>
    </div>
  );
}

function DateContainer133() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,500,000</p>
    </div>
  );
}

function DateContainer134() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer135() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,000,000</p>
    </div>
  );
}

function DateContainer136() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,800,000</p>
    </div>
  );
}

function DateContainer137() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,800,000</p>
    </div>
  );
}

function DateContainer138() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,100,000</p>
    </div>
  );
}

function DateContainer139() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,200,000</p>
    </div>
  );
}

function DateContainer140() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,800,000</p>
    </div>
  );
}

function DateContainer141() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,300,000</p>
    </div>
  );
}

function DateContainer142() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,900,000</p>
    </div>
  );
}

function DateContainer143() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,500,000</p>
    </div>
  );
}

function DateContainer144() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,200,000</p>
    </div>
  );
}

function DateContainer145() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$15,000,000</p>
    </div>
  );
}

function DateContainer146() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer147() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,000,000</p>
    </div>
  );
}

function DateContainer148() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,500,000</p>
    </div>
  );
}

function DateContainer149() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,000,000</p>
    </div>
  );
}

function DateContainer150() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,200,000</p>
    </div>
  );
}

function DateContainer151() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,500,000</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+95px)] top-[144px] w-[100px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer130 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer131 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer132 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer133 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer134 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer135 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer136 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer137 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer138 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer139 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer140 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer141 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer142 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer143 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer144 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer145 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer146 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer147 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer148 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer149 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer150 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer151 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer152() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,750,000</p>
    </div>
  );
}

function DateContainer153() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer154() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,500,000</p>
    </div>
  );
}

function DateContainer155() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,600,000</p>
    </div>
  );
}

function DateContainer156() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer157() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,000,000</p>
    </div>
  );
}

function DateContainer158() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,800,000</p>
    </div>
  );
}

function DateContainer159() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,800,000</p>
    </div>
  );
}

function DateContainer160() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,100,000</p>
    </div>
  );
}

function DateContainer161() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,200,000</p>
    </div>
  );
}

function DateContainer162() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,500,000</p>
    </div>
  );
}

function DateContainer163() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,300,000</p>
    </div>
  );
}

function DateContainer164() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,900,000</p>
    </div>
  );
}

function DateContainer165() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,500,000</p>
    </div>
  );
}

function DateContainer166() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer167() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$15,000,000</p>
    </div>
  );
}

function DateContainer168() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer169() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,000,000</p>
    </div>
  );
}

function DateContainer170() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,500,000</p>
    </div>
  );
}

function DateContainer171() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,000,000</p>
    </div>
  );
}

function DateContainer172() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,200,000</p>
    </div>
  );
}

function DateContainer173() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,000,000</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(58.33%+81px)] top-[144px] w-[100px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer152 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer153 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer154 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer155 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer156 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer157 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer158 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer159 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer160 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer161 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer162 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer163 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer164 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer165 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer166 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer167 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer168 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer169 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer170 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer171 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer172 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer173 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer174() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,500,000</p>
    </div>
  );
}

function DateContainer175() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,750,000</p>
    </div>
  );
}

function DateContainer176() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,200,000</p>
    </div>
  );
}

function DateContainer177() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,300,000</p>
    </div>
  );
}

function DateContainer178() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,500,000</p>
    </div>
  );
}

function DateContainer179() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer180() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,600,000</p>
    </div>
  );
}

function DateContainer181() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,400,000</p>
    </div>
  );
}

function DateContainer182() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,900,000</p>
    </div>
  );
}

function DateContainer183() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer184() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,300,000</p>
    </div>
  );
}

function DateContainer185() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,100,000</p>
    </div>
  );
}

function DateContainer186() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,700,000</p>
    </div>
  );
}

function DateContainer187() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer188() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,900,000</p>
    </div>
  );
}

function DateContainer189() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$14,600,000</p>
    </div>
  );
}

function DateContainer190() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,600,000</p>
    </div>
  );
}

function DateContainer191() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,800,000</p>
    </div>
  );
}

function DateContainer192() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,250,000</p>
    </div>
  );
}

function DateContainer193() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$3,800,000</p>
    </div>
  );
}

function DateContainer194() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,000,000</p>
    </div>
  );
}

function DateContainer195() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,100,000</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(66.67%+67px)] top-[144px] w-[100px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer174 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer175 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer176 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer177 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer178 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer179 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer180 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer181 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer182 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer183 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer184 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer185 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer186 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer187 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer188 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer189 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer190 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer191 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer192 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer193 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer194 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer195 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer196() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,500,000</p>
    </div>
  );
}

function DateContainer197() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,750,000</p>
    </div>
  );
}

function DateContainer198() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,200,000</p>
    </div>
  );
}

function DateContainer199() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,300,000</p>
    </div>
  );
}

function DateContainer200() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,500,000</p>
    </div>
  );
}

function DateContainer201() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer202() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,600,000</p>
    </div>
  );
}

function DateContainer203() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,400,000</p>
    </div>
  );
}

function DateContainer204() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,900,000</p>
    </div>
  );
}

function DateContainer205() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer206() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,300,000</p>
    </div>
  );
}

function DateContainer207() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,100,000</p>
    </div>
  );
}

function DateContainer208() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,700,000</p>
    </div>
  );
}

function DateContainer209() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer210() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,900,000</p>
    </div>
  );
}

function DateContainer211() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$14,600,000</p>
    </div>
  );
}

function DateContainer212() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,600,000</p>
    </div>
  );
}

function DateContainer213() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,800,000</p>
    </div>
  );
}

function DateContainer214() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,250,000</p>
    </div>
  );
}

function DateContainer215() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$3,800,000</p>
    </div>
  );
}

function DateContainer216() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,000,000</p>
    </div>
  );
}

function DateContainer217() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,300,000</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(75%+53px)] top-[144px] w-[100px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer196 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer197 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer198 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer199 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer200 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer201 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer202 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer203 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer204 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer205 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer206 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer207 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer208 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer209 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer210 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer211 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer212 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer213 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer214 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer215 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer216 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer217 />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateContainer218() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,500,000</p>
    </div>
  );
}

function DateContainer219() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,750,000</p>
    </div>
  );
}

function DateContainer220() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,200,000</p>
    </div>
  );
}

function DateContainer221() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,300,000</p>
    </div>
  );
}

function DateContainer222() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,500,000</p>
    </div>
  );
}

function DateContainer223() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,800,000</p>
    </div>
  );
}

function DateContainer224() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,600,000</p>
    </div>
  );
}

function DateContainer225() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,400,000</p>
    </div>
  );
}

function DateContainer226() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$4,900,000</p>
    </div>
  );
}

function DateContainer227() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$8,000,000</p>
    </div>
  );
}

function DateContainer228() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$13,300,000</p>
    </div>
  );
}

function DateContainer229() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$7,100,000</p>
    </div>
  );
}

function DateContainer230() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$6,700,000</p>
    </div>
  );
}

function DateContainer231() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$12,000,000</p>
    </div>
  );
}

function DateContainer232() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$11,900,000</p>
    </div>
  );
}

function DateContainer233() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$14,600,000</p>
    </div>
  );
}

function DateContainer234() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,600,000</p>
    </div>
  );
}

function DateContainer235() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$10,800,000</p>
    </div>
  );
}

function DateContainer236() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$9,250,000</p>
    </div>
  );
}

function DateContainer237() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$3,800,000</p>
    </div>
  );
}

function DateContainer238() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,000,000</p>
    </div>
  );
}

function DateContainer239() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Date Container">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] min-h-px min-w-px not-italic relative text-[#333] text-[10px] text-right whitespace-pre-wrap">$5,600,000</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(83.33%+39px)] top-[144px] w-[80px]">
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer218 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer219 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer220 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer221 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer222 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer223 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer224 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer225 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer226 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer227 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer228 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer229 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer230 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer231 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer232 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer233 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer234 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer235 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer236 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer237 />
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer238 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] max-h-[26px] min-h-[26px] relative shrink-0 w-full" data-name="Data Cell">
        <div className="flex flex-col justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center max-h-[inherit] min-h-[inherit] p-[4px] relative w-full">
            <DateContainer239 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function V() {
  return (
    <div className="bg-white relative size-full" data-name="V5.1">
      <Group2 />
      <div className="absolute content-stretch flex flex-col h-[742px] items-start left-0 top-0" data-name="Side bar">
        <Logo />
        <Content />
      </div>
      <Header />
      <div className="absolute bg-white content-stretch flex gap-[8px] h-[40px] items-center left-[64px] min-h-[40px] p-[8px] top-[104px] w-[185px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-full justify-center leading-[0] not-italic relative shrink-0 text-[#01294c] text-[10px] whitespace-nowrap">
          <p className="leading-[14px]">Firm Portfolio Summary</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(16.67%+21px)] min-h-[40px] p-[8px] top-[104px] w-[170px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">All Funds</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Dorop_down">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 3.33333">
              <path d={svgPaths.p357a42c0} fill="var(--fill-0, #666666)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(25%+77px)] min-h-[40px] p-[8px] top-[104px] w-[70px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Valuation Date</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(33.33%+33px)] min-h-[40px] p-[8px] top-[104px] w-[70px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px] text-right">
          <p className="leading-[14px] whitespace-pre-wrap">Initial Investment</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(41.67%-11px)] min-h-[40px] p-[8px] top-[104px] w-[70px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Most Recent Investment</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(41.67%+59px)] min-h-[40px] p-[8px] top-[104px] w-[50px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">FDO %</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(50%-5px)] min-h-[40px] p-[8px] top-[104px] w-[100px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(50%+95px)] min-h-[40px] p-[8px] top-[104px] w-[100px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(58.33%+81px)] min-h-[40px] p-[8px] top-[104px] w-[100px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(66.67%+67px)] min-h-[40px] p-[8px] top-[104px] w-[100px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(75%+53px)] min-h-[40px] p-[8px] top-[104px] w-[100px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[calc(83.33%+39px)] min-h-[40px] p-[8px] top-[104px] w-[80px]" data-name="Column Header Workboard">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#01294c] text-[10px]">
          <p className="leading-[14px] whitespace-pre-wrap">Invested Capital</p>
        </div>
        <div className="absolute right-0 size-[8px] top-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M0 0H8V8L4 4L0 0Z" fill="var(--fill-0, #B3B3B3)" id="Rectangle 195" />
          </svg>
        </div>
      </div>
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}