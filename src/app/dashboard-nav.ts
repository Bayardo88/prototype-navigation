/**
 * Default firm used when deep-linking from the home dashboard into the workspace.
 * Keep in sync with the first entry in `AVAILABLE_FIRMS` (firm-header-adapted).
 */
export const DASHBOARD_DEEP_LINK_FIRM = "Blackstone Capital Partners";

export type DashboardFeatureAction =
  | { type: "open-firm-secondary"; tab: FirmSecondaryTabForDashboard }
  | { type: "open-placeholder"; featureId: string };

export type FirmSecondaryTabForDashboard =
  | "summary"
  | "schedule-of-investment"
  | "comps"
  | "waterfalls"
  | "reports"
  | "documents";
