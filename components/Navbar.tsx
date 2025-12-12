"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

type Theme = "light" | "dark";

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme: Theme = prefersDark ? "dark" : "light";
      setTheme(nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme: Theme = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
      }
      return nextTheme;
    });
  };

  return [theme, toggleTheme];
}

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-40
        border-b border-white/40
        bg-gradient-to-b from-white/75 via-white/30 to-white/10
        supports-[backdrop-filter]:bg-white/20
        backdrop-blur-3xl
        shadow-[0_8px_24px_rgba(15,23,42,0.10)]
        dark:border-slate-700/70
        dark:bg-gradient-to-b dark:from-slate-950/80 dark:via-slate-900/40 dark:to-slate-900/20
        supports-[backdrop-filter]:dark:bg-slate-900/40
      "
    >
      {/* full width container */}
      <div className="flex w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
        {/* LOGO – little bigger + more glass */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center"
        >
          <div
            className="
              relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center
              rounded-3xl
              bg-white/55
              shadow-md shadow-slate-300/40
              ring-1 ring-white/70
              backdrop-blur-3xl
              dark:bg-slate-900/80 dark:ring-slate-700/90
            "
          >
            <Image
              src="/logo.png"
              alt="ACV Innovative Technologies Logo"
              width={72}
              height={72}
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              priority
            />
          </div>
        </button>

        {/* DESKTOP NAV ITEMS */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-sm font-medium
                text-slate-600
                hover:text-slate-900
                transition
                dark:text-slate-200 dark:hover:text-white
              "
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* THEME TOGGLE ONLY */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-white/40
              bg-white/70 text-slate-800
              shadow-sm shadow-slate-300/50
              backdrop-blur-xl
              transition hover:-translate-y-0.5 hover:border-slate-300
              dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-100
            "
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}