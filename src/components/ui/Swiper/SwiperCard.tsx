import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../../lib/utils";

interface SwiperCardProps {
  className?: string;
  children: ReactNode;
}

const SwiperCard: FunctionComponent<SwiperCardProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "h-full flex flex-col items-center gap-y-2 px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SwiperCard;
