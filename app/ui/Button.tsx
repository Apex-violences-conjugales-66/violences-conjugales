import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "homeheader";
  size?: "default" | "sm";
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "default",
  size = "default",
  href,
  className,
  children,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const classes = cn(
    "flex items-center gap-4 font-amatic_sc font-bold transition-colors",
    {
      "bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-600 border-2 border-orange-600":
        variant === "default",
    },
    {
      "text-xl md:text-3xl tracking-wide": size === "default",
    },
    className,
  );

  const content = (
    <>
      {iconPosition === "left" && icon}
      <span className="mb-1">{children}</span>
      {iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
