import { cn } from "@/app/lib/utils";
import React, { ReactNode } from "react";

interface AccordionProps {
  className?: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ className, children }) => {
  return <div className={cn("accordion w-full", className)}>{children}</div>;
};

export default Accordion;
