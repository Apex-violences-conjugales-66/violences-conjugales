"use client";

import navigationData from "@/app/data/navigationData";
import { PHONE_NUMBER } from "@/app/lib/constants";
import ContactInfo from "@/app/ui/ContactInfo";
import Divider from "@/app/ui/Divider";
import Separator from "@/app/ui/Separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="bg-slate-900 text-white mt-1">
        <div className="container py-10">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-0 lg:flex-row">
            <div className="lg:w-1/3 flex flex-col gap-2">
              <Link
                href="/"
                className="font-bold font-amatic_sc text-4xl tracking-[12px] -mr-[12px] text-center lg:text-start "
              >
                APEX
              </Link>
              <span className="text-xl xl:text-[22px] ">{PHONE_NUMBER}</span>
            </div>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row lg:w-2/3 w-full items-center md:items-stretch justify-between">
              <div className="flex flex-col">
                <h3 className="mb-2 text-center md:text-left">Accès rapides</h3>
                <div className="flex-col flex gap-1 items-center md:items-start">
                  {navigationData.map((item, index) => (
                    <Link
                      key={item.label + index}
                      href={item.path}
                      className="hover:underline underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <ContactInfo
                phone="04 68 63 50 24"
                email="apex-violencesconjugales@hotmail.com"
                address1="3 rue Déodat de Séverac"
                address2="Maison pour les familles"
                address3="66000 - Perpignan"
                className="bg-transparent"
              />
            </div>
          </div>
          <Divider horizontal light className="my-4" />
          <div className="flex flex-col gap-2 md:gap-1 lg:gap-0 lg:flex-row items-center text-sm ">
            <p className="flex gap-1 lg:w-1/3 shrink-0">
              <span>© 2024</span>
              <span>APEX.</span>
              <span>Tous droits réservés.</span>
            </p>
            <p className="flex gap-2 shrink-0 items-center lg:w-1/3 text-center justify-center">
              <Link
                href="/mentions-legales"
                className="hover:underline underline-offset-4"
              >
                Mentions Légales
              </Link>
              <span>|</span>
              <Link
                href="/politique-de-confidentialite"
                className="hover:underline underline-offset-4"
              >
                Politique de Confidentialité
              </Link>
            </p>
            <p className="flex gap-2 lg:w-1/3 justify-end">
              Conception. AEPirlot
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
