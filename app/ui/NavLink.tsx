import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";

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
        "px-4 py-2 rounded-[4px] hover:bg-orange-light",
        isActive && "text-orange bg-orange-light",
        className,
      )}
      href={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
