export type AnalyticsEvent =
  | "view_campaign"
  | "click_creator_apply"
  | "click_brand_inquiry"
  | "select_campaign"
  | "start_creator_form"
  | "submit_creator_form"
  | "start_brand_form"
  | "submit_brand_form"
  | "form_submit_error"
  | "view_creator_page"
  | "start_creator_application"
  | "complete_creator_step_1"
  | "complete_creator_step_2"
  | "submit_creator_application"
  | "creator_application_error"
  | "view_brand_page"
  | "start_brand_inquiry"
  | "complete_brand_step_1"
  | "complete_brand_step_2"
  | "brand_fit_check_completed"
  | "submit_brand_inquiry"
  | "brand_inquiry_error";

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, parameters);
}
