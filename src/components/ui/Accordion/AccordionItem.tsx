"use client";

import React, { FunctionComponent, ReactNode, useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";
import { cn } from "../../../../lib/utils";

interface AccordionItemProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  className,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("border rounded-md mb-3", className)}>
      <button
        className={cn(
          "w-full relative text-left py-4 transition-all px-6",
          "hover:bg-grey-light hover:rounded-t-sm"
        )}
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          {isOpen ? <GoDash size={20} /> : <GoPlus size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className={cn("py-4 px-6 rounded-md transition")}>{children}</div>
      )}
    </div>
  );
};

export default AccordionItem;
