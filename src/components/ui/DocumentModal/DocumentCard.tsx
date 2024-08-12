"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";

interface DocumentCardProps {
  id: number;
  title: string;
  imagePath: string;
}

const DocumentCard: FunctionComponent<DocumentCardProps> = ({
  id,
  title,
  imagePath,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/ressources/${id}?show=true`);
  };

  return (
    <div className="relative w-72 h-80 shadow-sm">
      <Image
        className="hover:opacity-50 hover:cursor-pointer transition"
        alt={title}
        src={imagePath}
        style={{ objectFit: "cover" }}
        fill
        onClick={handleClick}
      />
    </div>
  );
};

export default DocumentCard;
