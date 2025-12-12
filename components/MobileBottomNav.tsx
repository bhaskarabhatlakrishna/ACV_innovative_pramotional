"use client";

import {
  Home,
  Info,
  Briefcase,
  LayoutDashboard,
  MessageCircle,
  Phone,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "projects", label: "Projects", icon: LayoutDashboard },
  { id: "testimonials", label: "Testimonials", icon: MessageCircle },
  { id: "contact", label: "Contact", icon: Phone },
];

export default function MobileBottomNav() {
  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_-6px_20px_rgba(15,23,42,0.16)] dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-screen-2xl items-center justify-between px-2.5 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                flex flex-1 flex-col items-center justify-center
                gap-1 rounded-xl px-0.5 py-1.5
                text-[10px] font-medium
                text-slate-500
                transition
                hover:bg-slate-100 hover:text-blue-600
                dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-300
              "
            >
              <Icon className="h-5 w-5" />
              <span className="hidden xs:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}