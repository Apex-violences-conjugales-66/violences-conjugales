"use client";

import { ArrowUp } from "lucide-react";

const chapters = [
  { label: "Members", href: "/admin#members" },
  { label: "Partners", href: "/admin#partners" },
  { label: "Formations", href: "/admin#formations" },
  { label: "Documents", href: "/admin#documents" },
  { label: "Books", href: "/admin#books" },
  { label: "Movies", href: "/admin#movies" },
  { label: "Memoirs", href: "/admin#memoirs" },
];

export default function DashboardSideNav() {
  return (
    <div className="fixed h-screen w-[var(--sidenav-width)] px-6 py-12 bg-slate-400 gap-8 flex flex-col">
      <a
        href="/admin#top"
        className="flex gap-4 items-center [&>div]:hover:border-slate-200 hover:text-slate-200 "
      >
        <h2 className="font-roboto uppercase ">Tables</h2>
        <div className="p-1 bg-slate-400 border-2 border-slate-800 rounded-md ">
          <ArrowUp size={24} />
        </div>
      </a>
      <nav className="flex flex-col gap-4">
        {chapters.map((chapter) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="font-roboto font-medium uppercase text-2xl py-2 px-4 hover:bg-slate-200 transition-colors rounded-md"
          >
            {chapter.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
