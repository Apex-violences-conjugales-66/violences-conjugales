"use client";

import navigationData from "@/app/data/navigationData";
import { cn } from "@/app/lib/utils";
import Padlock from "@/app/ui/icons/Padlock";
import LogoApex from "@/app/ui/LogoApex";
import NavLink from "@/app/ui/NavLink";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-20 top-0 h-[var(--navbar-height)] lg:h-[var(--navbar-height-lg)] bg-white shadow-sm transition-all duration-300 ",
          scrolled && "h-20 lg:h-24",
          isOpen && "shadow-none",
        )}
      >
        <div className="container h-full flex items-center">
          <div className="z-10 lg:hidden w-1/2">
            <button onClick={toggleOpen}>
              {!isOpen ? <TextAlignJustify size={30} /> : <X size={30} />}
            </button>
          </div>
          <Link href="/" className="-translate-x-1/2 lg:translate-x-0">
            <LogoApex className="w-16" />
          </Link>
          <div className="hidden lg:flex flex-shrink-0 flex-grow justify-center gap-6">
            {navigationData.map((item, index) => (
              <NavLink key={index} href={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <Link
          href="/login"
          className="absolute right-14 sm:right-20 h-8 w-8 sm:h-12 sm:w-12 top-0 flex items-center justify-center border-2 border-t-0 border-gray-800 bg-gray-800 rounded-b-xl z-50 text-white hover:text-gray-800 hover:bg-white transition-colors"
        >
          <Padlock className="h-auto w-4 sm:w-6" />
        </Link>
        <Link
          href="https://www.google.com/"
          className="absolute h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center bg-red-600 top-0 right-4 rounded-b-xl border-2 border-t-0 border-red-600 text-white hover:bg-white hover:text-red-600 transition-colors z-50"
        >
          <X className="h-auto w-6 sm:w-8" />
        </Link>
      </nav>
      <div
        className={cn(
          "fixed w-full z-10 py-1 flex justify-center shadow-sm top-[var(--navbar-height)] lg:hidden bg-white transition-all duration-300 gap-1",
          isOpen ? "translate-x-0" : "-translate-x-full",
          scrolled && "top-20",
        )}
      >
        {navigationData.map((item, index) => (
          <NavLink key={index} href={item.path}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
