import React, { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  className?: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ className, children }) => {
  return <div className={cn("accordion w-full", className)}>{children}</div>;
};

export default Accordion;
