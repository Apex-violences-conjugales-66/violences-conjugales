"use client";

import { PHONE_NUMBER } from "@/app/lib/constants";
import Link from "next/link";
import { TextAlignJustify, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavLink from "@/app/ui/NavLink";
import navigationData from "@/app/data/navigationData";
import { cn } from "@/app/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-20 top-0 h-[var(--navbar-height)] lg:h-[var(--navbar-height-lg)] bg-white lg:shadow-sm">
        <div className="container h-full flex items-center">
          <button className="z-10 lg:hidden" onClick={toggleOpen}>
            {!isOpen ? <TextAlignJustify size={30} /> : <X size={30} />}
          </button>
          <div className="w-full justify-center flex flex-col gap-2 items-center -ml-[30px] lg:ml-0 lg:w-auto">
            <Link
              href="/"
              className="font-bold font-amatic_sc text-4xl tracking-[12px] -mr-[12px] "
            >
              APEX
            </Link>
            <span className="font-light text-xl xl:text-[22px]">
              {PHONE_NUMBER}
            </span>
          </div>
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
          className="absolute right-14 sm:right-20 h-8 w-8 sm:h-12 sm:w-12 top-0 flex items-center justify-center bg-gray-800 rounded-b-xl z-50 hover:bg-gray-600 transition-colors"
        >
          <Image
            src="/vector/padlock.svg"
            alt="Heart"
            width={30}
            height={34}
            className="h-auto w-4 sm:w-6"
          />
        </Link>
        <Link
          href="https://www.google.com/"
          className="absolute h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center bg-red-500 top-0 right-4 rounded-b-xl hover:bg-red-400 transition-colors z-50"
        >
          <X className="text-white h-auto w-6 sm:w-8" />
        </Link>
      </nav>
      <div
        className={cn(
          "fixed w-full z-10 py-4 flex justify-center shadow-sm top-[var(--navbar-height)] lg:hidden bg-white transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-full",
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
