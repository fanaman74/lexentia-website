"use server";

import { headers } from "next/headers";
import { contactSchema, type ContactField, type ContactState } from "./contact";

// Simple per-instance limiter. Replace with a shared store (e.g. Upstash) when
// hosting is chosen; serverless instances do not share this map.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

/**
 * Hands the enquiry to the mail provider. Deliberately unimplemented: the firm
 * must choose a provider (brief §34). Enquiry content is never logged.
 */
async function deliverEnquiry(_enquiry: unknown): Promise<boolean> {
  if (process.env.CONTACT_DELIVERY === "noop" || process.env.NODE_ENV !== "production") {
    console.info("[contact] enquiry accepted (delivery not configured in this environment)");
    return true;
  }
  console.error("[contact] no delivery provider configured");
  return false;
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  const raw = Object.fromEntries(
    ["name", "email", "phone", "matterType", "language", "subject", "message", "consent"].map((k) => [
      k,
      typeof formData.get(k) === "string" ? (formData.get(k) as string) : undefined,
    ]),
  );
  const values = { ...raw, consent: undefined } as Partial<Record<ContactField, string>>;

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return { status: "rate-limited", values };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Partial<Record<ContactField, true>> = {};
    for (const issue of parsed.error.issues) errors[issue.path[0] as ContactField] = true;
    return { status: "invalid", errors, values };
  }

  const ok = await deliverEnquiry(parsed.data);
  return ok ? { status: "success" } : { status: "error", values };
}
