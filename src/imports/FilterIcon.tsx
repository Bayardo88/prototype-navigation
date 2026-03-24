import svgPaths from "./svg-kahe0su0d2";

function Group1() {
  return (
    <div className="absolute inset-[12.5%_4.17%_16.67%_4.17%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 11.3333">
        <g id="Group">
          <path d={svgPaths.p1adf7d00} fill="var(--fill-0, #F1F5F9)" id="Vector" />
          <path d={svgPaths.p1dd53b00} fill="var(--fill-0, #F1F5F9)" id="Vector_2" />
          <path d={svgPaths.pa89cd00} fill="var(--fill-0, #F1F5F9)" id="Vector_3" />
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

export default function FilterIcon() {
  return (
    <div className="relative size-full" data-name="Filter icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
      <Group />
    </div>
  );
}