import svgPaths from "../../imports/svg-0l2mu7a3oe";
import imgAvatar from "@/assets/7988f0c1d291e15af6b050e31020b2eccc85ea2d.png";

function LogoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d={svgPaths.p35e70c00} fill="#037DE8" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 13.334 14" fill="none">
      <path d={svgPaths.p2653ee00} fill="#B3B3B3" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="15" height="12" viewBox="0 0 14.6667 11.3333" fill="none">
      <path d={svgPaths.p1adf7d00} fill="#B3B3B3" />
      <path d={svgPaths.p1dd53b00} fill="#B3B3B3" />
      <path d={svgPaths.pa89cd00} fill="#B3B3B3" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="11" viewBox="0 0 13.3333 10.6667" fill="none">
      <path d={svgPaths.p2ccca700} fill="#B3B3B3" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 13.3333 11.3333" fill="none">
      <path d={svgPaths.p1b43600} fill="#B3B3B3" />
    </svg>
  );
}

export function Sidebar() {
  return (
    <div className="flex flex-col items-center w-16 bg-white border-r border-[#e5e5e5] shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-center py-4 px-2">
        <LogoIcon />
      </div>

      {/* Icon buttons */}
      <div className="flex flex-col items-center gap-2 flex-1 px-2 pt-1">
        <button className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <ChartIcon />
        </button>
        <button className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <TrendIcon />
        </button>
        <button className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <GridIcon />
        </button>

        <div className="w-8 flex-1" />

        <button className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <HomeIcon />
        </button>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-[#e1e1e2] my-2" />

      {/* Avatars */}
      <div className="flex flex-col items-center gap-2 pb-3">
        <div className="flex items-center justify-center size-8 rounded-full border-2 border-[#037de8]">
          <span className="text-[#037de8] text-xs font-bold font-['Inter',sans-serif]">BV</span>
        </div>
        <div className="relative size-8 rounded-full border-2 border-[#037de8] overflow-hidden">
          <img src={imgAvatar} alt="Avatar" className="absolute inset-0 size-full object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
}
