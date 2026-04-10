import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@/app/ui/Button";
import Menu from "@/app/ui/Menu";
import { cn } from "@/app/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <>
      <nav
        className={cn(
          className,
          "fixed w-full z-20 top-0 h-[80px] shadow-md bg-white",
        )}
      >
        <div className="container h-full flex items-center justify-between">
          <div className="flex gap-x-2 xl:gap-x-4">
            <Link href="/" className="w-16 relative">
              <Image alt="Logo Apex" src="/vector/logo.svg" fill />
            </Link>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-xl">APEX</span>
              <span className="font-light text-lg xl:text-[22px]">
                04 68 63 50 24
              </span>
            </div>
          </div>
          <Button
            className="self-start hidden md:block"
            variant="nav"
            size="nav"
            href="/formation"
          >
            Soutenir <b>APEX</b>
          </Button>
          <div className="hidden w-[30px] h-[30px] md:block xl:hidden" />
          <Menu />
        </div>
        <Link
          href="https://www.google.com/"
          className="absolute h-[56px] w-[56px] flex flex-col justify-center items-center bg-red top-[0px] xl:top-[24px] right-0 rounded-sm"
        >
          <RxCross2 size={30} color="white" />
          <span className="text-white text-[13px] md:leading-tight">
            Quitter
          </span>
        </Link>
      </nav>
      <div className="h-[80px]" />
    </>
  );
};

export default Navbar;
