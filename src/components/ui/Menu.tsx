"use client";

import { FunctionComponent, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "../../lib/utils";
import NavLink from "./NavLink";
import navigationData from "@/data/navigationData";

interface MenuProps {
  className?: string;
}

const Menu: FunctionComponent<MenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("mr-8 xl:mr-0", className)}>
      <div className="hidden xl:flex xl:gap-x-1 items-center">
        {navigationData.map((navigationItem, index) => (
          <NavLink key={index} to={navigationItem.path}>
            {navigationItem.label}
          </NavLink>
        ))}
      </div>
      <button className="xl:hidden" onClick={toggleOpen}>
        <RxHamburgerMenu size={30} />
        {isOpen && (
          <div>
            {navigationData.map((navigationItem, index) => (
              <NavLink key={index} to={navigationItem.path}>
                {navigationItem.label}
              </NavLink>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default Menu;
