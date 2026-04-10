import { cn } from "@/app/lib/utils";
import { FunctionComponent } from "react";

interface DividerProps {
  className?: string;
  visible?: boolean;
  horizontal?: boolean;
  dark?: boolean;
}

const Divider: FunctionComponent<DividerProps> = ({
  className,
  visible = false,
  horizontal = false,
  dark = true,
}) => {
  return (
    <div
      className={cn(
        visible ? "block" : "hidden md:block",
        horizontal ? "h-[1px]" : "w-[1px]",
        dark ? "bg-grey" : "bg-white",
        "rounded-md",
        className,
      )}
    />
  );
};

export default Divider;
