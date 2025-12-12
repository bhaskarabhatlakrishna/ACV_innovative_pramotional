"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Fleet Management Dashboard",
    subtitle: "Real-time tracking for logistics company",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    alt: "Fleet management dashboard showing vehicle tracking and analytics",
  },
  {
    title: "Analytics Platform",
    subtitle: "Business intelligence solution",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    alt: "Analytics platform displaying data visualizations and charts",
  },
  {
    title: "Custom ERP System",
    subtitle: "Enterprise resource management",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
    alt: "Custom ERP interface with multiple widgets",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-fade border-t border-slate-100 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Selected Projects
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
            A snapshot of the platforms, dashboards, and tools we&apos;ve built for logistics,
            manufacturing, and enterprise customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-400">
                  {project.subtitle}
                </p>
                <div className="mt-4 inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400">
                  View use case
                  <ArrowRight className="ml-1 h-3 w-3 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}