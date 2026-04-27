import Image from "next/image";

export default function LogoApex({
  size = 64,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/vector/logo.svg"
      alt="Logo Apex"
      width={size}
      height={size}
      style={{ height: "auto" }}
      className={className}
    />
  );
}
