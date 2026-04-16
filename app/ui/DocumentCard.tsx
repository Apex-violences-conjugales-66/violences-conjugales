"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

export default function DocumentCard({
  id,
  name,
  documentUrl,
  onClick,
}: {
  id: number;
  name: string;
  documentUrl: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="relative w-72 h-80 shadow-sm">
      <Image
        className="hover:opacity-50 hover:cursor-pointer"
        alt={name}
        src={documentUrl}
        style={{ objectFit: "cover" }}
        fill
        sizes="288px, 320px"
      />
    </button>
  );
}
