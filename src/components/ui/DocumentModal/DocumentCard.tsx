"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

interface DocumentCardProps {
  id: number;
  title: string;
  imagePath: string;
  onClick: () => void;
}

const DocumentCard: FunctionComponent<DocumentCardProps> = ({
  id,
  title,
  imagePath,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="relative w-72 h-80 shadow-sm">
      <Image
        className="hover:opacity-50 hover:cursor-pointer"
        alt={title}
        src={imagePath}
        style={{ objectFit: "cover" }}
        fill
        sizes="288px, 320px"
      />
    </button>
  );
};

export default DocumentCard;
