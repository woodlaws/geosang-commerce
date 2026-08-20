"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  analyticsEvent: AnalyticsEvent;
  analyticsData?: Record<string, string | number | boolean>;
};

export function TrackedLink({ analyticsEvent, analyticsData, onClick, ...props }: Props) {
  return <Link {...props} onClick={(event) => {
    trackEvent(analyticsEvent, analyticsData);
    onClick?.(event);
  }} />;
}
