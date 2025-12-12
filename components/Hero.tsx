"use client";
import { Code, Activity, BarChart3 } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="section-fade pt-28 pb-20 bg-gradient-to-br from-slate-50 via-slate-50 to-blue-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Intelligent software for real-world operations
            </span>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
                ACV Innovative Technologies
              </h1>
              <p className="max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
                We build scalable web, mobile, and tracking solutions that power logistics, analytics,
                and enterprise operations. From fleet management to custom ERP, we turn complexity into
                clarity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-slate-950"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
              >
                View Services
              </button>
            </div>

            <dl className="grid max-w-xl grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <dt className="font-semibold text-slate-900 dark:text-slate-50">5+ Years</dt>
                <dd className="text-slate-500 dark:text-slate-400">Industry experience</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <dt className="font-semibold text-slate-900 dark:text-slate-50">Tracking</dt>
                <dd className="text-slate-500 dark:text-slate-400">Real-time fleet & assets</dd>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <dt className="font-semibold text-slate-900 dark:text-slate-50">Analytics</dt>
                <dd className="text-slate-500 dark:text-slate-400">Actionable insights</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Web Applications
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Modern, responsive web apps built with TypeScript, React, and cloud-native architectures.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Real-time Tracking
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  GPS & IoT powered dashboards for logistics, fleets, and field operations.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 md:pt-8">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Analytics & Fleet Solutions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Actionable analytics, alerts, and reporting for faster, smarter decisions.
                </p>
              </div>

              <div className="rounded-3xl border border-dashed border-slate-300 p-5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <p className="font-medium text-slate-700 dark:text-slate-200">
                  Built for Indian businesses
                </p>
                <p className="mt-1">
                  From Kukatpally, Hyderabad to pan-India deployments, we understand local operations and scale with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}