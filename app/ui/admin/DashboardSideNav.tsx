"use client";

import { ArrowUp } from "lucide-react";

const chapters = [
  { label: "Catalogues", href: "/admin#catalogue" },
  { label: "Bulletins", href: "/admin#bulletin" },
  { label: "Certificats", href: "/admin#certificats" },
  { label: "Membres", href: "/admin#members" },
  { label: "Partenaires", href: "/admin#partners" },
  { label: "Formations", href: "/admin#formations" },
  { label: "Documents", href: "/admin#documents" },
  { label: "Livres", href: "/admin#books" },
  { label: "Films", href: "/admin#movies" },
  { label: "Mémoires", href: "/admin#memoirs" },
];

export default function DashboardSideNav() {
  return (
    <div className="fixed h-screen w-[var(--sidenav-width)] px-6 py-12 bg-orange-600 gap-8 flex flex-col text-white">
      <a
        href="/admin#top"
        className="flex gap-4 items-center [&>div]:hover:border-gray-800 p-2 border-2 border-white mb-10 rounded-md size-fit hover:text-gray-800 hover:border-gray-800 hover:bg-white transition-colors w-full justify-between"
      >
        <h2 className="uppercase">Tables</h2>
        <div className="p-1 border-2 border-white rounded-md transition-colors">
          <ArrowUp size={24} />
        </div>
      </a>
      <nav className="flex flex-col gap-4">
        {chapters.map((chapter) => (
          <a
            key={chapter.href}
            href={chapter.href}
            className="font-amatic_sc font-bold uppercase text-4xl py-2 px-4 border-2 border-orange-600 hover:bg-orange-50 hover:text-gray-800 hover:border-gray-800 transition-colors rounded-md"
          >
            {chapter.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
