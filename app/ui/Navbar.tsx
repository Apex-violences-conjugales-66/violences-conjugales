"use client";

import { navigationData } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";
import Padlock from "@/app/ui/icons/Padlock";
import LogoApex from "@/app/ui/LogoApex";
import NavLink from "@/app/ui/NavLink";
import { Home, TextAlignJustify, X } from "lucide-react";
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
          "fixed w-full z-20 top-0 h-[var(--navbar-height)] lg:h-[var(--navbar-height-lg)] bg-white shadow-sm transition-all duration-300",
          scrolled &&
            "h-[var(--navbar-height-scrolled)] lg:h-[var(--navbar-height-lg-scrolled)]",
          isOpen && "shadow-none",
        )}
      >
        <div className="container h-full flex items-center justify-between">
          <div className="z-10 lg:hidden">
            <button onClick={toggleOpen}>
              {!isOpen ? <TextAlignJustify size={30} /> : <X size={30} />}
            </button>
          </div>
          <Link
            href="/"
            className={cn(
              "h-[var(--navbar-height)] lg:h-[var(--navbar-height-lg)] flex items-center justify-center transition-all duration-300",
              scrolled &&
                "h-[var(--navbar-height-scrolled)] lg:h-[var(--navbar-height-lg-scrolled)]",
            )}
          >
            <LogoApex
              className={cn(
                "w-20 lg:w-24 transition-all duration-300",
                scrolled && "w-16 lg:w-20",
              )}
            />
          </Link>
          <div
            className={cn(
              "hidden items-center lg:flex justify-center gap-4 xl:gap-6 transition-all duration-300 translate-x-1",
              scrolled && "gap-4 translate-x-3",
            )}
          >
            <NavLink href="/">
              <Home className="md:size-8" />
            </NavLink>
            {navigationData.map((item, index) => (
              <NavLink key={index} href={item.path}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-0 self-start lg:gap-2">
            <Link
              href="/admin"
              className="size-8 md:size-12 items-center justify-center border-2 border-t-0 border-gray-800 bg-gray-800 rounded-b-xl z-50 text-white hover:text-gray-800 hover:bg-white transition-colors hidden lg:flex"
            >
              <Padlock className="h-auto w-4 md:w-6" />
            </Link>
            <Link
              href="https://www.google.com/"
              className="size-8 md:size-12 flex items-center justify-center bg-red-600 rounded-b-xl border-2 border-t-0 border-red-600 text-white hover:bg-white hover:text-red-600 transition-colors z-50"
            >
              <X className="h-auto w-6 md:w-8" />
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed w-full z-10 py-1 flex justify-center shadow-sm top-[var(--navbar-height)] lg:hidden bg-white transition-all duration-300 gap-4",
          isOpen ? "translate-x-0 " : "-translate-x-full",
          scrolled && "top-[var(--navbar-height-scrolled)]",
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
