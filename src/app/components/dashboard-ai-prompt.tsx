import { useState, useCallback } from "react";
import { Sparkles } from "lucide-react";

const EXAMPLE_CHIPS = [
  "Show me portfolio companies with the highest IRR by fund",
  "Create a dashboard for unrealized investments with declining performance",
  "Compare MOIC and revenue growth across all companies in Fund II",
  "Summarize exposure by sector and vintage year across the portfolio",
] as const;

const PLACEHOLDER_HINTS = `${EXAMPLE_CHIPS[0]}\n\nTry an example below, or describe your own analysis.`;

export function DashboardAIPromptSection() {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = useCallback(() => {
    // TODO: POST to AI dashboard generation API when backend is ready
    const trimmed = prompt.trim();
    if (!trimmed) return;
    console.info("[Dashboard AI] Generate dashboard:", trimmed);
  }, [prompt]);

  const applyChip = useCallback((text: string) => {
    setPrompt(text);
  }, []);

  return (
    <section
      className="relative mb-[32px] overflow-hidden rounded-[12px] border border-[#e2e8f0] bg-white shadow-sm"
      aria-labelledby="dashboard-ai-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6366f1] via-[#037de8] to-[#22d3ee]" />
      <div className="p-[28px] sm:p-[32px]">
        <div className="mb-[20px] flex flex-col gap-[12px] sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-[14px]">
            <div className="flex size-[44px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#eef2ff] to-[#e0f2fe]">
              <Sparkles className="size-[22px] text-[#037de8]" aria-hidden />
            </div>
            <div>
              <h2 id="dashboard-ai-heading" className="text-[20px] font-semibold tracking-tight text-[#0f172a]">
                Create a Dashboard with AI
              </h2>
              <p className="mt-[6px] max-w-[720px] text-[14px] leading-relaxed text-[#64748b]">
                Describe the analysis you want across your portfolio—funds, companies, performance, or custom cuts. We&apos;ll
                generate a tailored dashboard layout you can refine.
              </p>
            </div>
          </div>
        </div>

        <label htmlFor="dashboard-ai-prompt" className="sr-only">
          Dashboard prompt
        </label>
        <textarea
          id="dashboard-ai-prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={PLACEHOLDER_HINTS}
          rows={5}
          className="mb-[12px] w-full resize-y rounded-[10px] border border-[#cbd5e1] bg-[#f8fafc] px-[14px] py-[12px] font-['Inter',sans-serif] text-[14px] leading-relaxed text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors focus:border-[#037de8] focus:bg-white focus:ring-2 focus:ring-[#037de8]/20"
        />

        <div className="mb-[16px] flex flex-wrap gap-[8px]">
          {EXAMPLE_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => applyChip(chip)}
              className="max-w-full rounded-full border border-[#e2e8f0] bg-white px-[12px] py-[6px] text-left text-[12px] font-medium text-[#475569] transition-colors hover:border-[#037de8]/40 hover:bg-[#f8fafc] hover:text-[#0f172a]"
            >
              <span className="line-clamp-2">{chip}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex h-[44px] items-center justify-center rounded-[8px] bg-[#037de8] px-[24px] text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#0269c1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037de8] disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!prompt.trim()}
          >
            Generate Dashboard
          </button>
          <p className="text-[12px] text-[#94a3b8]">Responses are generated for your firm&apos;s data scope.</p>
        </div>
      </div>
    </section>
  );
}
