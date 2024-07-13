import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./Button";

interface NavbarProps {
  className?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        className,
        "fixed w-full z-20 top-0 h-20 shadow-lg bg-white"
      )}
    >
      <div className="container h-full flex items-center justify-between">
        <div className="flex gap-x-6">
          <Link href="/" className="w-16 relative">
            <Image alt="Logo Apex" src="/vector/logo.svg" fill />
          </Link>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-xl">APEX</span>
            <span className="font-light text-[22px]">04 68 63 50 24</span>
          </div>
        </div>
        <Button
          className="self-start"
          variant="nav"
          size="nav"
          href="/formation"
        >
          Soutenir <b>APEX</b>
        </Button>
        <div className="flex gap-x-4">
          <Image
            className="mt-[2px]"
            alt="search"
            src="/vector/search.svg"
            width={24}
            height={24}
          />
          <Image alt="admin" src="/vector/admin.svg" width={24} height={24} />
          <Image alt="menu" src="/vector/menu.svg" width={24} height={24} />
        </div>
      </div>
      <Link
        href="https://www.google.com/"
        className="absolute h-14 w-14 flex flex-col justify-end gap-y-1 items-center bg-red top-6 right-0"
      >
        <Image alt="Quitter" src="/vector/cross.svg" width={16} height={16} />
        <span className="text-white text-[13px] mb-1">Quitter</span>
      </Link>
    </nav>
  );
};

export default Navbar;
