export type DashboardTodoItem = {
  id: string;
  title: string;
  description: string;
  dueLabel: string;
  priority: "urgent" | "normal";
  actionLabel: string;
};

const MOCK_TODOS: DashboardTodoItem[] = [
  {
    id: "1",
    title: "Review Q4 valuation updates",
    description: "Three companies submitted revised models—confirm assumptions before sign-off.",
    dueLabel: "Due in 2 days",
    priority: "urgent",
    actionLabel: "Review",
  },
  {
    id: "2",
    title: "Finalize rollover for next reporting period",
    description: "Bulk rollover is staged; approve to push dates and lock prior period.",
    dueLabel: "Due Friday",
    priority: "normal",
    actionLabel: "Open",
  },
  {
    id: "3",
    title: "Upload missing valuation support",
    description: "Two engagements still need board decks and cap table extracts.",
    dueLabel: "Due next week",
    priority: "normal",
    actionLabel: "Complete",
  },
  {
    id: "4",
    title: "Auditor access pending",
    description: "Grant read access for external auditors on two active valuations.",
    dueLabel: "Overdue",
    priority: "urgent",
    actionLabel: "Review",
  },
  {
    id: "5",
    title: "Final reports submitted this week",
    description: "Four reports await your acknowledgment in Final Reports.",
    dueLabel: "No due date",
    priority: "normal",
    actionLabel: "Open",
  },
];

export function DashboardTodoListSection() {
  return (
    <section className="mb-[32px]" aria-labelledby="dashboard-todos-heading">
      <div className="mb-[16px] flex flex-col gap-[4px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="dashboard-todos-heading" className="text-[20px] font-semibold text-[#0f172a]">
            Your To Dos
          </h2>
          <p className="mt-[4px] text-[14px] text-[#64748b]">Action items assigned to you across portfolio workflows</p>
        </div>
      </div>

      <ul className="grid gap-[12px]">
        {MOCK_TODOS.map((item) => (
          <li key={item.id}>
            <article
              className={`flex flex-col gap-[12px] rounded-[12px] border bg-white p-[20px] shadow-sm transition-shadow sm:flex-row sm:items-center sm:justify-between ${
                item.priority === "urgent"
                  ? "border-[#fecaca] border-l-[4px] border-l-[#dc2626]"
                  : "border-[#e2e8f0]"
              } hover:shadow-md`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-[8px]">
                  <h3 className="text-[15px] font-semibold text-[#0f172a]">{item.title}</h3>
                  {item.priority === "urgent" && (
                    <span className="rounded-[4px] bg-[#fef2f2] px-[6px] py-[2px] text-[11px] font-semibold uppercase tracking-wide text-[#b91c1c]">
                      Urgent
                    </span>
                  )}
                </div>
                <p className="mt-[6px] text-[13px] leading-relaxed text-[#64748b]">{item.description}</p>
                <p className="mt-[8px] text-[12px] font-medium text-[#94a3b8]">{item.dueLabel}</p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] px-[16px] py-[8px] text-[13px] font-semibold text-[#0f172a] transition-colors hover:border-[#037de8] hover:bg-[#eff6ff] hover:text-[#037de8]"
                onClick={() => console.info("[Dashboard Todo]", item.id, item.actionLabel)}
              >
                {item.actionLabel}
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
