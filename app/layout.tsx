import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACV Innovative Technologies",
  description: "ACV Innovative Technologies - Intelligent, scalable software solutions",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}