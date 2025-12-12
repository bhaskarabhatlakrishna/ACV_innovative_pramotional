"use client";
import { Globe, Smartphone, MapPin, LineChart, Settings, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Custom-built web applications tailored to your business, using modern frameworks and best practices for performance and scalability.",
    back: "Responsive UI, robust APIs, and cloud-native architectures designed around your workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Cloud Integration",
    description:
      "Seamless integration across mobile and cloud platforms, ensuring your applications work flawlessly on any device, anywhere.",
    back: "Secure APIs, offline-first patterns, and notification systems for always-on operations.",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking Systems",
    description:
      "GPS-based tracking for fleets, assets, and workforce with live dashboards and alerts.",
    back: "Increase on-time deliveries, reduce idle time, and gain instant visibility across your operations.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description:
      "Turn raw data into clear dashboards, reports, and insights that drive decision-making.",
    back: "Custom KPIs, drill-down analytics, and exportable reports for every stakeholder.",
  },
  {
    icon: Settings,
    title: "Custom ERP & Workflow Tools",
    description:
      "End-to-end tools that connect departments, automate processes, and reduce manual work.",
    back: "Role-based access, approval flows, and integration with your existing systems.",
  },
  {
    icon: Database,
    title: "Data Engineering & Integrations",
    description:
      "Secure, scalable data pipelines connecting your apps, devices, and third-party services.",
    back: "ETL jobs, API integrations, and well-structured data models for long-term reliability.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-fade border-t border-slate-100 bg-slate-50 py-20 dark:border-slate-800/60 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            From logistics to analytics, we design and deliver systems that connect your operations
            end-to-end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group perspective-1000"
            >
              <div className="relative h-full min-h-[220px] transform rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90 [backface-visibility:hidden]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-sm text-blue-50 shadow-xl shadow-blue-900/40 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="mb-2 text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-blue-100">{service.back}</p>
                  <p className="mt-auto text-xs text-blue-100/80">
                    Hover or tap to flip back • Optimised for performance, security, and maintainability.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}