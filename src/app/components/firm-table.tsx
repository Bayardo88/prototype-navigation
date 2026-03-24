import { useState, useRef, useCallback, useMemo, useEffect, cloneElement } from "react";
import svgPaths from "../../imports/svg-0l2mu7a3oe";
import {
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";
import { ChevronDown, X } from "lucide-react";
import { AddColumnModal } from "./add-column-modal";
import {
  KNOWLEDGE_BASE_METRICS,
  type KnowledgeBaseMetricKey,
} from "./knowledge-base-metrics";
import { formatValue } from "./shared-types";
import type { Currency, DisplayUnit } from "./shared-types";
import { getColumnLabel, DEFAULT_COLUMN_ORDER } from "./new-tab-modal";

// ─── Metric type detection & mock data generators ───────────────────────

type MetricDisplayType = "money" | "percent" | "count" | "multiple" | "boolean" | "date" | "text";

function detectMetricType(metricKey: KnowledgeBaseMetricKey): MetricDisplayType {
  const label = KNOWLEDGE_BASE_METRICS[metricKey];
  if (!label) return "text";
  if (/\(\$\)\s*$/.test(label)) return "money";
  if (/\(%\)\s*$/.test(label)) return "percent";
  if (/\(#\)\s*$/.test(label)) return "count";
  if (/\(x\)\s*$/.test(label)) return "multiple";
  if (/\(bool\)\s*$/.test(label)) return "boolean";
  if (/\(date\)\s*$/.test(label) || label.toLowerCase().includes(" date")) return "date";
  return "text";
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function getExtraMoney(rowId: string, colIndex: number): number {
  const seed = (rowId.charCodeAt(0) * 31 + colIndex * 7) % 20;
  const values = [
    2450000, 3120000, 4780000, 5340000, 6210000,
    7890000, 8150000, 9470000, 10320000, 11680000,
    1920000, 3560000, 4110000, 5890000, 6740000,
    7320000, 8900000, 9150000, 10870000, 12340000,
  ];
  return values[seed];
}

function getExtraPercent(rowId: string, colIndex: number): string {
  const s = seededRandom(rowId.charCodeAt(0) * 41 + colIndex * 13 + 7);
  return (s * 98 + 1).toFixed(1) + "%";
}

function getExtraCount(rowId: string, colIndex: number): string {
  const s = seededRandom(rowId.charCodeAt(0) * 53 + colIndex * 17 + 3);
  const val = Math.floor(s * 9999) + 1;
  return val.toLocaleString("en-US");
}

function getExtraMultiple(rowId: string, colIndex: number): string {
  const s = seededRandom(rowId.charCodeAt(0) * 67 + colIndex * 19 + 11);
  return (s * 9.5 + 0.5).toFixed(1) + "x";
}

function getExtraBoolean(rowId: string, colIndex: number): string {
  const s = seededRandom(rowId.charCodeAt(0) * 29 + colIndex * 23 + 5);
  return s > 0.5 ? "Yes" : "No";
}

function getExtraDate(rowId: string, colIndex: number): string {
  const s = seededRandom(rowId.charCodeAt(0) * 37 + colIndex * 29 + 9);
  const year = 2023 + Math.floor(s * 3);
  const month = Math.floor(s * 12) + 1;
  const day = Math.floor(s * 28) + 1;
  return `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${year.toString().slice(-2)}`;
}

const TEXT_VALUES_MAP: Record<string, string[]> = {
  companyName: ["Acme Corp", "Nova Inc", "Zenith Ltd", "Apex Global", "Orion Partners", "Vanguard Tech", "Summit Corp", "Meridian LLC"],
  funds: ["Fund I", "Fund II", "Fund III", "Growth Fund A", "Opportunity Fund", "Credit Fund II", "Flagship Fund", "Special Sits"],
  industry: ["Technology", "Healthcare", "Financial Services", "Consumer Goods", "Industrials", "Energy", "Real Estate", "Media"],
  website: ["acme.com", "nova-inc.com", "zenith.co", "apexglobal.io", "orion.com", "vanguardtech.com", "summit.co", "meridian.com"],
  valuationMethods: ["GPC", "BV, PC", "GT, BV", "PC, GT", "BV", "GPC, GT", "PC", "BV, PC, GT"],
  allocationMethods: ["OPM", "CSE", "Waterfall", "Backsolve", "OPM, CSE", "Future Exit", "SSV", "Waterfall, OPM"],
  securityNames: ["Series A", "Series B", "Series C", "Series A, B", "Common", "Series D", "Preferred", "Series B, C"],
  initialNoteConversionModel: ["Preferred", "Common", "Loan", "Preferred", "Common", "Loan", "Preferred", "Common"],
  ltmOrNtm: ["LTM", "NTM", "LTM", "NTM", "LTM", "LTM", "NTM", "NTM"],
  valuationStatus: ["Draft", "Published", "Final", "Draft", "Published", "Final", "Published", "Draft"],
  default: ["N/A", "Pending", "Active", "Complete", "In Review", "Draft", "Published", "Final"],
};

function getExtraText(rowId: string, colIndex: number, metricKey: KnowledgeBaseMetricKey): string {
  let category = "default";
  const k = metricKey as string;
  if (k.toLowerCase().includes("companyname") || k === "legalCompanyName") category = "companyName";
  else if (k === "funds") category = "funds";
  else if (k === "industry") category = "industry";
  else if (k === "website") category = "website";
  else if (k === "valuationMethods") category = "valuationMethods";
  else if (k === "allocationMethods") category = "allocationMethods";
  else if (k === "securityNames") category = "securityNames";
  else if (k === "initialNoteConversionModel") category = "initialNoteConversionModel";
  else if (k === "ltmOrNtm") category = "ltmOrNtm";
  else if (k === "valuationStatus") category = "valuationStatus";
  const arr = TEXT_VALUES_MAP[category] ?? TEXT_VALUES_MAP.default;
  const s = seededRandom(rowId.charCodeAt(0) * 43 + colIndex * 31 + 17);
  return arr[Math.floor(s * arr.length)];
}

function getExtraCellValue(
  metricKey: KnowledgeBaseMetricKey,
  metricType: MetricDisplayType,
  rowId: string,
  colIndex: number,
  currency: Currency,
  displayUnit: DisplayUnit,
): string {
  switch (metricType) {
    case "money": return formatValue(getExtraMoney(rowId, colIndex), currency, displayUnit);
    case "percent": return getExtraPercent(rowId, colIndex);
    case "count": return getExtraCount(rowId, colIndex);
    case "multiple": return getExtraMultiple(rowId, colIndex);
    case "boolean": return getExtraBoolean(rowId, colIndex);
    case "date": return getExtraDate(rowId, colIndex);
    case "text": return getExtraText(rowId, colIndex, metricKey);
    default: return "—";
  }
}

function isNumericMetric(type: MetricDisplayType): boolean {
  return type === "money";
}

// ─── Breakeven mock data generator ──────────────────────────────────────

function getBreakevenValue(rowId: string, multiplier: number): number {
  const seed = rowId.charCodeAt(0) * 31 + 17;
  const baseValues = [
    5200000, 3800000, 7100000, 4500000, 6800000,
    9200000, 2900000, 5600000, 8400000, 3200000,
    6100000, 4700000, 7800000, 5900000, 10100000,
    4200000, 6500000, 8700000, 3500000, 7400000,
  ];
  const base = baseValues[seed % baseValues.length];
  return Math.round(base * multiplier);
}

// ─── Enterprise Value helpers ───────────────────────────────────────────

const DEPENDENT_EV_METRICS = new Set<string>(["unrealizedValue", "moic", "grossIRR"]);

function getBaseEV(rowId: string): number {
  const seed = rowId.charCodeAt(0) * 31 + 42;
  const values = [
    45000000, 32000000, 78000000, 56000000, 91000000,
    23000000, 67000000, 41000000, 85000000, 38000000,
    52000000, 73000000, 29000000, 64000000, 97000000,
    35000000, 48000000, 82000000, 27000000, 71000000,
  ];
  return values[seed % values.length];
}

function getRecalculatedDependentValue(
  metricKey: string,
  rowId: string,
  colIndex: number,
  overriddenEV: number,
  currency: Currency,
  displayUnit: DisplayUnit,
): string {
  const originalEV = getBaseEV(rowId);
  const ratio = overriddenEV / originalEV;

  if (metricKey === "unrealizedValue") {
    const baseUnrealized = getExtraMoney(rowId, colIndex);
    return formatValue(Math.round(baseUnrealized * ratio), currency, displayUnit);
  }
  if (metricKey === "moic") {
    const baseMultiple = seededRandom(rowId.charCodeAt(0) * 67 + colIndex * 19 + 11) * 9.5 + 0.5;
    return (baseMultiple * ratio).toFixed(1) + "x";
  }
  if (metricKey === "grossIRR") {
    const baseIRR = seededRandom(rowId.charCodeAt(0) * 41 + colIndex * 13 + 7) * 98 + 1;
    return (baseIRR * Math.sqrt(ratio)).toFixed(1) + "%";
  }
  return "—";
}

// ─── Types ──────────────────────────────────────────────────────────────

export interface TabTableState {
  expandedParents: string[];
  extraColumns: KnowledgeBaseMetricKey[];
  columnWidths: Record<string, number>;
  selectedCell: { rowId: string; colKey: string } | null;
  columnOrder: string[];
  columnConfigs: Record<string, { multiplier?: number }>;
  evOverrides: Record<string, number>;
  sortConfig: { key: string; direction: 'asc' | 'desc' }[];
}

interface FirmRow {
  id: string;
  firmName: string;
  allFunds: string;
  valuationDate: string;
  initialInvestment: string;
  mostRecent: string;
  fdoPercent: string;
  investedCapital: string;
  realizedValue: string;
  unrealizedValue: string;
  totalValue: string;
  grossIRR: string;
  moic: string;
  investedCapitalRaw: number[];
  realizedValueRaw: number;
  unrealizedValueRaw: number;
  totalValueRaw: number;
  measurementDate: string;
  isParent?: boolean;
  isChild?: boolean;
  parentId?: string;
  expandable?: boolean;
}

// ─── Helpers ────────────────────────────────────────────────────────────

const MEASUREMENT_DATES = [
  "2025-12-31", "2025-09-30", "2025-06-30", "2025-03-31",
  "2024-12-31", "2024-09-30", "2024-06-30", "2024-03-31",
  "2023-12-31", "2023-09-30", "2023-06-30",
];

function makeRow(
  id: string,
  firm: string,
  fund: string,
  fdo: string,
  capitalRaw: number[],
  dateIndex: number,
  opts?: Partial<FirmRow>,
): FirmRow {
  const md = MEASUREMENT_DATES[dateIndex % MEASUREMENT_DATES.length];
  const investedRaw = capitalRaw[0] ?? 0;
  const realizedRaw = investedRaw * 0.3; // 30% realized
  const unrealizedRaw = investedRaw * 1.5; // 150% unrealized
  const totalRaw = realizedRaw + unrealizedRaw;
  
  return {
    id,
    firmName: firm,
    allFunds: fund,
    valuationDate: "11/11/30",
    initialInvestment: "11/11/30",
    mostRecent: "11/11/30",
    fdoPercent: fdo,
    investedCapital: formatValue(investedRaw, "USD", "Thousands"),
    realizedValue: formatValue(realizedRaw, "USD", "Thousands"),
    unrealizedValue: formatValue(unrealizedRaw, "USD", "Thousands"),
    totalValue: formatValue(totalRaw, "USD", "Thousands"),
    grossIRR: "24.5%",
    moic: "1.8x",
    investedCapitalRaw: capitalRaw,
    realizedValueRaw: realizedRaw,
    unrealizedValueRaw: unrealizedRaw,
    totalValueRaw: totalRaw,
    measurementDate: md,
    ...opts,
  };
}

// ─── Generate diverse capital values from a seed ────────────────────────

function seededCapital(seed: number): number[] {
  const base = 2000000 + ((seed * 7919) % 13000000);
  return [
    base,
    base + ((seed * 131) % 500000),
    base + ((seed * 251) % 400000),
    base,
    base,
    base,
    base,
  ];
}

function seededFdo(seed: number): string {
  return (18 + ((seed * 37) % 240) / 10).toFixed(1) + "%";
}

// ─── Mock Data (original 35 + 200 new) ──────────────────────────────────

const FIRM_NAMES: [string, string][] = [
  ["Global Finance Group", "Global Wealth Partners"],
  ["Capital Investments LLC", "Pinnacle Capital Group"],
  ["Goldman Sachs", "Silverstone Investments"],
  ["Morgan Stanley", "Summit Financial Services"],
  ["BlackRock", "Evergreen Asset Management"],
  ["Fidelity Investments", "Visionary Investments"],
  ["Charles Schwab", "Noble Wealth Advisors"],
  ["Citigroup", "Citadel Financial Group"],
  ["Wells Fargo", "Frontier Bank"],
  ["Bank of America", "Unity Bank Corp"],
  ["Deutsche Bank", "Horizon Bank"],
  ["UBS Group", "Vertex Capital Group"],
  ["Barclays", "Crescent Financial Services"],
  ["Credit Suisse", "Atlas Investment Group"],
  ["Nomura Holdings", "Atlas Investment Group"],
  ["AllianceBernstein", "Atlas Investment Group"],
  ["BlackRock", "Zenith Holdings"],
  ["Vanguard", "Synergy Investments"],
  ["JP Morgan Chase", "Pacific Asset Management"],
  ["BNP Paribas", "European Capital Partners"],
  ["HSBC Holdings", "Oriental Securities Group"],
  ["Lazard Ltd", "Strategic Advisory Partners"],
  ["Macquarie Group", "Southern Cross Investments"],
  ["Jefferies Financial", "Atlantic Capital Advisors"],
  ["Piper Sandler", "Heartland Securities"],
  ["Raymond James", "Coastal Wealth Management"],
  ["Stifel Financial", "Midwestern Asset Group"],
  ["Cowen Inc", "Venture Capital Solutions"],
  ["Moelis & Co", "Independence Advisory"],
  ["Houlihan Lokey", "Restructuring Capital"],
  ["Greenhill & Co", "Sovereign Wealth Advisors"],
  ["Evercore Partners", "Premier Equity Group"],
  ["Perella Weinberg", "Eclipse Capital Advisors"],
  ["Centerview Partners", "Diamond Hill Capital"],
  ["PJT Partners", "Blackstone Advisory"],
  // ─── 200 new firms below ──────────────────────────────────────────
  ["Bridgewater Associates", "Macro Alpha Fund"],
  ["Citadel Advisors", "Wellington Equity"],
  ["Two Sigma Investments", "Quant Systematic Fund"],
  ["Renaissance Technologies", "Medallion Partners"],
  ["Point72 Asset Mgmt", "Cohen Ventures"],
  ["Millennium Management", "Engelberg Capital"],
  ["DE Shaw & Co", "Computational Finance LP"],
  ["AQR Capital Management", "Risk Parity Fund"],
  ["Man Group", "Numeric Investors"],
  ["Baupost Group", "Value Opportunity Fund"],
  ["Elliott Management", "Singer Capital"],
  ["Viking Global Investors", "Halvorsen Partners"],
  ["Lone Pine Capital", "Mandel Growth Fund"],
  ["Tiger Global Management", "Chase Coleman LP"],
  ["Coatue Management", "Laffont Tech Fund"],
  ["Third Point LLC", "Loeb Activist Fund"],
  ["Pershing Square Capital", "Ackman Holdings"],
  ["Appaloosa Management", "Tepper Value LP"],
  ["Canyon Partners", "Distressed Credit Fund"],
  ["Oaktree Capital", "Howard Marks Fund"],
  ["Ares Management", "Private Credit Solutions"],
  ["Apollo Global Management", "Structured Finance LP"],
  ["KKR & Co", "Leveraged Buyout Fund"],
  ["Carlyle Group", "Global Private Equity"],
  ["Bain Capital", "Strategic Investments LP"],
  ["Warburg Pincus", "Growth Equity Fund"],
  ["General Atlantic", "GA Technology Partners"],
  ["Advent International", "European Buyout Fund"],
  ["Thoma Bravo", "Software Equity Partners"],
  ["Vista Equity Partners", "Enterprise Software Fund"],
  ["Silver Lake Partners", "Technology Crossover Fund"],
  ["Hellman & Friedman", "Services Buyout LP"],
  ["Leonard Green & Partners", "Consumer Equity Fund"],
  ["Providence Equity Partners", "Media Capital LP"],
  ["TPG Capital", "Diversified Growth Fund"],
  ["Francisco Partners", "Tech Buyout Fund"],
  ["Insight Partners", "Growth Stage Ventures"],
  ["Summit Partners", "Middle Market Fund"],
  ["TA Associates", "Private Equity Growth"],
  ["GTCR LLC", "Leaders Fund"],
  ["Hicks Muse Tate & Furst", "Strategic Value LP"],
  ["Welsh Carson Anderson", "Healthcare Partners"],
  ["New Mountain Capital", "Defensive Growth Fund"],
  ["Platinum Equity", "Operations Excellence Fund"],
  ["Roark Capital Group", "Franchise Equity Fund"],
  ["Clearlake Capital", "Special Situations Fund"],
  ["Genstar Capital", "Mid-Market Buyout LP"],
  ["American Securities", "Industrial Growth Fund"],
  ["Audax Group", "Private Equity Fund VII"],
  ["Berkshire Partners", "Large Cap Buyout Fund"],
  ["Charlesbank Capital", "Mid-Market Growth LP"],
  ["Court Square Capital", "Value Enhancement Fund"],
  ["Centerbridge Partners", "Credit Opportunity Fund"],
  ["GI Partners", "Technology Buyout Fund"],
  ["Golden Gate Capital", "Turnaround Partners"],
  ["Green Equity Investors", "Consumer Growth Fund"],
  ["Harvest Partners", "Small Cap Buyout LP"],
  ["HIG Capital", "Diversified Credit Fund"],
  ["Irving Place Capital", "Real Estate Value Fund"],
  ["Kelso & Company", "Leveraged Recapitalization"],
  ["Kohlberg & Company", "Middle Market Value LP"],
  ["Lindsay Goldberg", "Family Office Partners"],
  ["Madison Dearborn Partners", "Communications Fund"],
  ["MatlinPatterson Global", "Distressed Debt Fund"],
  ["Metalmark Capital", "Industrial Platform Fund"],
  ["MidOcean Partners", "European Growth Fund"],
  ["Norwest Equity Partners", "Growth Equity LP"],
  ["Oak Hill Capital Partners", "Consumer & Media Fund"],
  ["Onex Corporation", "Private Equity Partners"],
  ["Pacific Equity Partners", "Asia-Pac Buyout Fund"],
  ["Pamplona Capital Mgmt", "Healthcare Equity Fund"],
  ["Patriarch Partners", "Value Recovery Fund"],
  ["Pegasus Capital Advisors", "ESG Impact Fund"],
  ["Permira Advisers", "European Tech Buyout"],
  ["Rhone Capital", "Cross-Border Fund"],
  ["Riverstone Holdings", "Energy Transition Fund"],
  ["Searchlight Capital", "Special Situations LP"],
  ["Snow Phipps Group", "Industrials Growth Fund"],
  ["Sun Capital Partners", "Turnaround Equity Fund"],
  ["Sycamore Partners", "Retail Revival Fund"],
  ["THL Partners", "Healthcare Services Fund"],
  ["Trilantic Capital", "North America Fund"],
  ["Veritas Capital", "Government Services Fund"],
  ["Warbburg Pincus II", "Emerging Markets Fund"],
  ["Water Street Healthcare", "HC Platform Fund"],
  ["Wellspring Capital", "Value Creation Fund"],
  ["Wind Point Partners", "Industrial Services LP"],
  ["Atlas Copco Ventures", "Nordic Growth Fund"],
  ["Cerberus Capital Mgmt", "Distressed Value Fund"],
  ["Fortress Investment Group", "Macro Opportunities LP"],
  ["Angelo Gordon & Co", "Credit Recovery Fund"],
  ["Brookfield Asset Mgmt", "Infrastructure Equity Fund"],
  ["Blackstone Group", "Real Estate Capital LP"],
  ["CVC Capital Partners", "Pan-European Buyout"],
  ["EQT Partners", "Nordic Private Equity"],
  ["Apax Partners", "Digital Growth Fund"],
  ["Cinven Capital Mgmt", "European Services Fund"],
  ["BC Partners", "Mid-Cap Growth Fund"],
  ["Ardian Private Equity", "Secondaries Fund"],
  ["PAI Partners", "European Industrials Fund"],
  // ─── 100 additional new firms (IDs 136–235) ───────────────────────
  ["Intermediate Capital Group", "European Mezzanine Fund"],
  ["Partners Group", "Direct Equity Investments"],
  ["Triton Partners", "Nordic Mid-Market Fund"],
  ["Bridgepoint Capital", "European Growth Buyout"],
  ["Montagu Private Equity", "European Services LP"],
  ["Investcorp", "Gulf Strategic Partners"],
  ["Alpha Private Equity", "Southern Europe Fund"],
  ["Pamplona Capital II", "Pan-European Opportunities"],
  ["Abris Capital Partners", "Central Europe Fund"],
  ["Mid Europa Partners", "Southeast Europe Growth"],
  ["Actis Capital", "Emerging Markets PE Fund"],
  ["Abraaj Capital", "MENA Growth Fund"],
  ["Affinity Equity Partners", "Asia-Pacific Buyout"],
  ["Navis Capital Partners", "Southeast Asia Fund"],
  ["Northstar Group", "Indonesia Growth Equity"],
  ["CDH Investments", "China Growth Partners"],
  ["FountainVest Partners", "Greater China Fund"],
  ["Hillhouse Capital", "Asia Technology Fund"],
  ["Hony Capital", "China Industrial Fund"],
  ["CITIC Capital", "China Buyout Partners"],
  ["MBK Partners", "North Asia Buyout Fund"],
  ["Unison Capital", "Japan Buyout Partners"],
  ["Advantage Partners", "Japan Mid-Cap Fund"],
  ["Longreach Group", "Asia Special Situations"],
  ["Pacific Alliance Group", "Asia Credit Fund"],
  ["Baring Private Equity Asia", "Pan-Asian Growth"],
  ["KKR Asia Pacific", "Asia Infrastructure Fund"],
  ["Warburg Pincus Asia", "Growth Equity Asia LP"],
  ["CVC Asia Pacific", "Asia Buyout Fund IV"],
  ["Quadria Capital", "Healthcare Asia Fund"],
  ["Creador Capital", "Southeast Asia Partners"],
  ["Everstone Capital", "India Growth Fund"],
  ["Multiples Alternate", "India Private Equity"],
  ["Kedaara Capital", "India Consumer Fund"],
  ["Chrys Capital", "India Technology Fund"],
  ["ICICI Venture", "India Structured Fund"],
  ["Kotak Private Equity", "India Infrastructure"],
  ["Samara Capital", "India Mid-Market LP"],
  ["True North Capital", "India Growth Equity"],
  ["Advent Global Partners", "Latin America Fund"],
  ["Southern Cross Group", "South America Buyout"],
  ["Patria Investments", "Brazil Growth Fund"],
  ["Vinci Partners", "Brazil Infrastructure LP"],
  ["GP Investments", "Brazil Diversified Fund"],
  ["BTG Pactual PE", "Latin America Opportunities"],
  ["Victoria Capital Partners", "LatAm Mid-Market"],
  ["Linzor Capital Partners", "Andean Region Fund"],
  ["Mesoamerica Capital", "Central America Growth"],
  ["Nexxus Capital", "Mexico Mid-Market Fund"],
  ["Capital Indigo", "Mexico Technology Fund"],
  ["Lexington Partners", "Secondary Fund IX"],
  ["Coller Capital", "Global Secondaries Fund"],
  ["HarbourVest Partners", "Direct Co-Investment"],
  ["Pantheon Ventures", "Infrastructure Co-Invest"],
  ["Adams Street Partners", "Global PE Fund"],
  ["Hamilton Lane", "Strategic Opportunities"],
  ["StepStone Group", "Venture Capital Fund"],
  ["Neuberger Berman PE", "Co-Investment Fund"],
  ["GCM Grosvenor", "Customized Fund Invest."],
  ["Cambridge Associates", "PE Advisory Fund"],
  ["Meketa Investment Group", "Real Assets Fund"],
  ["Wilshire Associates", "Private Markets Fund"],
  ["Aksia LLC", "Alternative Investments"],
  ["Cliffwater LLC", "Liquid Alternatives Fund"],
  ["Fund Evaluation Group", "Multi-Strategy Fund"],
  ["PAAMCO Prisma", "Hedge Fund Solutions"],
  ["Rock Creek Group", "Diversified Alpha Fund"],
  ["Graham Capital Mgmt", "Systematic Macro Fund"],
  ["Winton Group", "Quantitative Research Fund"],
  ["Marshall Wace", "Eureka Fund"],
  ["Capula Investment Mgmt", "Global Relative Value"],
  ["Brevan Howard", "Macro Trading Fund"],
  ["BlueCrest Capital", "Systematic Trading LP"],
  ["Lansdowne Partners", "UK Equity Fund"],
  ["Egerton Capital", "European Long-Short"],
  ["TCI Fund Management", "Strategic Value Fund"],
  ["Odey Asset Management", "European Opportunities"],
  ["Algebris Investments", "Financial Credit Fund"],
  ["CQS Capital Management", "Multi-Asset Credit"],
  ["Cheyne Capital", "Real Estate Credit Fund"],
  ["GLG Partners", "European Long-Short LP"],
  ["Aspect Capital", "Diversified Trends Fund"],
  ["Oxford Asset Management", "Quantitative Equity"],
  ["Pelham Capital", "Long-Only Equity Fund"],
  ["Sloane Robinson", "Emerging Markets Equity"],
  ["Toscafund Asset Mgmt", "Activist Equity Fund"],
  ["Caledonia Investments", "Global Value Fund"],
  ["Brummer & Partners", "Multi-Strategy Fund"],
  ["Cevian Capital", "Nordic Activist Fund"],
  ["EQT Ventures", "European Venture Fund"],
  ["Kinnevik AB", "Digital Consumer Fund"],
  ["Industrivarden AB", "Swedish Holdings Fund"],
  ["Investor AB", "Nordic Core Holdings"],
  ["Ratos AB", "Nordic Mid-Cap Fund"],
  ["Latour Investment", "Swedish Industrials"],
  ["Lundbergs AB", "Real Estate Holdings"],
  ["Wallenstam AB", "Nordic Property Fund"],
  ["Castellum AB", "Commercial RE Fund"],
];

const firmData: FirmRow[] = [];

// Original 35 rows (including children)
const ORIGINAL_RAW: [string, string, string, string, number[], number, Partial<FirmRow>?][] = [
  ["1", "Global Finance Group", "Global Wealth Partners", "30.4%", [8500000,8750000,8750000,8500000,8500000,8500000,8500000], 0],
  ["2", "Capital Investments LLC", "Pinnacle Capital Group", "25.7%", [7750000,8000000,8000000,7750000,7750000,7750000,7750000], 1],
  ["3", "Goldman Sachs", "Silverstone Investments", "32.1%", [10200000,10500000,10500000,10200000,10200000,10200000,10200000], 2],
  ["4", "Morgan Stanley", "Summit Financial Services", "28.4%", [6300000,6500000,6600000,6300000,6300000,6300000,6300000], 0, { isParent: true, expandable: true }],
  ["4a", "Morgan Stanley", "Summit Financial Services", "35.6%", [11500000,12000000,12000000,11500000,11500000,11500000,11500000], 0, { isChild: true, parentId: "4" }],
  ["4b", "Morgan Stanley", "Summit Financial Services", "22.9%", [9800000,10000000,10000000,9800000,9800000,9800000,9800000], 0, { isChild: true, parentId: "4" }],
  ["4c", "Morgan Stanley", "Summit Financial Services", "29.3%", [5600000,5800000,5800000,5600000,5600000,5600000,5600000], 0, { isChild: true, parentId: "4" }],
  ["5", "BlackRock", "Evergreen Asset Management", "31.8%", [12400000,12800000,12800000,12400000,12400000,12400000,12400000], 3, { expandable: true }],
  ["6", "Fidelity Investments", "Visionary Investments", "27.5%", [4900000,5100000,5100000,4800000,4900000,4900000,4900000], 4],
  ["7", "Charles Schwab", "Noble Wealth Advisors", "33.2%", [8000000,8200000,8200000,8000000,8000000,8000000,8000000], 5],
  ["8", "Citigroup", "Citadel Financial Group", "24.6%", [13300000,13800000,13500000,13300000,13300000,13300000,13300000], 6, { expandable: true }],
  ["9", "Wells Fargo", "Frontier Bank", "30.9%", [7100000,7300000,7300000,7100000,7100000,7100000,7100000], 7],
  ["10", "Bank of America", "Unity Bank Corp", "26.4%", [6700000,6900000,6800000,6700000,6700000,6700000,6700000], 8],
  ["11", "Deutsche Bank", "Horizon Bank", "34.7%", [12000000,12500000,12500000,12000000,12000000,12000000,12000000], 9],
  ["12", "UBS Group", "Vertex Capital Group", "21.8%", [11900000,12200000,12000000,11800000,11900000,11900000,11900000], 10],
  ["13", "Barclays", "Crescent Financial Services", "36.3%", [14600000,15000000,15000000,14600000,14600000,14600000,14600000], 0],
  ["14", "Credit Suisse", "Atlas Investment Group", "23.1%", [9800000,9800000,9800000,9800000,9800000,9800000,9800000], 1],
  ["15", "Nomura Holdings", "Atlas Investment Group", "34.1%", [10800000,11000000,11000000,10800000,10800000,10800000,10800000], 2],
  ["16", "AllianceBernstein", "Atlas Investment Group", "22.5%", [9250000,9500000,9500000,9250000,9250000,9250000,9250000], 3],
  ["17", "BlackRock", "Zenith Holdings", "30.2%", [3800000,4000000,4000000,3800000,3800000,3800000,3800000], 4],
  ["18", "Vanguard", "Synergy Investments", "29.9%", [5000000,5200000,5200000,5000000,5000000,5000000,5000000], 5],
  ["19", "JP Morgan Chase", "Pacific Asset Management", "31.2%", [15200000,15600000,15400000,15200000,15200000,15200000,15200000], 6],
  ["20", "BNP Paribas", "European Capital Partners", "26.8%", [7400000,7600000,7600000,7400000,7400000,7400000,7400000], 7],
  ["21", "HSBC Holdings", "Oriental Securities Group", "28.9%", [9100000,9400000,9300000,9100000,9100000,9100000,9100000], 8],
  ["22", "Lazard Ltd", "Strategic Advisory Partners", "35.4%", [4200000,4400000,4400000,4200000,4200000,4200000,4200000], 9],
  ["23", "Macquarie Group", "Southern Cross Investments", "24.3%", [8900000,9200000,9100000,8900000,8900000,8900000,8900000], 10],
  ["24", "Jefferies Financial", "Atlantic Capital Advisors", "32.7%", [6100000,6300000,6300000,6100000,6100000,6100000,6100000], 0],
  ["25", "Piper Sandler", "Heartland Securities", "27.1%", [3500000,3700000,3700000,3500000,3500000,3500000,3500000], 1],
  ["26", "Raymond James", "Coastal Wealth Management", "33.8%", [5800000,6000000,6000000,5800000,5800000,5800000,5800000], 2],
  ["27", "Stifel Financial", "Midwestern Asset Group", "29.5%", [4600000,4800000,4800000,4600000,4600000,4600000,4600000], 3],
  ["28", "Cowen Inc", "Venture Capital Solutions", "20.3%", [2900000,3100000,3100000,2900000,2900000,2900000,2900000], 4],
  ["29", "Moelis & Co", "Independence Advisory", "38.1%", [7200000,7500000,7500000,7200000,7200000,7200000,7200000], 5],
  ["30", "Houlihan Lokey", "Restructuring Capital", "25.9%", [8600000,8800000,8800000,8600000,8600000,8600000,8600000], 6],
  ["31", "Greenhill & Co", "Sovereign Wealth Advisors", "31.5%", [3200000,3400000,3400000,3200000,3200000,3200000,3200000], 7],
  ["32", "Evercore Partners", "Premier Equity Group", "34.9%", [11300000,11700000,11600000,11300000,11300000,11300000,11300000], 8],
  ["33", "Perella Weinberg", "Eclipse Capital Advisors", "23.7%", [6500000,6700000,6700000,6500000,6500000,6500000,6500000], 9],
  ["34", "Centerview Partners", "Diamond Hill Capital", "36.8%", [9400000,9700000,9700000,9400000,9400000,9400000,9400000], 10],
  ["35", "PJT Partners", "Blackstone Advisory", "28.2%", [5300000,5500000,5500000,5300000,5300000,5300000,5300000], 0],
];

for (const entry of ORIGINAL_RAW) {
  const [id, firm, fund, fdo, cap, dateIdx, opts] = entry;
  firmData.push(makeRow(id, firm, fund, fdo, cap, dateIdx, opts));
}

// ─── 200 new firm rows (IDs 36–235) ────────────────────────────────────
for (let i = 0; i < 200; i++) {
  const idx = 35 + i; // index into FIRM_NAMES (0-based, first 35 are originals)
  const [firm, fund] = FIRM_NAMES[idx] ?? [`Firm ${36 + i}`, `Fund ${36 + i}`];
  const id = String(36 + i);
  const dateIdx = i % MEASUREMENT_DATES.length;
  firmData.push(
    makeRow(id, firm, fund, seededFdo(36 + i), seededCapital(36 + i), dateIdx),
  );
}

const BASE_INVESTED_HEADERS = [
  "Invested Capital",
  "Invested Capital",
  "Invested Capital",
  "Invested Capital",
  "Invested Capital",
  "Invested C...",
  "Invested C...",
];

// ─── SVG icons ──────────────────────────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 9.33333 9.33333" fill="none" className="shrink-0">
      <path d={svgPaths.p951d880} fill="#999999" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="2" viewBox="0 0 13.3333 1.34" fill="none" className="shrink-0">
      <path d={svgPaths.p27763400} fill="#999999" />
    </svg>
  );
}

// ─── Column resize handle ───────────────────────────────────────────────

interface ResizeHandleProps {
  colKey: string;
  onResize: (key: string, delta: number) => void;
}

function ResizeHandle({ colKey, onResize }: ResizeHandleProps) {
  const startX = useRef(0);
  const dragging = useRef(false);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startX.current = e.clientX;
      dragging.current = true;

      const onMouseMove = (ev: MouseEvent) => {
        if (!dragging.current) return;
        const delta = ev.clientX - startX.current;
        startX.current = ev.clientX;
        onResize(colKey, delta);
      };

      const onMouseUp = () => {
        dragging.current = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };

      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [colKey, onResize],
  );

  return (
    <div
      onMouseDown={onMouseDown}
      onClick={(e) => e.stopPropagation()}
      className="absolute right-0 top-0 bottom-0 w-[4px] cursor-col-resize hover:bg-[#037de8]/30 z-10"
      style={{ touchAction: "none" }}
    />
  );
}

// ─── Column definitions ─────────────────────────────────────────────────

const FIXED_COLS = [
  { key: "firm", label: "Firm Portfolio Summary", defaultWidth: 130 },
  { key: "funds", label: "All Funds", defaultWidth: 130 },
];

const SCROLLABLE_STATIC_COLS = [
  { key: "process", label: "Process Management", defaultWidth: 150 },
  { key: "valuation", label: "Valuation Date", defaultWidth: 100 },
  { key: "initial", label: "Initial Investment Date", defaultWidth: 120 },
  { key: "recent", label: "Most Recent Investment", defaultWidth: 130 },
  { key: "fdo", label: "Fully Diluted Ownership", defaultWidth: 120 },
  { key: "invested", label: "Invested Capital", defaultWidth: 110 },
  { key: "realized", label: "Realized Value", defaultWidth: 110 },
  { key: "unrealized", label: "Unrealized Value", defaultWidth: 110 },
  { key: "total", label: "Total Value", defaultWidth: 100 },
  { key: "irr", label: "Gross IRR", defaultWidth: 80 },
  { key: "moic", label: "MOIC", defaultWidth: 80 },
];

// ─── Sort value extraction ──────────────────────────────────────────────

function getSortValue(
  row: FirmRow,
  key: string,
  orderedExtraKeys: KnowledgeBaseMetricKey[],
  currency: Currency,
  displayUnit: DisplayUnit,
  columnConfigs: Record<string, { multiplier?: number }>,
): string | number {
  if (key === "firm") return row.firmName.toLowerCase();
  if (key === "funds") return row.allFunds.toLowerCase();
  if (key === "valuation") return row.valuationDate;
  if (key === "initial") return row.initialInvestment;
  if (key === "recent") return row.mostRecent;
  if (key === "fdo") return parseFloat(row.fdoPercent) || 0;
  if (key === "invested") return row.investedCapitalRaw[0] ?? 0;
  if (key === "realized") return row.realizedValueRaw;
  if (key === "unrealized") return row.unrealizedValueRaw;
  if (key === "total") return row.totalValueRaw;
  if (key === "irr") return parseFloat(row.grossIRR) || 0;
  if (key === "moic") return parseFloat(row.moic) || 0;
  if (key.startsWith("invested-")) {
    const idx = parseInt(key.split("-")[1], 10);
    return row.investedCapitalRaw[idx] ?? 0;
  }
  if (key.startsWith("breakeven-")) {
    const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
    return getBreakevenValue(row.id, mult);
  }
  if (key.startsWith("extra-")) {
    const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
    const extraIdx = orderedExtraKeys.indexOf(metricKey);
    const idx = extraIdx >= 0 ? extraIdx : 0;
    const mType = detectMetricType(metricKey);
    if (mType === "money") return getExtraMoney(row.id, idx);
    if (mType === "percent") return parseFloat(getExtraPercent(row.id, idx)) || 0;
    if (mType === "count") return parseInt(getExtraCount(row.id, idx).replace(/,/g, ""), 10) || 0;
    if (mType === "multiple") return parseFloat(getExtraMultiple(row.id, idx)) || 0;
    const cellVal = getExtraCellValue(metricKey, mType, row.id, idx, currency, displayUnit);
    return cellVal.toLowerCase();
  }
  return "";
}

// ─── Default table state builder ────────────────────────────────────────

export function buildDefaultTableState(): TabTableState {
  const w: Record<string, number> = {};
  FIXED_COLS.forEach((c) => (w[c.key] = c.defaultWidth));
  SCROLLABLE_STATIC_COLS.forEach((c) => (w[c.key] = c.defaultWidth));
  BASE_INVESTED_HEADERS.forEach((_, i) => (w[`invested-${i}`] = 100));
  w["add-column"] = 109;
  return {
    expandedParents: ["4"],
    extraColumns: [],
    columnWidths: w,
    selectedCell: null,
    columnOrder: DEFAULT_COLUMN_ORDER,
    columnConfigs: {},
    evOverrides: {},
    sortConfig: [],
  };
}

// ─── FirmTable Component ────────────────────────────────────────────────

interface FirmTableProps {
  selectedDates: string[];
  currency: Currency;
  displayUnit: DisplayUnit;
  containerWidth: number;
  containerHeight: number;
  tableState: TabTableState;
  onTableStateChange: (updater: TabTableState | ((prev: TabTableState) => TabTableState)) => void;
  searchQuery: string;
  fitColumnsTrigger: number;
  isFundView?: boolean;
}

export function FirmTable({ selectedDates, currency, displayUnit, containerWidth, containerHeight, tableState, onTableStateChange, searchQuery, fitColumnsTrigger, isFundView = false }: FirmTableProps) {
  // ─── Derive local state from lifted tableState ─────────────────────
  const expandedParents = useMemo(() => new Set(tableState.expandedParents), [tableState.expandedParents]);
  const extraColumns = tableState.extraColumns;
  const columnWidths = tableState.columnWidths;
  const selectedCell = tableState.selectedCell;
  const columnOrder = tableState.columnOrder;
  const columnConfigs = tableState.columnConfigs;
  const evOverrides = tableState.evOverrides;
  const sortConfig = tableState.sortConfig ?? [];

  // Derive extra column keys from columnOrder
  const orderedExtraKeys = useMemo(
    () => columnOrder.filter((k) => k.startsWith("extra-")).map((k) => k.slice(6) as KnowledgeBaseMetricKey),
    [columnOrder],
  );

  const [addColumnOpen, setAddColumnOpen] = useState(false);
  const addColumnRef = useRef<HTMLTableCellElement>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  // ─── EV editing state (local, not persisted) ────────────────────────
  const [editingEvRowId, setEditingEvRowId] = useState<string | null>(null);
  const [editingEvValue, setEditingEvValue] = useState("");
  const evInputRef = useRef<HTMLInputElement>(null);

  // ─── Column drag-reorder state (local) ──────────────────────────────
  const [dragColKey, setDragColKey] = useState<string | null>(null);
  const [dragOverColKey, setDragOverColKey] = useState<string | null>(null);
  const justDraggedRef = useRef(false);

  // ─── Scenario mode ─────────────────────────────────────────────────
  const scenarioActive = Object.keys(evOverrides).length > 0;

  const handleResetScenario = useCallback(() => {
    onTableStateChange((prev) => ({ ...prev, evOverrides: {} }));
  }, [onTableStateChange]);

  const handleResetSingleOverride = useCallback((rowId: string) => {
    onTableStateChange((prev) => {
      const next = { ...prev.evOverrides };
      delete next[rowId];
      return { ...prev, evOverrides: next };
    });
  }, [onTableStateChange]);

  const handleEvCellClick = useCallback((rowId: string) => {
    // Find the base EV for this row
    const currentOverride = evOverrides[rowId];
    const baseEV = getBaseEV(rowId);
    const displayVal = currentOverride ?? baseEV;
    setEditingEvRowId(rowId);
    setEditingEvValue(String(displayVal));
    setTimeout(() => evInputRef.current?.select(), 0);
  }, [evOverrides]);

  const handleEvEditConfirm = useCallback(() => {
    if (editingEvRowId === null) return;
    const parsed = parseFloat(editingEvValue.replace(/[^0-9.-]/g, ""));
    if (!isNaN(parsed) && parsed > 0) {
      const baseEV = getBaseEV(editingEvRowId);
      // Only store if different from base
      if (Math.abs(parsed - baseEV) > 0.01) {
        onTableStateChange((prev) => ({
          ...prev,
          evOverrides: { ...prev.evOverrides, [editingEvRowId]: parsed },
        }));
      } else {
        // Reset to original
        onTableStateChange((prev) => {
          const next = { ...prev.evOverrides };
          delete next[editingEvRowId!];
          return { ...prev, evOverrides: next };
        });
      }
    }
    setEditingEvRowId(null);
    setEditingEvValue("");
  }, [editingEvRowId, editingEvValue, onTableStateChange]);

  const handleEvEditCancel = useCallback(() => {
    setEditingEvRowId(null);
    setEditingEvValue("");
  }, []);

  // ─── Fit columns toggle: fit → restore ─────────────────────────────
  const preFitWidthsRef = useRef<Record<string, number> | null>(null);
  const isFittedRef = useRef(false);

  useEffect(() => {
    if (fitColumnsTrigger === 0) return;

    // Toggle: if already fitted, restore original widths (ensuring headers fit fully)
    if (isFittedRef.current && preFitWidthsRef.current) {
      const restored = { ...preFitWidthsRef.current };
      preFitWidthsRef.current = null;
      isFittedRef.current = false;

      // Ensure each restored width is wide enough to show the full header label
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const headerFont = "600 10px Inter, sans-serif";
        ctx.font = headerFont;
        for (const key of Object.keys(restored)) {
          let label = "";
          if (key === "funds") {
            label = "All Funds";
          } else if (key.startsWith("breakeven-")) {
            const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
            label = `Breakeven (${mult}x)`;
          } else if (key.startsWith("extra-")) {
            const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
            label = KNOWLEDGE_BASE_METRICS[metricKey] ?? key;
          } else if (key.startsWith("invested-")) {
            const idx = parseInt(key.split("-")[1], 10);
            label = BASE_INVESTED_HEADERS[idx] ?? "Invested Capital";
          } else {
            label = getColumnLabel(key);
          }
          // header padding: px-1 (4px each side) + resize handle (4px) + buffer (8px) = 20px
          const headerTextW = Math.ceil(ctx.measureText(label).width) + 20;
          restored[key] = Math.max(restored[key], headerTextW);
        }
      }

      onTableStateChange((prev) => ({
        ...prev,
        columnWidths: { ...prev.columnWidths, ...restored },
      }));
      return;
    }

    // First click: save current widths then fit to content
    const table = tableRef.current;
    if (!table) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dataFont = "300 10px Inter, sans-serif";
    const boldDataFont = "600 10px Inter, sans-serif";

    // Save current widths for all columns in columnOrder before fitting
    const savedWidths: Record<string, number> = {};
    columnOrder.forEach((key) => {
      savedWidths[key] = getW(key);
    });
    preFitWidthsRef.current = savedWidths;

    const newWidths: Record<string, number> = {};

    // Measure each column in columnOrder (skip "firm" and "add-column")
    // Width is based on data cell content only; headers truncate if wider.
    columnOrder.forEach((key, orderIdx) => {
      const colIdx = orderIdx + 1; // +1 because firm is column 0
      let maxWidth = 0;

      // Measure data cell text across all body rows
      const tbody = table.querySelector("tbody");
      if (tbody) {
        const bodyRows = tbody.querySelectorAll("tr:not([aria-hidden])");
        bodyRows.forEach((row) => {
          const cell = row.children[colIdx] as HTMLElement | undefined;
          if (!cell) return;
          const text = cell.textContent?.trim() || "";
          const isBold = cell.querySelector(".font-semibold") || cell.classList.contains("font-semibold");
          ctx.font = isBold ? boldDataFont : dataFont;
          const w = ctx.measureText(text).width;
          if (w > maxWidth) maxWidth = w;
        });
      }

      // Measure footer text
      const tfoot = table.querySelector("tfoot");
      if (tfoot) {
        const footRow = tfoot.querySelector("tr");
        const footCell = footRow?.children[colIdx] as HTMLElement | undefined;
        if (footCell) {
          const footText = footCell.textContent?.trim() || "";
          ctx.font = boldDataFont;
          const w = ctx.measureText(footText).width;
          if (w > maxWidth) maxWidth = w;
        }
      }

      // Add padding: px-1 (4px each side) + resize handle (4px) + buffer (8px)
      newWidths[key] = Math.max(40, Math.ceil(maxWidth) + 20);
    });

    isFittedRef.current = true;
    onTableStateChange((prev) => ({
      ...prev,
      columnWidths: { ...prev.columnWidths, ...newWidths },
    }));
  }, [fitColumnsTrigger]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── State update helpers ──────────────────────────────────────────
  // Use functional updater so drag handlers always read the latest state
  const updateState = useCallback((patch: Partial<TabTableState>) => {
    onTableStateChange((prev) => ({ ...prev, ...patch }));
  }, [onTableStateChange]);

  const handleCellClick = useCallback((rowId: string, colKey: string) => {
    onTableStateChange((prev) => {
      const sel = prev.selectedCell;
      const next = sel && sel.rowId === rowId && sel.colKey === colKey ? null : { rowId, colKey };
      return { ...prev, selectedCell: next };
    });
  }, [onTableStateChange]);

  const isCellSelected = useCallback(
    (rowId: string, colKey: string) =>
      selectedCell !== null && selectedCell.rowId === rowId && selectedCell.colKey === colKey,
    [selectedCell],
  );

  /** Returns inline style for the DataCell selected state */
  const selectedStyle = (rowId: string, colKey: string): React.CSSProperties | undefined =>
    isCellSelected(rowId, colKey)
      ? {
          outline: "2px solid #037de8",
          outlineOffset: "-2px",
          backgroundColor: "#cde5fa",
        }
      : undefined;

  // ─── Column header & row title highlight when a cell is selected ────
  const isColSelected = useCallback(
    (colKey: string) => selectedCell !== null && selectedCell.colKey === colKey,
    [selectedCell],
  );

  const isRowSelected = useCallback(
    (rowId: string) => selectedCell !== null && selectedCell.rowId === rowId,
    [selectedCell],
  );

  /** Style applied to the column header whose column contains the selected cell */
  const headerSelectedStyle = (colKey: string): React.CSSProperties | undefined =>
    isColSelected(colKey)
      ? {
          backgroundColor: "#cde5fa",
          color: "#037de8",
          borderWidth: "1px 1px 2px 1px",
          borderStyle: "solid",
          borderColor: "#e5e5e5 #e5e5e5 #037de8 #e5e5e5",
        }
      : undefined;

  /** Style applied to the firm-name (row title) cell of the row containing the selected cell.
   *  Skipped when the firm cell itself IS the selected cell (it already gets the full outline). */
  const rowTitleSelectedStyle = (rowId: string): React.CSSProperties | undefined =>
    isRowSelected(rowId) && !(selectedCell?.colKey === "firm")
      ? {
          backgroundColor: "#cde5fa",
          color: "#037de8",
        }
      : undefined;

  // ─── Column widths ─────────────────────────────────────────────────
  const handleResize = useCallback((colKey: string, delta: number) => {
    // Manual resize invalidates the fitted state
    isFittedRef.current = false;
    preFitWidthsRef.current = null;
    onTableStateChange((prev) => {
      const current = prev.columnWidths[colKey] ?? 60;
      const newWidth = Math.max(40, current + delta);
      return { ...prev, columnWidths: { ...prev.columnWidths, [colKey]: newWidth } };
    });
  }, [onTableStateChange]);

  const getW = (key: string) => columnWidths[key] ?? 100;

  // ─── Expand / collapse ─────────────────────────────────────────────
  const toggleExpand = useCallback((id: string) => {
    onTableStateChange((prev) => {
      const set = new Set(prev.expandedParents);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return { ...prev, expandedParents: Array.from(set) };
    });
  }, [onTableStateChange]);

  // ─── Measurement date filtering ────────────────────────────────────
  const activeDates = new Set<string>();
  selectedDates.forEach((d) => {
    if (d === "most-recent") {
      activeDates.add("2025-12-31");
    } else {
      activeDates.add(d);
    }
  });

  const dateFilteredData = firmData.filter((row) => {
    if (row.isChild && row.parentId) {
      const parent = firmData.find((r) => r.id === row.parentId);
      return parent ? activeDates.has(parent.measurementDate) : false;
    }
    return activeDates.has(row.measurementDate);
  });

  // ─── Search filtering ──────────────────────────────────────────────
  const searchFilteredData = useMemo(() => {
    if (!searchQuery) return dateFilteredData;
    const q = searchQuery.toLowerCase();
    // Find matching parent IDs so their children are also included
    const matchingParentIds = new Set<string>();
    dateFilteredData.forEach((row) => {
      if (!row.isChild && row.firmName.toLowerCase().includes(q)) {
        matchingParentIds.add(row.id);
      }
    });
    return dateFilteredData.filter((row) => {
      if (row.isChild && row.parentId) {
        return matchingParentIds.has(row.parentId);
      }
      return row.firmName.toLowerCase().includes(q);
    });
  }, [dateFilteredData, searchQuery]);

  // ─── Sort rows (parent groups stay together, multi-key) ─────────────
  const sortedData = useMemo(() => {
    if (sortConfig.length === 0) return searchFilteredData;

    // Group rows: each top-level row followed by its children
    const groups: FirmRow[][] = [];
    let currentGroup: FirmRow[] = [];
    for (const row of searchFilteredData) {
      if (!row.isChild) {
        if (currentGroup.length > 0) groups.push(currentGroup);
        currentGroup = [row];
      } else {
        currentGroup.push(row);
      }
    }
    if (currentGroup.length > 0) groups.push(currentGroup);

    groups.sort((a, b) => {
      for (const sc of sortConfig) {
        const valA = getSortValue(a[0], sc.key, orderedExtraKeys, currency, displayUnit, columnConfigs);
        const valB = getSortValue(b[0], sc.key, orderedExtraKeys, currency, displayUnit, columnConfigs);
        let cmp: number;
        if (typeof valA === "number" && typeof valB === "number") {
          cmp = valA - valB;
        } else {
          cmp = String(valA).localeCompare(String(valB));
        }
        if (cmp !== 0) return sc.direction === "desc" ? -cmp : cmp;
      }
      return 0;
    });

    return groups.flat();
  }, [searchFilteredData, sortConfig, orderedExtraKeys, currency, displayUnit, columnConfigs]);

  const visibleRows = sortedData.filter((row) => {
    if (row.isChild && row.parentId) {
      return expandedParents.has(row.parentId);
    }
    return true;
  });

  // ─── Add column ────────────────────────────────────────────────────
  const handleAddColumnClick = useCallback(() => {
    if (addColumnRef.current) {
      setAnchorRect(addColumnRef.current.getBoundingClientRect());
    }
    setAddColumnOpen(true);
  }, []);

  const handleAddMetric = useCallback((key: KnowledgeBaseMetricKey, config?: { multiplier?: number }) => {
    onTableStateChange((prev) => {
      let colKey: string;
      if (key === "breakevenEquityExitValue" && config?.multiplier != null) {
        colKey = `breakeven-${config.multiplier}`;
      } else {
        colKey = `extra-${key}`;
      }
      const newWidths = { ...prev.columnWidths };
      if (!(colKey in newWidths)) {
        newWidths[colKey] = 130;
      }
      const newConfigs = { ...prev.columnConfigs };
      if (config) {
        newConfigs[colKey] = config;
      }
      return {
        ...prev,
        extraColumns: [...prev.extraColumns, key],
        columnWidths: newWidths,
        columnOrder: [...prev.columnOrder, colKey],
        columnConfigs: newConfigs,
      };
    });
    setAddColumnOpen(false);
  }, [onTableStateChange]);

  // ─── Sort by column (shift+click for multi-sort) ───────────────────
  const handleSortClick = useCallback((key: string, shiftKey: boolean = false) => {
    if (justDraggedRef.current) {
      justDraggedRef.current = false;
      return;
    }
    onTableStateChange((prev) => {
      const sorts = [...prev.sortConfig];
      const existingIdx = sorts.findIndex((s) => s.key === key);

      if (shiftKey) {
        // Multi-sort: add / cycle / remove
        if (existingIdx === -1) {
          return { ...prev, sortConfig: [...sorts, { key, direction: 'asc' as const }] };
        }
        if (sorts[existingIdx].direction === 'asc') {
          sorts[existingIdx] = { key, direction: 'desc' as const };
          return { ...prev, sortConfig: sorts };
        }
        sorts.splice(existingIdx, 1);
        return { ...prev, sortConfig: sorts };
      }

      // Regular click: single-key sort (asc → desc → clear)
      if (sorts.length === 1 && existingIdx === 0) {
        if (sorts[0].direction === 'asc') {
          return { ...prev, sortConfig: [{ key, direction: 'desc' as const }] };
        }
        return { ...prev, sortConfig: [] };
      }
      return { ...prev, sortConfig: [{ key, direction: 'asc' as const }] };
    });
  }, [onTableStateChange]);

  // ─── Sort indicator helper ────────────────────────────────────────
  const sortIndicator = (colKey: string) => {
    const idx = sortConfig.findIndex((s) => s.key === colKey);
    if (idx === -1) return null;
    const dir = sortConfig[idx].direction;
    const arrow = dir === "asc" ? "▲" : "▼";
    const label = sortConfig.length > 1 ? `${idx + 1}${arrow}` : arrow;
    return (
      <span className="text-[8px] text-[#037de8] shrink-0 leading-none">
        {label}
      </span>
    );
  };

  // ─── Resolve human-readable label for any column key ──────────────
  const getHeaderLabel = useCallback((key: string): string => {
    if (key === "firm") return "Firm Portfolio Summary";
    if (key === "funds") return "All Funds";
    if (key.startsWith("breakeven-")) {
      const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
      return `Breakeven (${mult}x)`;
    }
    if (key.startsWith("extra-")) {
      const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
      return KNOWLEDGE_BASE_METRICS[metricKey] ?? key;
    }
    if (key.startsWith("invested-")) {
      const idx = parseInt(key.split("-")[1], 10);
      return BASE_INVESTED_HEADERS[idx] ?? "Invested Capital";
    }
    return getColumnLabel(key);
  }, [columnConfigs]);

  // ─── Column drag-start with custom ghost ──────────────────────────
  const handleColDragStart = useCallback((e: React.DragEvent, key: string) => {
    e.dataTransfer.effectAllowed = "move";
    setDragColKey(key);

    // Build a styled ghost element
    const ghost = document.createElement("div");
    ghost.textContent = getHeaderLabel(key);
    Object.assign(ghost.style, {
      position: "fixed",
      top: "-1000px",
      left: "-1000px",
      padding: "4px 10px",
      background: "#037de8",
      color: "white",
      font: "600 10px Inter, sans-serif",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
      pointerEvents: "none",
    });
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, ghost.offsetHeight / 2);
    requestAnimationFrame(() => ghost.remove());
  }, [getHeaderLabel]);

  // ─── Column drag-reorder end handler ──────────────────────────────
  const handleColDragEnd = useCallback(() => {
    if (dragColKey && dragOverColKey && dragColKey !== dragOverColKey) {
      justDraggedRef.current = true;
      onTableStateChange((prev) => {
        const order = [...prev.columnOrder];
        const fromIdx = order.indexOf(dragColKey);
        const toIdx = order.indexOf(dragOverColKey);
        if (fromIdx !== -1 && toIdx !== -1) {
          const [moved] = order.splice(fromIdx, 1);
          order.splice(toIdx, 0, moved);
        }
        return { ...prev, columnOrder: order };
      });
    }
    setDragColKey(null);
    setDragOverColKey(null);
  }, [dragColKey, dragOverColKey, onTableStateChange]);

  // ─── Keyboard navigation ──────────────────────────────────────────
  useEffect(() => {
    if (!selectedCell) return;

    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const allCols = ["firm", ...columnOrder];
      const rowIds = visibleRows.map((r) => r.id);

      const colIdx = allCols.indexOf(selectedCell.colKey);
      const rowIdx = rowIds.indexOf(selectedCell.rowId);

      if (colIdx === -1 || rowIdx === -1) return;

      let newColIdx = colIdx;
      let newRowIdx = rowIdx;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          newRowIdx = Math.max(0, rowIdx - 1);
          break;
        case "ArrowDown":
          e.preventDefault();
          newRowIdx = Math.min(rowIds.length - 1, rowIdx + 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          newColIdx = Math.max(0, colIdx - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          newColIdx = Math.min(allCols.length - 1, colIdx + 1);
          break;
        case "Enter": {
          e.preventDefault();
          const row = visibleRows[rowIdx];
          if (row && (row.isParent || row.expandable)) {
            toggleExpand(row.id);
          }
          return;
        }
        case "Escape":
          e.preventDefault();
          onTableStateChange((prev) => ({ ...prev, selectedCell: null }));
          return;
        default:
          return;
      }

      if (newColIdx !== colIdx || newRowIdx !== rowIdx) {
        const newCell = { rowId: rowIds[newRowIdx], colKey: allCols[newColIdx] };
        onTableStateChange((prev) => ({ ...prev, selectedCell: newCell }));

        // Scroll the new cell into view
        requestAnimationFrame(() => {
          const el = tableRef.current?.querySelector(
            `[data-cell-id="${rowIds[newRowIdx]}__${allCols[newColIdx]}"]`,
          ) as HTMLElement;
          el?.scrollIntoView({ block: "nearest", inline: "nearest" });
        });
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [selectedCell, columnOrder, visibleRows, onTableStateChange, toggleExpand]);

  // ─── Compute totals dynamically ────────────────────────────────────
  const computeTotalForColumn = (colIndex: number): number => {
    const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
    return topLevelRows.reduce((sum, r) => sum + (r.investedCapitalRaw[colIndex] ?? 0), 0);
  };

  const computeExtraTotal = (extraIndex: number): number => {
    const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
    return topLevelRows.reduce((sum, r) => sum + getExtraMoney(r.id, extraIndex), 0);
  };

  // ─── Alternating row colors ────────────────────────────────────────
  let topLevelCounter = 0;
  const topLevelIndexMap = new Map<string, number>();
  sortedData.forEach((row) => {
    if (!row.isChild) {
      topLevelCounter++;
      topLevelIndexMap.set(row.id, topLevelCounter);
    } else if (row.parentId) {
      topLevelIndexMap.set(row.id, topLevelIndexMap.get(row.parentId) || 0);
    }
  });

  // ─── Helper to render a header cell with resize handle, drag & sort ──
  const renderHeaderCell = (
    key: string,
    content: React.ReactNode,
    extraClasses: string = "",
  ) => {
    const label = typeof content === "string" ? content : undefined;
    const hdrSel = headerSelectedStyle(key);
    const isDragging = dragColKey === key;
    const isOver = dragOverColKey === key && dragColKey !== key;

    return (
      <TableHead
        key={key}
        draggable
        onDragStart={(e) => handleColDragStart(e, key)}
        onDragOver={(e) => { e.preventDefault(); setDragOverColKey(key); }}
        onDragEnd={handleColDragEnd}
        onDrop={(e) => e.preventDefault()}
        onClick={(e) => handleSortClick(key, e.shiftKey)}
        className={`bg-white sticky top-0 h-10 px-2 text-[10px] font-semibold text-[#01294c] border border-[#e5e5e5] overflow-hidden cursor-pointer select-none ${extraClasses}`}
        style={{
          width: getW(key), minWidth: getW(key), maxWidth: getW(key),
          ...hdrSel,
          opacity: isDragging ? 0.4 : 1,
          ...(isOver ? { boxShadow: "inset 3px 0 0 0 #037de8" } : {}),
        }}
      >
        <div className="flex items-center gap-0.5 min-w-0">
          <span className="block truncate flex-1" title={label}>
            {content}
          </span>
          {sortIndicator(key)}
        </div>
        <ResizeHandle colKey={key} onResize={handleResize} />
      </TableHead>
    );
  };

  // Width for sticky left offset of 2nd frozen column
  const firmW = getW("firm");

  // ─── Compute total column count (for compact Add Column mode) ──────
  const isCompactAddColumn = (1 + columnOrder.length + 1) > 15; // firm + ordered + add-column (exclude spacer)
  const addColW = isCompactAddColumn ? 36 : 100;

  // ─── Compute total column width & spacer for left-aligned fit ──────
  const dataColWidth = (() => {
    let total = getW("firm");
    columnOrder.forEach((k) => (total += getW(k)));
    total += addColW;
    return total;
  })();
  const spacerW = Math.max(0, containerWidth - dataColWidth);
  const tableWidth = dataColWidth + spacerW; // always >= containerWidth
  const totalColumnCount = 1 + columnOrder.length + (spacerW > 0 ? 1 : 0) + 1; // firm + ordered + spacer? + add-column

  // ─── Column-order-driven header renderer ───────────────────────────
  const renderOrderedHeader = (key: string) => {
    if (key === "funds") {
      const isDragging = dragColKey === "funds";
      const isOver = dragOverColKey === "funds" && dragColKey !== "funds";
      return (
        <TableHead
          key="funds"
          draggable
          onDragStart={(e) => handleColDragStart(e, "funds")}
          onDragOver={(e) => { e.preventDefault(); setDragOverColKey("funds"); }}
          onDragEnd={handleColDragEnd}
          onDrop={(e) => e.preventDefault()}
          onClick={(e) => handleSortClick("funds", e.shiftKey)}
          className="bg-white sticky top-0 h-10 px-1 text-[10px] font-semibold text-[#01294c] border border-[#e5e5e5] overflow-hidden cursor-pointer select-none"
          style={{
            width: getW("funds"), minWidth: getW("funds"), maxWidth: getW("funds"),
            ...headerSelectedStyle("funds"),
            opacity: isDragging ? 0.4 : 1,
            ...(isOver ? { boxShadow: "inset 3px 0 0 0 #037de8" } : {}),
          }}
        >
          <div className="flex items-center gap-1 min-w-0">
            <span className="truncate" title="All Funds">All Funds</span>
            <ChevronDown className="size-3 text-[#666] shrink-0" />
            {sortIndicator("funds")}
          </div>
          <ResizeHandle colKey="funds" onResize={handleResize} />
        </TableHead>
      );
    }
    // Breakeven columns
    if (key.startsWith("breakeven-")) {
      const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
      const label = `Breakeven (${mult}x)`;
      return renderHeaderCell(
        key,
        <span className="truncate block" title={label}>{label}</span>,
      );
    }
    if (key.startsWith("extra-")) {
      const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
      const label = KNOWLEDGE_BASE_METRICS[metricKey] ?? key;
      // Enterprise Value header: show ⚡ when scenario mode is active
      if (metricKey === "enterpriseValue" && scenarioActive) {
        return renderHeaderCell(
          key,
          <span className="truncate block" title={`${label} (Scenario Active)`}>
            {label} <span className="text-amber-500">⚡</span>
          </span>,
        );
      }
      return renderHeaderCell(
        key,
        <span className="truncate block" title={label}>{label}</span>,
      );
    }
    if (key.startsWith("invested-")) {
      const idx = parseInt(key.split("-")[1], 10);
      return renderHeaderCell(key, BASE_INVESTED_HEADERS[idx] ?? "Invested Capital");
    }
    const label = getColumnLabel(key);
    return renderHeaderCell(key, label);
  };

  // ─── Column-order-driven data cell renderer ────────────────────────
  const renderOrderedDataCell = (
    row: typeof visibleRows[0],
    key: string,
    bgClass: string,
    isBold: boolean,
  ) => {
    const w = getW(key);
    const wStyle = { width: w, minWidth: w, maxWidth: w };

    if (key === "funds") {
      return (
        <TableCell key="funds" className={`${bgClass} h-[26px] px-1 py-0 text-[10px] text-[#013e73] font-normal overflow-hidden cursor-pointer`} style={{ ...wStyle, ...selectedStyle(row.id, "funds") }} onClick={() => handleCellClick(row.id, "funds")}>
          <span className="block truncate" title={row.allFunds}>{row.allFunds}</span>
        </TableCell>
      );
    }
    if (key === "valuation") {
      return (
        <TableCell key="valuation" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "valuation") }} onClick={() => handleCellClick(row.id, "valuation")}>
          {row.valuationDate}
        </TableCell>
      );
    }
    if (key === "initial") {
      return (
        <TableCell key="initial" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "initial") }} onClick={() => handleCellClick(row.id, "initial")}>
          {row.initialInvestment}
        </TableCell>
      );
    }
    if (key === "recent") {
      return (
        <TableCell key="recent" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "recent") }} onClick={() => handleCellClick(row.id, "recent")}>
          {row.mostRecent}
        </TableCell>
      );
    }
    if (key === "fdo") {
      return (
        <TableCell key="fdo" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "fdo") }} onClick={() => handleCellClick(row.id, "fdo")}>
          {row.fdoPercent}
        </TableCell>
      );
    }
    if (key === "invested") {
      return (
        <TableCell key="invested" className={`h-[26px] px-1 py-0 text-[10px] text-[#333] text-right cursor-pointer ${isBold ? "font-semibold" : "font-light"}`} style={{ ...wStyle, ...selectedStyle(row.id, "invested") }} onClick={() => handleCellClick(row.id, "invested")}>
          {row.investedCapital}
        </TableCell>
      );
    }
    if (key === "realized") {
      return (
        <TableCell key="realized" className={`h-[26px] px-1 py-0 text-[10px] text-[#333] text-right cursor-pointer ${isBold ? "font-semibold" : "font-light"}`} style={{ ...wStyle, ...selectedStyle(row.id, "realized") }} onClick={() => handleCellClick(row.id, "realized")}>
          {row.realizedValue}
        </TableCell>
      );
    }
    if (key === "unrealized") {
      return (
        <TableCell key="unrealized" className={`h-[26px] px-1 py-0 text-[10px] text-[#333] text-right cursor-pointer ${isBold ? "font-semibold" : "font-light"}`} style={{ ...wStyle, ...selectedStyle(row.id, "unrealized") }} onClick={() => handleCellClick(row.id, "unrealized")}>
          {row.unrealizedValue}
        </TableCell>
      );
    }
    if (key === "total") {
      return (
        <TableCell key="total" className={`h-[26px] px-1 py-0 text-[10px] text-[#333] text-right cursor-pointer ${isBold ? "font-semibold" : "font-light"}`} style={{ ...wStyle, ...selectedStyle(row.id, "total") }} onClick={() => handleCellClick(row.id, "total")}>
          {row.totalValue}
        </TableCell>
      );
    }
    if (key === "irr") {
      return (
        <TableCell key="irr" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "irr") }} onClick={() => handleCellClick(row.id, "irr")}>
          {row.grossIRR}
        </TableCell>
      );
    }
    if (key === "moic") {
      return (
        <TableCell key="moic" className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, "moic") }} onClick={() => handleCellClick(row.id, "moic")}>
          {row.moic}
        </TableCell>
      );
    }
    if (key.startsWith("invested-")) {
      const idx = parseInt(key.split("-")[1], 10);
      const raw = row.investedCapitalRaw[idx] ?? 0;
      return (
        <TableCell key={key} className={`h-[26px] px-1 py-0 text-[10px] text-[#333] text-right cursor-pointer ${isBold ? "font-semibold" : "font-light"}`} style={{ ...wStyle, ...selectedStyle(row.id, key) }} onClick={() => handleCellClick(row.id, key)}>
          {formatValue(raw, currency, displayUnit)}
        </TableCell>
      );
    }
    // Breakeven columns
    if (key.startsWith("breakeven-")) {
      const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
      const raw = getBreakevenValue(row.id, mult);
      return (
        <TableCell key={key} className="h-[26px] px-1 py-0 text-[10px] text-[#333] text-right font-light cursor-pointer" style={{ ...wStyle, ...selectedStyle(row.id, key) }} onClick={() => handleCellClick(row.id, key)}>
          {formatValue(raw, currency, displayUnit)}
        </TableCell>
      );
    }
    if (key.startsWith("extra-")) {
      const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
      const extraIdx = orderedExtraKeys.indexOf(metricKey);
      const mType = detectMetricType(metricKey);
      const isTextual = mType === "text" || mType === "boolean" || mType === "date";

      // ─── Enterprise Value: editable cell ───────────────────────────
      if (metricKey === "enterpriseValue") {
        const isEditing = editingEvRowId === row.id;
        const hasOverride = row.id in evOverrides;
        const baseEV = getBaseEV(row.id);
        const displayEV = hasOverride ? evOverrides[row.id] : baseEV;
        const formatted = formatValue(displayEV, currency, displayUnit);

        if (isEditing) {
          return (
            <TableCell key={key} className="h-[26px] px-0 py-0 text-[10px]" style={wStyle}>
              <input
                ref={evInputRef}
                type="text"
                value={editingEvValue}
                onChange={(e) => setEditingEvValue(e.target.value)}
                onBlur={handleEvEditConfirm}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEvEditConfirm();
                  if (e.key === "Escape") handleEvEditCancel();
                }}
                className="w-full h-full px-1 text-[10px] text-right border-2 border-[#037de8] outline-none bg-white"
                style={{ fontSize: "10px" }}
              />
            </TableCell>
          );
        }

        return (
          <TableCell
            key={key}
            className={`h-[26px] px-1 py-0 text-[10px] text-right font-light cursor-pointer ${hasOverride ? "text-[#1a73e8]" : "text-[#333]"}`}
            style={{
              ...wStyle,
              ...(hasOverride ? { backgroundColor: "#e8f0fe" } : {}),
              ...selectedStyle(row.id, key),
            }}
            onClick={() => handleEvCellClick(row.id)}
            title={hasOverride ? "Simulated value. Metrics are recalculated using this Enterprise Value." : "Click to override Enterprise Value"}
          >
            <div className="flex items-center justify-end gap-0.5 min-w-0">
              {hasOverride && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleResetSingleOverride(row.id); }}
                  className="flex items-center justify-center size-3 rounded-full hover:bg-red-100 shrink-0"
                  title="Reset to calculated value"
                >
                  <X className="size-2.5 text-[#999] hover:text-red-500" />
                </button>
              )}
              <span className="truncate">
                {hasOverride ? `≈ ${formatted}` : formatted}
              </span>
            </div>
          </TableCell>
        );
      }

      // ─── Dependent metrics: recalculate when EV is overridden ──────
      if (DEPENDENT_EV_METRICS.has(metricKey) && row.id in evOverrides) {
        const recalculated = getRecalculatedDependentValue(
          metricKey, row.id, extraIdx >= 0 ? extraIdx : 0,
          evOverrides[row.id], currency, displayUnit,
        );
        return (
          <TableCell
            key={key}
            className="h-[26px] px-1 py-0 text-[10px] text-[#1a73e8] text-right font-light cursor-pointer"
            style={{
              ...wStyle,
              backgroundColor: "#e8f0fe",
              ...selectedStyle(row.id, key),
            }}
            onClick={() => handleCellClick(row.id, key)}
            title="Recalculated from overridden Enterprise Value"
          >
            <span className="block truncate" title={recalculated}>{recalculated}</span>
          </TableCell>
        );
      }

      const cellValue = getExtraCellValue(metricKey, mType, row.id, extraIdx >= 0 ? extraIdx : 0, currency, displayUnit);
      return (
        <TableCell key={key} className={`h-[26px] px-1 py-0 text-[10px] text-[#333] ${isTextual ? "text-left" : "text-right"} font-light cursor-pointer`} style={{ ...wStyle, ...selectedStyle(row.id, key) }} onClick={() => handleCellClick(row.id, key)}>
          <span className="block truncate" title={cellValue}>{cellValue}</span>
        </TableCell>
      );
    }
    return <TableCell key={key} className="h-[26px] px-1 py-0" style={wStyle} />;
  };

  // ─── Column-order-driven total cell renderer ───────────────────────
  const renderOrderedTotalCell = (key: string) => {
    const w = getW(key);
    const wStyle = { width: w, minWidth: w, maxWidth: w };
    // New columns with totals
    if (key === "invested") {
      const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
      const total = topLevelRows.reduce((sum, r) => sum + (r.investedCapitalRaw[0] ?? 0), 0);
      return (
        <TableCell key="total-invested" className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(total, currency, displayUnit)}
        </TableCell>
      );
    }
    if (key === "realized") {
      const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
      const total = topLevelRows.reduce((sum, r) => sum + r.realizedValueRaw, 0);
      return (
        <TableCell key="total-realized" className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(total, currency, displayUnit)}
        </TableCell>
      );
    }
    if (key === "unrealized") {
      const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
      const total = topLevelRows.reduce((sum, r) => sum + r.unrealizedValueRaw, 0);
      return (
        <TableCell key="total-unrealized" className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(total, currency, displayUnit)}
        </TableCell>
      );
    }
    if (key === "total") {
      const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
      const total = topLevelRows.reduce((sum, r) => sum + r.totalValueRaw, 0);
      return (
        <TableCell key="total-total" className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(total, currency, displayUnit)}
        </TableCell>
      );
    }
    // Breakeven total
    if (key.startsWith("breakeven-")) {
      const mult = columnConfigs[key]?.multiplier ?? parseFloat(key.split("-")[1]);
      const topLevelRows = dateFilteredData.filter((r) => !r.isChild);
      const total = topLevelRows.reduce((sum, r) => sum + getBreakevenValue(r.id, mult), 0);
      return (
        <TableCell key={`total-${key}`} className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(total, currency, displayUnit)}
        </TableCell>
      );
    }
    if (key.startsWith("invested-")) {
      const idx = parseInt(key.split("-")[1], 10);
      return (
        <TableCell key={`total-${key}`} className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
          {formatValue(computeTotalForColumn(idx), currency, displayUnit)}
        </TableCell>
      );
    }
    if (key.startsWith("extra-")) {
      const metricKey = key.slice(6) as KnowledgeBaseMetricKey;
      const mType = detectMetricType(metricKey);
      if (isNumericMetric(mType)) {
        const extraIdx = orderedExtraKeys.indexOf(metricKey);
        return (
          <TableCell key={`total-${key}`} className="h-[28px] px-1 py-0 text-[10px] text-[#013e73] text-right font-semibold" style={wStyle}>
            {formatValue(computeExtraTotal(extraIdx >= 0 ? extraIdx : 0), currency, displayUnit)}
          </TableCell>
        );
      }
      // Non-numeric metrics: empty total cell
      return <TableCell key={`total-${key}`} className="h-[28px] px-1 py-0" style={wStyle} />;
    }
    if (key === "funds") {
      return <TableCell key="total-funds" className="bg-[#eef2f7] h-[28px] px-1 py-0" style={wStyle} />;
    }
    return <TableCell key={`total-${key}`} className="h-[28px] px-1 py-0" style={wStyle} />;
  };

  return (
    <>
      {/* Date filter indicator */}
      {selectedDates.length > 0 && !selectedDates.includes("most-recent") && (
        <div
          className="sticky left-0 z-30 px-3 py-1 bg-[#f0f7ff] border-b border-[#d0e3f7] text-[10px] text-[#013e73] font-['Inter',sans-serif]"
          style={{ width: containerWidth || "100%" }}
        >
          Showing data for:{" "}
          {selectedDates
            .map((d) => {
              const labels: Record<string, string> = {
                "2025-12-31": "Q4 2025", "2025-09-30": "Q3 2025", "2025-06-30": "Q2 2025", "2025-03-31": "Q1 2025",
                "2024-12-31": "Q4 2024", "2024-09-30": "Q3 2024", "2024-06-30": "Q2 2024", "2024-03-31": "Q1 2024",
                "2023-12-31": "Q4 2023", "2023-09-30": "Q3 2023", "2023-06-30": "Q2 2023",
              };
              return labels[d] ?? d;
            })
            .join(", ")}
          {" "}— {dateFilteredData.filter((r) => !r.isChild).length} firms
        </div>
      )}

      {/* ─── Scenario Mode Banner ──────────────────────────────────── */}
      {scenarioActive && (
        <div
          className="sticky left-0 z-30 px-3 py-2 bg-[#fff8e1] border-b border-[#ffd54f] text-[11px] font-['Inter',sans-serif] flex items-center justify-between"
          style={{ width: containerWidth || "100%" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">⚡</span>
            <div>
              <span className="font-semibold text-[#e65100]">Scenario Mode Active</span>
              <span className="text-[#795548] ml-2">
                Enterprise Values have been overridden to simulate returns. These values are not saved.
              </span>
            </div>
          </div>
          <button
            onClick={handleResetScenario}
            className="px-3 py-1 text-[10px] font-semibold text-[#e65100] bg-white border border-[#ffd54f] rounded hover:bg-[#fff3e0] transition-colors shrink-0"
          >
            Reset Scenario
          </button>
        </div>
      )}

      {/* Raw <table> so there's no wrapper div with overflow-x-auto
          that would break position:sticky on the thead */}
      <table
        ref={tableRef}
        className="border-separate border-spacing-0 text-[10px] font-['Inter',sans-serif]"
        style={{ tableLayout: "fixed", width: tableWidth, minHeight: containerHeight || "100vh" }}
      >
        {/* ─── Column Headers: sticky at top of scroll container ─── */}
        <TableHeader className="z-30">
          <TableRow className="border-b border-[#e5e5e5] hover:bg-transparent">
            {/* Frozen: Firm — sortable but not draggable */}
            <th
              style={{
                position: "sticky",
                left: 0,
                top: 0,
                zIndex: 40,
                width: firmW,
                minWidth: firmW,
                maxWidth: firmW,
                boxShadow: "2px 0 4px rgba(0,0,0,0.08)",
                backgroundColor: "white",
                height: 40,
                padding: "0 4px",
                fontSize: "10px",
                fontWeight: 600,
                color: "#01294c",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#e5e5e5",
                overflow: "hidden",
                textAlign: "left",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                cursor: "pointer",
                ...headerSelectedStyle("firm"),
              }}
              onClick={(e) => handleSortClick("firm", e.shiftKey)}
              onDragOver={(e) => { e.preventDefault(); setDragOverColKey(null); }}
            >
              <div className="flex items-center gap-0.5 min-w-0">
                <span className="block truncate flex-1" title={isFundView ? "Company" : "Firm Portfolio Summary"}>
                  {isFundView ? "Company" : "Firm Portfolio Summary"}
                </span>
                {sortIndicator("firm")}
              </div>
              <ResizeHandle colKey="firm" onResize={handleResize} />
            </th>

            {/* Ordered columns driven by columnOrder */}
            {columnOrder.map((key) => renderOrderedHeader(key))}

            {/* Spacer column — fills gap between data columns and Add Column after fit */}
            {spacerW > 0 && (
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 20,
                  width: spacerW,
                  minWidth: spacerW,
                  maxWidth: spacerW,
                  backgroundColor: "#f8fafc",
                  height: 40,
                  padding: 0,
                  borderTop: "1px solid #e5e5e5",
                  borderBottom: "1px solid #e5e5e5",
                  borderLeft: "1px solid #e5e5e5",
                  borderRight: "none",
                }}
                aria-hidden="true"
              />
            )}

            {/* Add Column — sticky right + top (raw <th> to bypass twMerge) */}
            <th
              ref={addColumnRef}
              style={{
                position: "sticky",
                right: 0,
                top: 0,
                zIndex: 40,
                width: addColW,
                minWidth: addColW,
                maxWidth: addColW,
                boxShadow: "-2px 0 4px rgba(0,0,0,0.08)",
                backgroundColor: "white",
                height: 40,
                padding: isCompactAddColumn ? "0" : "0 8px",
                fontSize: "10px",
                fontWeight: 600,
                color: "#01294c",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#e5e5e5",
                overflow: "hidden",
                textAlign: "center",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              onClick={handleAddColumnClick}
              onDragOver={(e) => { e.preventDefault(); setDragOverColKey(null); }}
            >
              <div className="flex items-center justify-center gap-1 min-w-0">
                {!isCompactAddColumn && (
                  <span className="truncate" title="Add Column">Add Column</span>
                )}
                <PlusIcon />
              </div>
            </th>
          </TableRow>
        </TableHeader>

        {/* ─── Data rows ──────────────────────────────────────────── */}
        <TableBody>
          {visibleRows.map((row) => {
            const topIdx = topLevelIndexMap.get(row.id) || 0;
            const bgClass = row.isChild
              ? "bg-white"
              : topIdx % 2 === 1
                ? "bg-[#f8fafc]"
                : "bg-white";
            const isBold = row.isParent;

            return (
              <TableRow
                key={row.id}
                className={`${bgClass} border-0 hover:bg-[#f0f4f8] transition-colors`}
              >
                {/* Firm name — sticky */}
                <TableCell
                  data-cell-id={`${row.id}__firm`}
                  className={`sticky left-0 z-10 ${bgClass} h-[26px] px-1 py-0 text-[10px] text-[#013e73] overflow-hidden ${row.isChild ? "pl-4" : "pl-1"} cursor-pointer`}
                  style={{ width: firmW, minWidth: firmW, maxWidth: firmW, boxShadow: "2px 0 4px rgba(0,0,0,0.08)", ...selectedStyle(row.id, "firm"), ...rowTitleSelectedStyle(row.id) }}
                  onClick={() => handleCellClick(row.id, "firm")}
                >
                  <div className="flex items-center gap-1 min-w-0">
                    <span className={`truncate ${isBold ? "font-semibold" : "font-normal"}`} title={row.firmName}>
                      {row.firmName}
                    </span>
                    {row.isParent && row.expandable && (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleExpand(row.id); }}
                        className="flex items-center justify-center size-4 shrink-0 hover:bg-gray-200 rounded"
                      >
                        {expandedParents.has(row.id) ? <MinusIcon /> : <PlusIcon />}
                      </button>
                    )}
                    {!row.isParent && !row.isChild && row.expandable && (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleExpand(row.id); }}
                        className="flex items-center justify-center size-4 shrink-0 hover:bg-gray-200 rounded"
                      >
                        <PlusIcon />
                      </button>
                    )}
                  </div>
                </TableCell>

                {/* Ordered data cells driven by columnOrder */}
                {columnOrder.map((key) =>
                  cloneElement(
                    renderOrderedDataCell(row, key, bgClass, isBold) as React.ReactElement,
                    { "data-cell-id": `${row.id}__${key}` },
                  ),
                )}

                {/* Spacer cell — fills gap after fit */}
                {spacerW > 0 && (
                  <td
                    style={{
                      width: spacerW,
                      minWidth: spacerW,
                      maxWidth: spacerW,
                      backgroundColor: row.isChild ? "#ffffff" : topIdx % 2 === 1 ? "#f8fafc" : "#ffffff",
                      height: 26,
                      padding: 0,
                      borderLeft: "1px solid #e5e5e5",
                      borderRight: "none",
                      borderTop: "none",
                      borderBottom: "none",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Add Column cell — sticky right */}
                <td
                  style={{
                    position: "sticky",
                    right: 0,
                    zIndex: 10,
                    width: addColW,
                    minWidth: addColW,
                    maxWidth: addColW,
                    boxShadow: "-2px 0 4px rgba(0,0,0,0.08)",
                    backgroundColor: row.isChild ? "#ffffff" : topIdx % 2 === 1 ? "#f8fafc" : "#ffffff",
                    height: 26,
                    padding: "0 4px",
                  }}
                />
              </TableRow>
            );
          })}

          {/* Spacer row absorbs extra height from minHeight so data rows don't stretch */}
          <tr aria-hidden="true" style={{ height: 0 }}>
            <td colSpan={totalColumnCount} style={{ padding: 0, border: "none", height: "auto", lineHeight: 0 }} />
          </tr>
        </TableBody>

        {/* ─── Total row: sticky at bottom of scroll container ──── */}
        <tfoot
          style={{ position: "sticky", bottom: 0, zIndex: 30 }}
          className="border-t-2 border-[#01294c] bg-transparent"
        >
          <TableRow className="bg-[#eef2f7] border-0 hover:bg-[#e4ebf3]">
            {/* Firm — sticky */}
            <TableCell
              className="sticky left-0 z-10 bg-[#eef2f7] h-[28px] px-1 py-0 text-[10px] text-[#013e73] font-semibold"
              style={{ width: firmW, minWidth: firmW, maxWidth: firmW, boxShadow: "2px 0 4px rgba(0,0,0,0.08)" }}
            >
              Total
            </TableCell>
            {/* Ordered total cells driven by columnOrder */}
            {columnOrder.map((key) => renderOrderedTotalCell(key))}
            {/* Spacer cell — fills gap after fit in footer */}
            {spacerW > 0 && (
              <td
                style={{
                  width: spacerW,
                  minWidth: spacerW,
                  maxWidth: spacerW,
                  backgroundColor: "#eef2f7",
                  height: 28,
                  padding: 0,
                  borderLeft: "1px solid #e5e5e5",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                }}
                aria-hidden="true"
              />
            )}
            {/* Add Column cell — sticky right in footer */}
            <td
              style={{
                position: "sticky",
                right: 0,
                zIndex: 10,
                width: addColW,
                minWidth: addColW,
                maxWidth: addColW,
                boxShadow: "-2px 0 4px rgba(0,0,0,0.08)",
                backgroundColor: "#eef2f7",
                height: 28,
                padding: "0 4px",
              }}
            />
          </TableRow>
        </tfoot>
      </table>

      {/* Add Column Modal */}
      <AddColumnModal
        open={addColumnOpen}
        onClose={() => setAddColumnOpen(false)}
        onAdd={handleAddMetric}
        alreadyAddedKeys={orderedExtraKeys}
        anchorRect={anchorRect}
      />
    </>
  );
}