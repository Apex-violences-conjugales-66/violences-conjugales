import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "./Button";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div aria-label="footer">
      <div className="relative w-full h-[376px]  mb-1 mt-20">
        <Image
          alt="illustration"
          src={"/vector/separator-pattern2-1920.svg"}
          quality={100}
          fill
          objectFit="cover"
        />
      </div>
      <div className="bg-purple py-16">
        <div className="container flex justify-between gap-x-48">
          <div className="flex flex-col items-center">
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
            <div className="flex gap-x-4">
              <div className="flex flex-col gap-y-4">
                <a>Menu 1</a>
                <a>Menu 1</a>
                <a>Menu 1</a>
                <a>Menu 1</a>
              </div>
              <span className="h-full w-[2px] rounded-md bg-grey" />
              <div className="flex flex-col gap-y-4">
                <a>Menu 1</a>
                <a>Menu 1</a>
                <a>Menu 1</a>
                <a>Menu 1</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3>Effacer les traces de votre passage</h3>
            <div className="flex items-center gap-x-4">
              <h5>Pour effacer toute trace des sites que vous avez visités</h5>
              <div className="relative w-6 h-6">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Effacer l'historique</h4>
            </div>
            <div className="flex items-center gap-x-4">
              <h5>
                Pour effacer toute trace des mots introduits dans les moteurs de
                recherche
              </h5>
              <div className="relative w-6 h-6 shrink-0">
                <Image
                  alt="Ruban Violet"
                  src={"/vector/arrow-right.svg"}
                  fill
                />
              </div>
              <h4>Annuler la saisie semi-automatique</h4>
            </div>
            <h5>La procédure suivant votre navigateur :</h5>
            <div className="flex gap-x-12">
              <Button>Chrome</Button>
              <Button>Firefox</Button>
              <Button>Safari</Button>
            </div>
            <p className="text-sm self-end">
              <span className="italic">Copyright @ AEPirlot </span> 2024 |
              Mentions légales
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Footer;
