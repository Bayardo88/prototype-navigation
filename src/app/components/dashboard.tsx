import { BarChart3, TrendingUp, Building2, Briefcase, Users } from "lucide-react";
import type { DashboardFeatureAction } from "../dashboard-nav";
import { DashboardAIPromptSection } from "./dashboard-ai-prompt";
import { DashboardTodoListSection } from "./dashboard-todo-list";
import { DashboardFeatureGridSection } from "./dashboard-feature-grid";

export function Dashboard({ onFeatureAction }: { onFeatureAction: (action: DashboardFeatureAction) => void }) {
  return (
    <div className="flex-1 bg-[#f8fafc] p-[32px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Welcome Section */}
        <div className="mb-[32px]">
          <h1 className="mb-[8px] text-[32px] font-semibold text-[#0f172a]">Welcome to Portfolio Management</h1>
          <p className="text-[16px] text-[#64748b]">
            Select a firm from the dropdown above to view your portfolio summary, or start from AI and shortcuts below.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-[32px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[12px] border border-[#e2e8f0] bg-white p-[24px] shadow-sm">
            <div className="mb-[16px] flex items-center justify-between">
              <div className="rounded-[8px] bg-[#eff6ff] p-[12px]">
                <Building2 className="size-[24px] text-[#037de8]" />
              </div>
              <span className="text-[12px] font-medium text-[#64748b]">FIRMS</span>
            </div>
            <p className="mb-[4px] text-[32px] font-semibold text-[#0f172a]">5</p>
            <p className="text-[14px] text-[#64748b]">Active firms</p>
          </div>

          <div className="rounded-[12px] border border-[#e2e8f0] bg-white p-[24px] shadow-sm">
            <div className="mb-[16px] flex items-center justify-between">
              <div className="rounded-[8px] bg-[#f0fdf4] p-[12px]">
                <Briefcase className="size-[24px] text-[#16a34a]" />
              </div>
              <span className="text-[12px] font-medium text-[#64748b]">FUNDS</span>
            </div>
            <p className="mb-[4px] text-[32px] font-semibold text-[#0f172a]">5</p>
            <p className="text-[14px] text-[#64748b]">Investment funds</p>
          </div>

          <div className="rounded-[12px] border border-[#e2e8f0] bg-white p-[24px] shadow-sm">
            <div className="mb-[16px] flex items-center justify-between">
              <div className="rounded-[8px] bg-[#fef3f2] p-[12px]">
                <Users className="size-[24px] text-[#dc2626]" />
              </div>
              <span className="text-[12px] font-medium text-[#64748b]">COMPANIES</span>
            </div>
            <p className="mb-[4px] text-[32px] font-semibold text-[#0f172a]">12</p>
            <p className="text-[14px] text-[#64748b]">Portfolio companies</p>
          </div>

          <div className="rounded-[12px] border border-[#e2e8f0] bg-white p-[24px] shadow-sm">
            <div className="mb-[16px] flex items-center justify-between">
              <div className="rounded-[8px] bg-[#fefce8] p-[12px]">
                <TrendingUp className="size-[24px] text-[#ca8a04]" />
              </div>
              <span className="text-[12px] font-medium text-[#64748b]">PERFORMANCE</span>
            </div>
            <p className="mb-[4px] text-[32px] font-semibold text-[#0f172a]">+24%</p>
            <p className="text-[14px] text-[#64748b]">Avg. portfolio growth</p>
          </div>
        </div>

        <DashboardAIPromptSection />

        <DashboardTodoListSection />

        <DashboardFeatureGridSection onFeatureAction={onFeatureAction} />

        {/* Quick Actions */}
        <div className="rounded-[12px] bg-gradient-to-br from-[#037de8] to-[#0369d1] p-[32px] text-white">
          <h2 className="mb-[12px] text-[20px] font-semibold">Quick Actions</h2>
          <p className="mb-[24px] text-[14px] text-white/80">Use these keyboard shortcuts to navigate faster</p>
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
            <div className="flex items-center gap-[12px]">
              <kbd className="rounded-[6px] bg-white/20 px-[12px] py-[6px] font-mono text-[13px]">cmd + K</kbd>
              <span className="text-[14px]">Open search</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <kbd className="rounded-[6px] bg-white/20 px-[12px] py-[6px] font-mono text-[13px]">ESC</kbd>
              <span className="text-[14px]">Close modals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
