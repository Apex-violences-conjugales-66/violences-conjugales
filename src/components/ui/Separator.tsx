import Image from "next/image";
import { FunctionComponent } from "react";
import { cn } from "../../../lib/utils";

interface SeparatorProps {
  className?: string;
  variant?: boolean;
  rotate?: boolean;
}

const Separator: FunctionComponent<SeparatorProps> = ({
  className,
  variant = false,
  rotate = false,
}) => {
  return (
    <div
      className={cn(
        "Separator relative w-full",
        variant ? "h-[376px]" : "h-[295px]",
        rotate ? "rotate-180 mt-1" : "mb-1"
      )}
    >
      <Image
        alt="illustration"
        src={
          variant
            ? "/vector/separator-pattern2-1920.svg"
            : "/vector/separator-pattern1-1920.svg"
        }
        quality={100}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Separator;
