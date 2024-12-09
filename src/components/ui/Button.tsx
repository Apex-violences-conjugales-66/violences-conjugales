import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps, FunctionComponent } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "items-center rounded-xl justify-center text-base lg:text-xl font-bold transition-all",
  {
    variants: {
      variant: {
        default: "bg-white border-b-4 border-grey hover:bg-grey-light",
        orange: "bg-orange border-b-4 border-yellow hover:bg-yellow",
        nav: "bg-orange border-b-4 rounded-none rounded-b-xl border-yellow font-normal hover:bg-yellow",
      },
      size: {
        default: "py-2 px-10",
        nav: "py-1 px-12 xl:px-24",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
