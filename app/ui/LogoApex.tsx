import Image from "next/image";

export default function LogoApex({
  width = 64,
  height = 64,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src="/vector/logo.svg"
      alt="Logo Apex"
      width={width}
      height={height}
      className={className}
    />
  );
}
