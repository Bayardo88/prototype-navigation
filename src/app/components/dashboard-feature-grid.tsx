import type { LucideIcon } from "lucide-react";
import {
  LineChart,
  RefreshCw,
  FileCheck2,
  FolderOpen,
  Droplets,
  UserCheck,
  Settings,
  Layers,
} from "lucide-react";
import type { DashboardFeatureAction } from "../dashboard-nav";

type FeatureDef = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  action: DashboardFeatureAction;
};

const FEATURES: FeatureDef[] = [
  {
    id: "fund-intelligence",
    title: "Fund Intelligence",
    description:
      "Find all of the details of your investments, such as IRR, MOIC, and other firm-level insights.",
    icon: LineChart,
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#037de8]",
    action: { type: "open-firm-secondary", tab: "summary" },
  },
  {
    id: "data-rollover",
    title: "Data Rollover",
    description: "Ready to start the next reporting period? Use the bulk tool to quickly rollover all companies.",
    icon: RefreshCw,
    iconBg: "bg-[#f0fdf4]",
    iconColor: "text-[#16a34a]",
    action: { type: "open-placeholder", featureId: "data-rollover" },
  },
  {
    id: "final-reports",
    title: "Final Reports",
    description:
      "Looking for that final report from XYZ company? Quickly find all your final valuation reports here.",
    icon: FileCheck2,
    iconBg: "bg-[#fefce8]",
    iconColor: "text-[#ca8a04]",
    action: { type: "open-firm-secondary", tab: "reports" },
  },
  {
    id: "documents",
    title: "Documents",
    description: "Easily find the document used for any valuation.",
    icon: FolderOpen,
    iconBg: "bg-[#f5f3ff]",
    iconColor: "text-[#7c3aed]",
    action: { type: "open-firm-secondary", tab: "documents" },
  },
  {
    id: "waterfalls",
    title: "Waterfalls",
    description:
      "Need to quickly see what would be allocated for any possible exit? Instant waterfall calculations and Excel exports.",
    icon: Droplets,
    iconBg: "bg-[#ecfeff]",
    iconColor: "text-[#0891b2]",
    action: { type: "open-firm-secondary", tab: "waterfalls" },
  },
  {
    id: "auditor-onboarding",
    title: "Auditor Onboarding",
    description:
      "Ready to invite an auditor to review your valuations? Check the current status of each valuation and verify what the auditor can access.",
    icon: UserCheck,
    iconBg: "bg-[#fff7ed]",
    iconColor: "text-[#ea580c]",
    action: { type: "open-placeholder", featureId: "auditor-onboarding" },
  },
  {
    id: "firm-settings",
    title: "Firm Settings",
    description: "Need to invite additional users or set up SSO for your firm?",
    icon: Settings,
    iconBg: "bg-[#f1f5f9]",
    iconColor: "text-[#475569]",
    action: { type: "open-placeholder", featureId: "firm-settings" },
  },
  {
    id: "comp-groups",
    title: "Comp Groups",
    description:
      "Keep commonly used sets of public companies that can quickly be reused and updated between portfolio companies.",
    icon: Layers,
    iconBg: "bg-[#fdf2f8]",
    iconColor: "text-[#db2777]",
    action: { type: "open-firm-secondary", tab: "comps" },
  },
];

export function DashboardFeatureGridSection({
  onFeatureAction,
}: {
  onFeatureAction: (action: DashboardFeatureAction) => void;
}) {
  return (
    <section className="mb-[32px]" aria-labelledby="dashboard-features-heading">
      <div className="mb-[20px]">
        <h2 id="dashboard-features-heading" className="text-[20px] font-semibold text-[#0f172a]">
          Explore Features
        </h2>
        <p className="mt-[4px] text-[14px] text-[#64748b]">Jump into tools across Portfolio Management</p>
      </div>

      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FEATURES.map(({ id, title, description, icon: Icon, iconBg, iconColor, action }) => (
          <button
            key={id}
            type="button"
            onClick={() => onFeatureAction(action)}
            className="group flex h-full flex-col rounded-[12px] border border-[#e2e8f0] bg-white p-[20px] text-left shadow-sm transition-all hover:border-[#037de8]/35 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037de8]"
          >
            <div className={`mb-[14px] inline-flex size-[44px] items-center justify-center rounded-[10px] ${iconBg}`}>
              <Icon className={`size-[22px] ${iconColor}`} aria-hidden />
            </div>
            <h3 className="text-[15px] font-semibold text-[#0f172a] group-hover:text-[#037de8]">{title}</h3>
            <p className="mt-[8px] flex-1 text-[13px] leading-relaxed text-[#64748b]">{description}</p>
            <span className="mt-[14px] text-[12px] font-semibold text-[#037de8] opacity-0 transition-opacity group-hover:opacity-100">
              Open →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
