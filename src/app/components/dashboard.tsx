import { BarChart3, TrendingUp, Building2, Briefcase, Users } from "lucide-react";

export function Dashboard() {
  return (
    <div className="flex-1 bg-[#f8fafc] p-[32px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Welcome Section */}
        <div className="mb-[32px]">
          <h1 className="text-[32px] font-semibold text-[#0f172a] mb-[8px]">
            Welcome to Portfolio Management
          </h1>
          <p className="text-[16px] text-[#64748b]">
            Select a firm from the dropdown above to view your portfolio summary
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[32px]">
          <div className="bg-white rounded-[12px] p-[24px] border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="bg-[#eff6ff] p-[12px] rounded-[8px]">
                <Building2 className="size-[24px] text-[#037de8]" />
              </div>
              <span className="text-[12px] text-[#64748b] font-medium">FIRMS</span>
            </div>
            <p className="text-[32px] font-semibold text-[#0f172a] mb-[4px]">3</p>
            <p className="text-[14px] text-[#64748b]">Active firms</p>
          </div>

          <div className="bg-white rounded-[12px] p-[24px] border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="bg-[#f0fdf4] p-[12px] rounded-[8px]">
                <Briefcase className="size-[24px] text-[#16a34a]" />
              </div>
              <span className="text-[12px] text-[#64748b] font-medium">FUNDS</span>
            </div>
            <p className="text-[32px] font-semibold text-[#0f172a] mb-[4px]">5</p>
            <p className="text-[14px] text-[#64748b]">Investment funds</p>
          </div>

          <div className="bg-white rounded-[12px] p-[24px] border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="bg-[#fef3f2] p-[12px] rounded-[8px]">
                <Users className="size-[24px] text-[#dc2626]" />
              </div>
              <span className="text-[12px] text-[#64748b] font-medium">COMPANIES</span>
            </div>
            <p className="text-[32px] font-semibold text-[#0f172a] mb-[4px]">12</p>
            <p className="text-[14px] text-[#64748b]">Portfolio companies</p>
          </div>

          <div className="bg-white rounded-[12px] p-[24px] border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="bg-[#fefce8] p-[12px] rounded-[8px]">
                <TrendingUp className="size-[24px] text-[#ca8a04]" />
              </div>
              <span className="text-[12px] text-[#64748b] font-medium">PERFORMANCE</span>
            </div>
            <p className="text-[32px] font-semibold text-[#0f172a] mb-[4px]">+24%</p>
            <p className="text-[14px] text-[#64748b]">Avg. portfolio growth</p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-[12px] p-[32px] border border-[#e2e8f0] shadow-sm mb-[32px]">
          <div className="flex items-start gap-[16px] mb-[24px]">
            <div className="bg-[#eff6ff] p-[12px] rounded-[8px]">
              <BarChart3 className="size-[28px] text-[#037de8]" />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold text-[#0f172a] mb-[8px]">
                Getting Started
              </h2>
              <p className="text-[14px] text-[#64748b]">
                Select a firm from the dropdown in the header to begin exploring your portfolio data
              </p>
            </div>
          </div>

          <div className="space-y-[16px]">
            <div className="flex items-start gap-[12px]">
              <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#037de8] flex items-center justify-center text-white text-[12px] font-semibold">
                1
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#0f172a] mb-[4px]">
                  Select a Firm
                </p>
                <p className="text-[13px] text-[#64748b]">
                  Click on the firm dropdown in the header to choose from available firms
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[12px]">
              <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#037de8] flex items-center justify-center text-white text-[12px] font-semibold">
                2
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#0f172a] mb-[4px]">
                  Filter by Fund or Company
                </p>
                <p className="text-[13px] text-[#64748b]">
                  Optionally narrow down your view by selecting a specific fund or company
                </p>
              </div>
            </div>

            <div className="flex items-start gap-[12px]">
              <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#037de8] flex items-center justify-center text-white text-[12px] font-semibold">
                3
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#0f172a] mb-[4px]">
                  View Portfolio Data
                </p>
                <p className="text-[13px] text-[#64748b]">
                  Explore detailed metrics, add custom columns, and manage multiple tabs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-[#037de8] to-[#0369d1] rounded-[12px] p-[32px] text-white">
          <h2 className="text-[20px] font-semibold mb-[12px]">Quick Actions</h2>
          <p className="text-[14px] text-white/80 mb-[24px]">
            Use these keyboard shortcuts to navigate faster
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <kbd className="bg-white/20 px-[12px] py-[6px] rounded-[6px] text-[13px] font-mono">
                cmd + K
              </kbd>
              <span className="text-[14px]">Open search</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <kbd className="bg-white/20 px-[12px] py-[6px] rounded-[6px] text-[13px] font-mono">
                ESC
              </kbd>
              <span className="text-[14px]">Close modals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
