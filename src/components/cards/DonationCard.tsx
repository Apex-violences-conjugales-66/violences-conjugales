"use client";

import { Squircle } from "corner-smoothing";
import { FunctionComponent, ReactNode } from "react";
import { SmoothCorners, SmoothCornersWrapper } from "react-smooth-corners";
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
    <SmoothCornersWrapper corners="4" shadow="0px 0px 3px grey">
      <SmoothCorners
        corners="6"
        as="button"
        className={cn(
          className,
          "bg-white flex flex-col justify-center items-center px-6 size-60 font-bold hover:bg-blue-hover transition"
        )}
      >
        {children}
      </SmoothCorners>
    </SmoothCornersWrapper>
  );
};

export default DonationCard;
