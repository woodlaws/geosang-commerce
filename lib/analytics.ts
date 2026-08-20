export type AnalyticsEvent =
  | "view_campaign"
  | "click_creator_apply"
  | "click_brand_inquiry"
  | "select_campaign"
  | "start_creator_form"
  | "submit_creator_form"
  | "start_brand_form"
  | "submit_brand_form"
  | "form_submit_error";

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, parameters);
}
