"use client";

import { cn } from "@/app/lib/utils";
import { Minus, Plus } from "lucide-react";
import { FunctionComponent, ReactNode, useState } from "react";

interface AccordionItemProps {
  className?: string;
  title: string;
  children: ReactNode;
  color: "orange" | "blue" | "yellow" | "purple" | "pink";
  open?: boolean;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  className,
  title,
  children,
  color = "orange",
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const wrapperColorVariants = {
    orange: "bg-orange-100 border-orange-600",
    blue: "bg-blue-100 border-blue-400",
    yellow: "bg-yellow-100 border-yellow-400",
    purple: "bg-purple-100 border-purple-400",
    pink: "bg-pink-100 border-pink-400",
  };
  const bgColorVariants = {
    orange: "bg-orange-600 text-white",
    blue: "bg-blue-400 text-white",
    yellow: "bg-yellow-400 text-white",
    purple: "bg-purple-400 text-white",
    pink: "bg-pink-400 text-white",
  };
  const hoverBgColorVariants = {
    orange: "hover:bg-orange-600 hover:text-white",
    blue: "hover:bg-blue-400 hover:text-white",
    yellow: "hover:bg-yellow-400 hover:text-white",
    purple: "hover:bg-purple-400 hover:text-white",
    pink: "hover:bg-pink-400 hover:text-white",
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
          "w-full relative text-left py-4 px-6 transition-colors duration-500",
          `${hoverBgColorVariants[color]}`,
          isOpen && `${bgColorVariants[color]}`,
        )}
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      {isOpen && <div className={cn("py-4 px-6 rounded-md")}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
