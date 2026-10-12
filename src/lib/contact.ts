import { z } from "zod";

export const matterTypes = ["eu-staff", "disciplinary", "medical", "private", "business", "other"] as const;
export const contactLanguages = ["fr", "en", "nl", "es"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(200),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+0-9 ()./-]*$/)
    .optional()
    .or(z.literal("")),
  matterType: z.enum(matterTypes),
  language: z.enum(contactLanguages),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(20).max(5000),
  consent: z.literal("on"),
});

export type ContactField = keyof z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "invalid" | "error" | "rate-limited";
  errors?: Partial<Record<ContactField, true>>;
  values?: Partial<Record<ContactField, string>>;
};
