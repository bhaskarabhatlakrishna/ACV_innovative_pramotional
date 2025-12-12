"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Tell us a bit more about your requirements (at least 10 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    const parsed = contactSchema.safeParse({
      ...values,
      company: values.company?.trim() ? values.company : undefined,
    });

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Data is valid
    const data = parsed.data;

    // ✅ Log it in the browser console
    console.log("Contact form submitted:", data);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Failed to send email:", body);
        setSubmitError("Something went wrong while sending your message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // success
      setIsSubmitting(false);
      setIsSubmitted(true);
      setValues({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error("Network error while sending contact form:", err);
      setSubmitError("Unable to reach the server. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const infoItemClass =
    "flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/60";

  return (
    <section
      id="contact"
      className="section-fade border-t border-slate-100 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
              Get In Touch
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-slate-300">
              Tell us about your project, and we&apos;ll get back to you with suggestions, rough
              timelines, and next steps.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="text-xs font-medium uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={values.company ?? ""}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  placeholder="Company / organisation name (optional)"
                  autoComplete="organization"
                />
                {errors.company && (
                  <p className="text-xs text-red-500">{errors.company}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  Project details<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-blue-500/0 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                  placeholder="Briefly describe what you are looking to build or improve."
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:ring-offset-slate-950"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </button>
                {isSubmitted && !submitError && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Thank you! We&apos;ll get back to you shortly.
                  </span>
                )}
                {submitError && (
                  <span className="text-xs font-medium text-red-500">
                    {submitError}
                  </span>
                )}
              </div>
            </form>
          </div>

          <aside className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Contact Information
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Prefer talking directly? Reach out using the details below.
            </p>

            <div className="space-y-3">
              <div className={infoItemClass}>
                <div className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:info@acvinnovative.com"
                    className="text-sm font-medium text-slate-900 hover:text-blue-600 dark:text-slate-50 dark:hover:text-blue-300"
                  >
                    info@acvinnovative.com
                  </a>
                </div>
              </div>

              <div className={infoItemClass}>
                <div className="mt-0.5 rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    +91-98765-43210
                  </p>
                </div>
              </div>

              <div className={infoItemClass}>
                <div className="mt-0.5 rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Office
                  </p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    Kukatpally, Hyderabad
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Telangana 500072, India
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}