import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from "./ui/Button";

interface HomeHeaderProps {}

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  //TODO add redirections on buttons and responsive
  return (
    <div className="HomeHeader">
      <div className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow">
        <div className="h-[calc(100lvh-124px)] flex flex-col max-w-[1440px] mx-auto bg-white ">
          <div className="flex h-[450px] px-1">
            <div className="w-2/3 relative">
              <Image
                alt="Header Art"
                src={"/header_art.jpg"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-1/3 ml-1 bg-blue flex flex-col justify-center">
              <div className="flex items-center gap-3 relative ml-14">
                <h1>APEX</h1>
                <div className="relative w-16 h-20">
                  <Image
                    alt="Ruban Violet"
                    src={"/vector/ruban_violet.svg"}
                    fill
                  />
                </div>
              </div>
              <h2 className="ml-14">Violences conjugales</h2>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange from-50% via-yellow to-yellow mt-1 grow">
            <div className="flex h-full container">
              <div className="bg-orange flex flex-col pr-20 justify-center gap-y-14 ">
                <h4>
                  L’équipe d’<span className="font-black">APEX</span> est
                  dévouée à la lutte contre les violences conjugales.
                </h4>
                <Button className="self-start" href="#team">
                  Notre Équipe
                </Button>
              </div>
              <div className=" bg-white min-w-1" />
              <div className="bg-yellow flex flex-col pl-20 items-end justify-center gap-y-14">
                <h4 className="text-right">
                  <span className="font-black">APEX</span> offre un soutien
                  essentiel aux victimes, promeut la sensibilisation et propose
                  des ressources juridiques.
                </h4>
                <Button href="#actions">Nos Actions</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow">
          <Link
            href="#donations"
            className="bg-white w-2/3 flex items-center text-center rounded-tr-3xl py-1 hover:bg-grey-light transition-all"
          >
            <h4 className="grow">Soutenir APEX</h4>
            <div className="size-9 relative mr-1 rounded-2xl">
              <Image
                className="rounded-2xl"
                alt="Arrow Down Circle"
                src={"/arrow-down-circle.png"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
