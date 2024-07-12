import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "./Button";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <div className="h-20" />
      <div
        aria-label="Header"
        className="h-[calc(100lvh-80px)] flex flex-col max-w-[1440px] mx-auto"
      >
        <div className="flex h-[450px]">
          <div className="w-2/3 relative">
            <Image
              alt="Header Art"
              src={"/header_art.jpg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/3 ml-2 bg-blue flex flex-col justify-center">
            <div className="flex items-center gap-3 relative ml-14">
              <h1>APEX</h1>
              <div className="relative w-16 h-20">
                <Image alt="Ruban Violet" src={"/ruban_violet.svg"} fill />
              </div>
            </div>
            <h2 className="ml-14">Violences conjugales</h2>
          </div>
        </div>
        <div className="flex grow mt-2">
          <div className="bg-orange w-1/2">
            <div className="h-full flex flex-col mx-24 justify-center gap-y-14">
              <h3>
                L’équipe d’<span className="font-black">APEX</span> est dévouée
                à la lutte contre les violences conjugales.
              </h3>
              <Button className="self-start">Notre Équipe</Button>
            </div>
          </div>
          <div className="bg-yellow w-1/2 ml-2">
            <div className="h-full flex flex-col ml-24 mr-20 justify-center gap-y-14">
              <h3>
                <span className="font-black">APEX</span> offre un soutien
                essentiel aux victimes, promeut la sensibilisation et propose
                des ressources juridiques.
              </h3>
              <Button className="self-start">Nos Actions</Button>
            </div>
          </div>
        </div>
        <div className="bg-yellow">
          <button className="bg-white w-2/3 rounded-tr-3xl py-1 flex items-center">
            <h3 className="grow">Soutenir APEX</h3>
            <div className="size-9 relative mr-1 rounded-2xl ">
              <Image
                className="rounded-2xl"
                alt="Arrow Down Circle"
                src={"/arrow-down-circle.png"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
