"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ArrowUp } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const [query, setQuery] = useState("");

  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const match = sections.find((s) =>
      s.label.toLowerCase().includes(query.toLowerCase().trim())
    );
    if (match) {
      scrollToSection(match.id);
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 text-slate-200 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl 2xl:max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto] md:items-start">
          {/* Logo + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="
                  relative flex h-11 w-11 items-center justify-center
                  rounded-3xl
                  bg-slate-900/80
                  shadow-md shadow-slate-900/60
                  ring-1 ring-slate-700/90
                  backdrop-blur-2xl
                "
              >
                <Image
                  src="/logo.png"
                  alt="ACV Innovative Technologies Logo"
                  width={48}
                  height={48}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-50">
                  ACV Innovative
                </span>
                <span className="text-xs text-slate-400">
                  Technologies
                </span>
              </div>
            </div>

            <p className="max-w-md text-sm text-slate-400">
              Building reliable, intelligent software systems for logistics,
              analytics, and enterprise operations across web, mobile, and cloud.
            </p>
          </div>

          {/* Quick links + search */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="
                    rounded-full border border-slate-700/80
                    px-3 py-1 text-xs font-medium
                    text-slate-300
                    hover:border-slate-500 hover:bg-slate-800 hover:text-slate-50
                    transition
                  "
                >
                  {section.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSearch}
              className="
                flex w-full items-center gap-2
                rounded-full border border-slate-700 bg-slate-900/80
                px-3 py-1.5 text-sm shadow-sm
              "
            >
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Quick jump to a section..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
              />
            </form>
          </div>

          {/* Scroll to top + meta */}
          <div className="flex flex-col items-end gap-4">
            <button
              onClick={scrollToTop}
              className="
                inline-flex items-center justify-center
                rounded-full border border-slate-700
                bg-slate-900/80
                px-3 py-2 text-xs font-medium text-slate-200
                shadow-sm shadow-slate-900/60
                hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5
                transition
              "
            >
              <ArrowUp className="mr-1.5 h-3.5 w-3.5" />
              Back to top
            </button>

            <div className="space-y-1 text-right text-[11px] text-slate-500">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-semibold text-slate-200">
                  ACV Inovative
                </span>
                . All Rights Reserved.
              </p>
              <p>
                Designed by{" "}
                <span className="font-medium text-slate-300">
                  ACV Innnovative
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}