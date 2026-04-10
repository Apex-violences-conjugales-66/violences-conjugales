"use client";

import { cn } from "@/app/lib/utils";
import { FunctionComponent, ReactNode, useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

interface AccordionItemProps {
  className?: string;
  title: string;
  children: ReactNode;
  color: "orange" | "blue" | "yellow" | "purple" | "pink";
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  className,
  title,
  children,
  color = "orange",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const wrapperColorVariants = {
    orange: "bg-orange-light border-orange",
    blue: "bg-blue-light border-blue",
    yellow: "bg-yellow-light border-yellow",
    purple: "bg-purple-light border-purple",
    pink: "bg-pink-light border-pink",
  };
  const bgColorVariants = {
    orange: "bg-orange",
    blue: "bg-blue",
    yellow: "bg-yellow",
    purple: "bg-purple",
    pink: "bg-pink",
  };
  const hoverBgColorVariants = {
    orange: "hover:bg-orange",
    blue: "hover:bg-blue",
    yellow: "hover:bg-yellow",
    purple: "hover:bg-purple",
    pink: "hover:bg-pink",
  };

  return (
    <div
      className={cn(
        "border rounded-md mb-3",
        `${wrapperColorVariants[color]}`,
        className,
      )}
    >
      <button
        className={cn(
          "w-full relative text-left py-4 hover:transition px-6",
          `${hoverBgColorVariants[color]}`,
          isOpen && `${bgColorVariants[color]}`,
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
