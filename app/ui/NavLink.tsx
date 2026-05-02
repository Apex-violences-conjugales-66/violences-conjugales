import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";

interface NavLinkProps {
  className?: string;
  href: string;
  children?: ReactNode;
}

const NavLink: FunctionComponent<NavLinkProps> = ({
  children,
  className,
  href,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={cn(
        "font-amatic_sc font-bold sm:text-xl md:text-2xl px-2 sm:px-4 py-2 rounded-[4px] hover:bg-orange-600 hover:text-white transition-colors",
        isActive && "text-white bg-orange-600",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
