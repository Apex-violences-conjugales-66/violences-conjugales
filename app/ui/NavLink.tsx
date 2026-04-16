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
        "font-amatic_sc font-bold text-lg sm:text-2xl px-4 py-2 rounded-[4px] hover:bg-orange-100 transition-all duration-300",
        isActive && "text-orange-400 bg-orange-100 translate-y-[-8px]",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
