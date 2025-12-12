"use client";
import { Lightbulb, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-fade border-t border-slate-100 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            About ACV Innovative Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            We are a forward-thinking software development company specializing in intelligent,
            scalable solutions that empower businesses to thrive in the digital age. Our expertise
            spans web application development, real-time tracking systems, analytics platforms, and
            custom enterprise tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
              Innovation First
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We combine domain knowledge with modern technology stacks to build solutions that are
              not just functional, but future-ready.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
              Business Outcomes
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Every feature we ship is aligned with real-world KPIs like efficiency, visibility, and
              cost optimization.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
              Reliability & Security
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              From infrastructure to UI, we build with reliability and security in mind, so your
              operations never stop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}