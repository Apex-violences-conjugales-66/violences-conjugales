"use client";

import { cn } from "@/app/lib/utils";
import Button from "@/app/ui/Button";
import Heart from "@/app/ui/icons/Heart";
import { useEffect, useRef, useState } from "react";

export default function StickyDonationButton() {
  const [hidden, setHidden] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Button
      icon={<Heart className="w-8 h-8" />}
      href="/donate"
      className={cn(
        "fixed bottom-8 right-8 z-50 gap-0 rounded-full px-3 md:gap-3 md:px-4 md:py-3 transition-all duration-300",
        "hover:bg-white",
        hidden ? "right-0 translate-x-full" : "translate-x-0",
      )}
    >
      <span className="hidden md:block">Nous soutenir</span>
    </Button>
  );
}
