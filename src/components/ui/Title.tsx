import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface TitleProps {
  children?: ReactNode;
  className?: string;
}

const Title: FunctionComponent<TitleProps> = ({ children, className }) => {
  return (
    <div
      aria-label="title"
      className={cn("size-fit flex flex-col relative", className)}
    >
      <div className="flex gap-x-1">
        <Image
          className=" z-10"
          alt="Title Flower"
          src="/vector/title-flower.svg"
          width={24}
          height={38}
        />
        <h2 className="leading-none">{children}</h2>
      </div>
      <div className="ml-2 w-full h-[6px] rounded-md bg-flower-pattern bg-cover shadow-md" />
    </div>
  );
};

export default Title;
