import Link from "next/link";
import { ComponentProps, FunctionComponent } from "react";
import { cn } from "../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("items-center rounded-b-xl justify-center text-xl", {
  variants: {
    variant: {
      default: "border-b-4 border-grey",
      nav: "bg-orange border-b-4 border-yellow",
    },
    size: {
      default: "py-2 px-10",
      nav: "py-1 px-24",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  href,
  variant,
  size,
  ...props
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
