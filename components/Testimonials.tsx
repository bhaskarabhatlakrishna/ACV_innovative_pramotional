"use client";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ACV Innovative Technologies transformed our logistics operations with a real-time fleet tracking system. Our fleet efficiency improved by 40% within the first quarter.",
    name: "Rajesh Kumar",
    company: "LogiTrans Solutions",
  },
  {
    quote:
      "Their custom ERP solution streamlined our entire workflow, from inventory to dispatch. We have seen significant improvements in productivity and cost reduction.",
    name: "Priya Sharma",
    company: "TechManufacture Industries",
  },
  {
    quote:
      "The analytics platform they delivered gave us visibility we never had before. Decision-making is faster, and our teams are more aligned.",
    name: "Ankit Verma",
    company: "GrowthEdge Analytics",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-fade border-t border-slate-100 bg-gradient-to-b from-slate-50 to-slate-100 py-20 dark:border-slate-800/60 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Impact-driven partnerships with measurable outcomes, from the very first deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/15 dark:border-slate-800/80 dark:bg-slate-900/80"
            >
              {/* Half flip visual effect */}
              <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 origin-bottom transform-gpu bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 transition duration-500 group-hover:-translate-y-4 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm dark:bg-blue-500/10 dark:text-blue-300">
                  <Quote className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-slate-700 italic dark:text-slate-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-4 border-t border-slate-200 pt-4 text-sm dark:border-slate-700">
                  <div className="font-semibold text-slate-900 dark:text-slate-50">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}