import svgPaths from "./svg-ian85gulwk";

export default function ButtonIcon() {
  return (
    <div className="bg-[#e5e5e5] content-stretch flex items-center p-[4px] relative rounded-[4px] size-full" data-name="Button_Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="fit_screen/outline">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <g id="Vector" />
          </g>
        </svg>
        <div className="absolute inset-[16.67%_8.33%]" data-name="Group">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
            <g id="Group">
              <path d={svgPaths.p120bb00} fill="var(--fill-0, #1A1A1A)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}