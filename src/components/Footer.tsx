import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import Separator from "./ui/Separator";
import Link from "next/link";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="Footer">
      <Separator variant />
      <div className="bg-purple py-16 relative">
        <div className="container flex flex-col gap-24 justify-between md:flex-row">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <div className="relative w-16 h-20">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/ruban_violet.svg"}
                  fill
                />
              </div>
              <div className="flex flex-col justify-center ">
                <span className="font-bold text-xl">APEX</span>
                <span className="font-light text-[22px]">04 68 63 50 24</span>
              </div>
            </div>
            <div className="w-60 flex flex-col gap-y-3 items-center font-bold uppercase border py-4">
              <Link href={"/"} className="hover:opacity-65 transition">
                Acceuil
              </Link>
              <Link
                href={"/projet-associatif"}
                className="hover:opacity-65 transition"
              >
                Le Projet
              </Link>
              <Link href={"/formation"} className="hover:opacity-65 transition">
                La Formation
              </Link>
              <Link
                href={"/ressources"}
                className="hover:opacity-65 transition"
              >
                Nos Ressources
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3>Effacer les traces de votre passage</h3>
            <div className="flex items-center gap-x-4">
              <h5>Pour effacer toute trace des sites que vous avez visités</h5>
              <div className="relative min-w-6 h-6">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Effacer l&rsquo;historique</h4>
            </div>
            <div className="flex items-center gap-x-4">
              <h5>
                Pour effacer toute trace des mots introduits dans les moteurs de
                recherche
              </h5>
              <div className="relative min-w-6 h-6">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Annuler la saisie semi-automatique</h4>
            </div>
            <h5>La procédure suivant votre navigateur :</h5>
            <div className="flex flex-wrap gap-x-12 gap-y-4 justify-evenly mt-2">
              <Button>Chrome</Button>
              <Button>Firefox</Button>
              <Button>Safari</Button>
            </div>
          </div>
        </div>
        <p className="text-sm absolute bottom-2 right-10">
          © 2024 &nbsp;&nbsp; APEX | AEPirlot &nbsp;&nbsp; All rights reserved
          &nbsp;&nbsp; Mentions légales.
        </p>
      </div>
      <div />
    </div>
  );
};

export default Footer;
