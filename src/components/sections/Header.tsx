import Image from "next/image";
import { FunctionComponent } from "react";
import { cn } from "../../lib/utils";
import Separator from "../ui/Separator";

interface HeaderProps {
  title?: string;
  reverse?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ title, reverse }) => {
  return (
    <>
      <div
        className={cn(
          "Header flex justify-center",
          reverse ? "bg-yellow" : "bg-orange"
        )}
      >
        <div
          className={cn(
            "flex h-[450px] max-w-[1440px] w-full bg-white px-1",
            reverse && "flex-row-reverse"
          )}
        >
          <div className="w-2/3 relative">
            <Image
              alt="Header Art"
              src={"/header_art.jpg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className={cn(
              "w-1/3 flex items-center justify-center px-5",
              reverse ? "bg-orange mr-1" : "bg-yellow ml-1"
            )}
          >
            <h1 className="text-center">{title}</h1>
          </div>
        </div>
      </div>
      <Separator rotate />
    </>
  );
};

export default Header;
