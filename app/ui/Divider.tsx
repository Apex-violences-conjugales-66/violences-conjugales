import { cn } from "@/app/lib/utils";
import { FunctionComponent } from "react";

interface DividerProps {
  className?: string;
  visibleMd?: boolean;
  visibleLg?: boolean;
  hiddenLg?: boolean;
  horizontal?: boolean;
  light?: boolean;
}

const Divider: FunctionComponent<DividerProps> = ({
  className,
  horizontal = false,
  visibleMd = false,
  visibleLg = false,
  hiddenLg = false,
  light = false,
}) => {
  return (
    <div
      className={cn(
        "block w-full",
        visibleMd && "hidden md:block",
        visibleLg && "hidden lg:block",
        hiddenLg && "lg:hidden",
        horizontal ? "h-px" : "w-px",
        light ? "bg-white" : "bg-gray-800",
        "rounded-md",
        className,
      )}
    />
  );
};

export default Divider;
