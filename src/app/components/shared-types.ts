export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CHF" | "CAD" | "AUD" | "CNY";
export type DisplayUnit = "Thousands" | "Millions" | "Hundreds";

interface CurrencyInfo {
  code: Currency;
  symbol: string;
  name: string;
}

export const CURRENCIES: CurrencyInfo[] = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
];

export function getCurrencySymbol(c: Currency): string {
  return CURRENCIES.find((x) => x.code === c)?.symbol ?? "$";
}

export const UNIT_CYCLE: DisplayUnit[] = ["Thousands", "Millions", "Hundreds"];

export const FX_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.5,
  CHF: 0.88,
  CAD: 1.36,
  AUD: 1.53,
  CNY: 7.24,
};

export function getDivisor(unit: DisplayUnit): number {
  if (unit === "Thousands") return 1000;
  if (unit === "Millions") return 1000000;
  return 100; // Hundreds
}

export function formatValue(raw: number, currency: Currency, unit: DisplayUnit): string {
  const rate = FX_RATES[currency] ?? 1;
  const divisor = getDivisor(unit);
  const converted = (raw * rate) / divisor;
  const sym = getCurrencySymbol(currency);

  if (unit === "Millions") {
    return `${sym}${converted.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return `${sym}${Math.round(converted).toLocaleString("en-US")}`;
}

/** Which primary nav pill (Firm / Fund / Company) shows the active blue style — last one the user picked. */
export type PrimaryNavSelectionFocus = "firm" | "fund" | "company" | null;

// ─── Page Context Type ──────────────────────────────────────────────────
export type PageContext = "Firm" | "Fund";

// ─── Currency ────────────────────────────────────────────────────────────