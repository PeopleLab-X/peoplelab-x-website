/**
 * PeopleLab X - Analytics (No-Cookie/Console-Only Version)
 * We operate entirely without cookies, trackers, or non-essential scripts.
 * This ensures 100% GDPR-compliance and zero cookie banner intrusion.
 */

export interface TestEventLog {
  id: string;
  timestamp: string;
  type: "event" | "consent_default" | "consent_update";
  name: string;
  params?: Record<string, any>;
}

export const GA_MEASUREMENT_ID = "";

export function clearAnalyticsCookies() {
  // No-op as we do not write cookies
}

export function loadGA4Script() {
  // No-op to avoid loading tracking scripts
}

export function initAnalyticsState() {
  // No-op to ensure no cookies or external trackers are initialized
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  // We log events to console in development only for debugging routing, without storing or tracking any PII
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event] ${eventName}`, eventParams);
  }
}

export function updateConsentState(analyticsGranted: boolean) {
  // No-op
}
