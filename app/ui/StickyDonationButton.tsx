import Button from "@/app/ui/Button";
import Image from "next/image";

export default function StickyDonationButton() {
  return (
    <Button
      icon={
        <Image
          src="/vector/heart.svg"
          alt="Heart"
          width={32}
          height={32}
          className="mt-1 md:mt-0"
        />
      }
      href="/donate"
      className="fixed bottom-8 right-8 z-50 gap-0 rounded-full px-3 md:gap-3 md:px-4 md:py-3"
    >
      <span className="hidden md:block">Nous soutenir</span>
    </Button>
  );
}
