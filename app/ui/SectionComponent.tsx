import { cn } from "@/app/lib/utils";
import { Children, ReactNode } from "react";

interface SectionComponentProps {
  children: ReactNode;
  className?: string;
  isFirst?: Boolean;
  withSideBorders?: Boolean;
  bgColor?: "blue" | "orange";
}

export default function SectionComponent({
  children,
  className,
  isFirst = false,
  withSideBorders = false,
  bgColor = "blue",
}: SectionComponentProps) {
  return withSideBorders ? (
    <section
      className={cn(
        "py-20 md:py-40",
        isFirst &&
          "pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-14",
        className,
      )}
    >
      <div
        className={cn(
          "flex justify-center",
          bgColor === "blue" && "bg-blue-50",
          bgColor === "orange" && "bg-orange-50",
        )}
      >
        <div className="bg-white min-w-1 min-h-1" />
        <div>{children}</div>
        <div className="bg-white min-w-1 min-h-1" />
      </div>
    </section>
  ) : (
    <section
      className={cn(
        "py-20 md:py-40",
        isFirst &&
          "pt-[var(--navbar-height)] lg:pt-[var(--navbar-height-lg)] mt-14",
        className,
      )}
    >
      {children}
    </section>
  );
}
