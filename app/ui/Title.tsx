import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface TitleProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  bgColor?: "white" | "orange" | "blue";
}

export default function Title({
  id,
  children,
  className,
  bgColor = "white",
}: TitleProps) {
  return (
    <div
      id={id}
      className={cn("size-fit flex flex-col relative mb-6 md:mb-10", className)}
    >
      <h1
        className={cn(
          "font-amatic_sc leading-none py-3 px-6 border-2 rounded-sm",
          "before:w-6 before:h-1 before:content-[''] before:absolute before:top-0 before:left-4",
          "after:w-6 after:h-1 after:content-[''] after:absolute after:bottom-0 after:right-4",
          "border-orange-600  before:bg-white after:bg-white",
          bgColor === "orange" &&
            "border-orange-600 before:bg-orange-50 after:bg-orange-50",
          bgColor == "blue" &&
            " border-blue-400 before:bg-blue-50 after:bg-blue-50",
        )}
      >
        {children}
      </h1>
    </div>
  );
}
