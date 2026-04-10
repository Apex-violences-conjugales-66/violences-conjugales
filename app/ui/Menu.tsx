"use client";

import navigationData from "@/app/data/navigationData";
import { cn } from "@/app/lib/utils";
import NavLink from "@/app/ui/NavLink";
import { FunctionComponent, useState } from "react";
import { RxCross1, RxCross2, RxHamburgerMenu } from "react-icons/rx";

interface MenuProps {
  className?: string;
}

const Menu: FunctionComponent<MenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "mr-8 xl:mr-0 md:absolute md:right-[56px] xl:static",
        className,
      )}
    >
      <div className="hidden xl:flex xl:gap-x-1 items-center">
        {navigationData.map((navigationItem, index) => (
          <NavLink key={index} to={navigationItem.path}>
            {navigationItem.label}
          </NavLink>
        ))}
      </div>
      <button className="xl:hidden" onClick={toggleOpen}>
        {!isOpen && <RxHamburgerMenu size={30} />}
      </button>
      {isOpen && (
        <div className="absolute flex-col gap-y-2 top-[80px] right-[0px] w-max md:right-[-88px] md:top-[52px] flex md:flex-row bg-white md:gap-x-1 p-[16px] shadow-md xl:hidden rounded-bl-sm">
          {navigationData.map((navigationItem, index) => (
            <NavLink key={index} to={navigationItem.path}>
              {navigationItem.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
