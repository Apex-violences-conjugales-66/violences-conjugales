import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface NavLinkProps {
  className?: string;
  to: string;
  children?: ReactNode;
}

const NavLink: FunctionComponent<NavLinkProps> = ({
  children,
  className,
  to,
}) => {
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <Link
      className={cn(
        "hover:underline underline-offset-4 xl:text-[19px]",
        isActive && "text-orange underline",
        className
      )}
      href={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
