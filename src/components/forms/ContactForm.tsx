"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/lib/contact-action";
import { contactLanguages, matterTypes, type ContactField, type ContactState } from "@/lib/contact";
import type { Dictionary } from "@/content/dictionary";

type Props = { dict: Dictionary["contact"]["form"]; privacyHref: string; defaultLanguage: string };

export function ContactForm({ dict, privacyHref, defaultLanguage }: Props) {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-warm)] p-8 outline-none">
        <p className="display text-[2rem] leading-tight">{dict.successTitle}</p>
        <p className="mt-3 text-[var(--color-ink-soft)]">{dict.successBody}</p>
      </div>
    );
  }

  const err = (f: ContactField) => Boolean(state.errors?.[f]);
  const val = (f: ContactField) => state.values?.[f] ?? "";
  const described = (f: ContactField) => (err(f) ? `${f}-error` : undefined);
  const ErrorText = ({ f }: { f: ContactField }) =>
    err(f) ? (
      <p id={`${f}-error`} className="mt-2 text-sm text-[#9b2c1f]">
        {dict.errors[f]}
      </p>
    ) : null;

  const banner =
    state.status === "invalid" ? dict.fixErrors : state.status === "rate-limited" ? dict.rateLimited : state.status === "error" ? `${dict.errorTitle} ${dict.errorBody}` : null;

  return (
    // key forces defaultValues to refresh with the values returned by the server
    <form key={JSON.stringify(state.values ?? {})} action={action} noValidate className="space-y-7">
      <div ref={statusRef} tabIndex={-1} role="alert" className="outline-none">
        {banner ? <p className="rounded-lg border border-[#dbada6] bg-[#fff4f1] p-4 text-sm">{banner}</p> : null}
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">{dict.name}</label>
          <input id="name" name="name" autoComplete="name" required defaultValue={val("name")} aria-invalid={err("name")} aria-describedby={described("name")} className="field" />
          <ErrorText f="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">{dict.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={val("email")} aria-invalid={err("email")} aria-describedby={described("email")} className="field" />
          <ErrorText f="email" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">{dict.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={val("phone")} aria-invalid={err("phone")} aria-describedby={described("phone")} className="field" />
          <ErrorText f="phone" />
        </div>
        <div>
          <label htmlFor="language" className="mb-2 block text-sm font-medium">{dict.language}</label>
          <select id="language" name="language" required defaultValue={val("language") || defaultLanguage} aria-invalid={err("language")} aria-describedby={described("language")} className="field">
            {contactLanguages.map((l) => (
              <option key={l} value={l}>{dict.languages[l]}</option>
            ))}
          </select>
          <ErrorText f="language" />
        </div>
      </div>

      <div>
        <label htmlFor="matterType" className="mb-2 block text-sm font-medium">{dict.matterType}</label>
        <select id="matterType" name="matterType" required defaultValue={val("matterType")} aria-invalid={err("matterType")} aria-describedby={described("matterType")} className="field">
          <option value="" disabled>{dict.matterPlaceholder}</option>
          {matterTypes.map((m) => (
            <option key={m} value={m}>{dict.matterTypes[m]}</option>
          ))}
        </select>
        <ErrorText f="matterType" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">{dict.subject}</label>
        <input id="subject" name="subject" required defaultValue={val("subject")} aria-invalid={err("subject")} aria-describedby={described("subject")} className="field" />
        <ErrorText f="subject" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">{dict.message}</label>
        <textarea id="message" name="message" rows={7} required defaultValue={val("message")} aria-invalid={err("message")} aria-describedby={described("message")} className="field resize-y" />
        <ErrorText f="message" />
      </div>

      {/* Honeypot, hidden from people and assistive technology */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <div className="flex gap-3">
          <input id="consent" name="consent" type="checkbox" required aria-invalid={err("consent")} aria-describedby={described("consent")} className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-forest)]" />
          <label htmlFor="consent" className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {dict.consent}{" "}
            (<Link href={privacyHref} className="underline underline-offset-2">{dict.privacyLink}</Link>)
          </label>
        </div>
        <ErrorText f="consent" />
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
        {pending ? dict.sending : dict.submit} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
