import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface TitleProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: "default" | "orange" | "blue";
}

const Title: FunctionComponent<TitleProps> = ({
  id,
  children,
  className,
  style = "default",
}) => {
  return (
    <div id={id} className={cn("size-fit flex flex-col relative", className)}>
      <h2
        className={cn(
          "leading-none py-3 px-6 border-2 rounded-sm",
          "before:w-6 before:h-1 before:content-[''] before:absolute before:top-0 before:left-2",
          "after:w-6 after:h-1 after:content-[''] after:absolute after:bottom-0 after:right-2",
          "hover:before:translate-x-[200%] hover:after:-translate-x-[200%] before:transition after:transition",
          style == "default" && "border-orange before:bg-white after:bg-white",
          style == "orange" && "border-white before:bg-orange after:bg-orange",
          style == "blue" && "border-white before:bg-blue after:bg-blue"
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
