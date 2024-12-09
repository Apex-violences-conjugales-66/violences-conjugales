"use client";

import { Squircle } from "corner-smoothing";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface DonationCardProps {
  className?: string;
  children?: ReactNode;
}

const DonationCard: FunctionComponent<DonationCardProps> = ({
  className,
  children,
}) => {
  return (
    <Squircle
      cornerRadius={50}
      as="button"
      className={cn(
        className,
        "flex flex-col items-center justify-center bg-white size-[200px] xl:size-[240px] px-6 font-bold hover:bg-blue-hover transition"
      )}
    >
      {children}
    </Squircle>
  );
};

export default DonationCard;
