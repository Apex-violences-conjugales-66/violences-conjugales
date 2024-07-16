import { FunctionComponent } from "react";
import { cn } from "../../../lib/utils";

interface DividerProps {
  visible?: boolean;
  horizontal?: boolean;
  dark?: boolean;
}

const Divider: FunctionComponent<DividerProps> = ({
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
        "rounded-md"
      )}
    />
  );
};

export default Divider;
