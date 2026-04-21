import Image from "next/image";

export default function Separator() {
  return (
    <Image
      alt="illustration"
      src="/separator.png"
      width={3500}
      height={350}
      className="min-h-[120px] object-cover"
    />
  );
}
