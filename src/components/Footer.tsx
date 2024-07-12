import { FunctionComponent } from "react";
import Image from "next/image";
interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-purple">
      <div className="container flex justify-between">
        <div className="flex flex-col items-center">
          <div className="flex gap-x-4">
            <div className="relative w-16 h-20">
              <Image alt="Ruban Violet" src={"/ruban_violet.svg"} fill />
            </div>
            <div className="flex flex-col justify-center">
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
        <div className="flex flex-col">
          <h3>Effacer les traces de votre passage</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
