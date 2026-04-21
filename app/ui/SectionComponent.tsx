import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface SectionComponentProps {
  children: ReactNode;
  className?: string;
  isFirst?: Boolean;
  isLast?: Boolean;
  withSideBorders?: Boolean;
  bgColor?: "blue" | "orange" | "light";
}

export default function SectionComponent({
  children,
  className,
  isFirst = false,
  isLast = false,
  withSideBorders = false,
  bgColor,
}: SectionComponentProps) {
  return withSideBorders ? (
    <section
      className={cn(
        "pt-12 md:pt-20",
        isFirst &&
          "pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-4 md:mt-14",
        isLast && "pb-4 md:pb-14",
        className,
      )}
    >
      <div
        className={cn(
          "w-full",
          bgColor === "blue" && "bg-blue-50",
          bgColor === "orange" && "bg-orange-50",
          bgColor === "light" && "bg-[#fffaf7]",
        )}
      >
        <div className="container flex">
          <div className="bg-white w-1" />
          <div className="flex-1">{children}</div>
          <div className="bg-white w-1" />
        </div>
      </div>
    </section>
  ) : (
    <section
      className={cn(
        "pt-12 md:pt-20",
        isFirst &&
          "pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-4 md:mt-14",
        isLast && "pb-4 md:pb-14",
        className,
      )}
    >
      <div
        className={cn(
          bgColor === "blue" && "bg-blue-50",
          bgColor === "orange" && "bg-orange-50",
        )}
      >
        {children}
      </div>
    </section>
  );
}
