import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

interface QuotationProps {
  children: ReactNode;
  author?: string;
  label?: string;
  className?: string;
}

export default function Quotation({
  children,
  author,
  label,
  className,
}: QuotationProps) {
  return (
    <div className="flex flex-col items-end">
      <div
        className={cn(
          "flex w-fit font-amatic_sc font-bold text-xl md:text-4xl text-center relative",
          className,
        )}
      >
        <Image
          src="/vector/quote.svg"
          alt="quotation mark"
          width={51}
          height={45}
          className={cn(
            "absolute -top-1 -left-4 w-6",
            "md:w-12 md:-top-4 md:-left-10",
          )}
        />
        {children}
        <Image
          src="/vector/quote.svg"
          alt="quotation mark"
          width={51}
          height={45}
          className={cn(
            "absolute -bottom-1 right-8 w-6 -scale-100",
            "md:w-12 md:-bottom-4 md:right-12",
          )}
        />
      </div>
      {author && <p className="mt-6 font-extralight text-xl">{author}</p>}
      {label && <p className="font-thin text-end text-sm">{label}</p>}
    </div>
  );
}
