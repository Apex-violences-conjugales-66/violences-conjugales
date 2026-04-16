import { cn } from "@/app/lib/utils";
import { FunctionComponent, ReactNode } from "react";

interface TitleProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: "default" | "lightOrange" | "orange" | "blue";
}

const Title: FunctionComponent<TitleProps> = ({
  id,
  children,
  className,
  style = "default",
}) => {
  return (
    <div id={id} className={cn("size-fit flex flex-col relative", className)}>
      <h1
        className={cn(
          "font-amatic_sc leading-none py-3 px-6 border-2 rounded-sm",
          "before:w-6 before:h-1 before:content-[''] before:absolute before:top-0 before:left-4",
          "after:w-6 after:h-1 after:content-[''] after:absolute after:bottom-0 after:right-4",
          style == "default" &&
            "border-orange-400 before:bg-white after:bg-white",
          style == "lightOrange" &&
            "border-orange-400 before:bg-orange-50 after:bg-orange-50",
          style == "orange" && "border-white before:bg-orange after:bg-orange",
          style == "blue" && "border-white before:bg-blue-50 after:bg-blue-50",
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;
