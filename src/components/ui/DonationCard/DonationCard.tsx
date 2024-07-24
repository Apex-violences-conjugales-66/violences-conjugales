"use client";

import { Squircle } from "corner-smoothing";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../../lib/utils";

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
        "bg-white flex flex-col justify-center items-center px-6 size-60 font-bold hover:bg-blue-hover transition"
      )}
    >
      {children}
    </Squircle>
  );
};

export default DonationCard;
