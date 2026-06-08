"use client";

import { useEffect, useState } from "react";
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
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="fixed h-screen w-[var(--sidenav-width)] px-6 py-12 bg-orange-600 flex flex-col text-white overflow-y-auto overflow-x-hidden">
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
        {chapters.map((chapter) => {
          const chapterHash = chapter.href.split("#")[1];
          const isActive = hash === `#${chapterHash}`;
          return (
            <a
              key={chapter.href}
              href={chapter.href}
              className={`font-amatic_sc font-bold uppercase text-4xl py-2 px-4 transition-all rounded-md hover:text-orange-200 hover:translate-x-8 ${
                isActive ? "translate-x-8 text-orange-200" : ""
              }`}
            >
              {chapter.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
