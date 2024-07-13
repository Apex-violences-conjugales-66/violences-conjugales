import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface DonationCardProps {
  title: string;
  imageUrl: string;
  url?: string;
}

const DonationCard: FunctionComponent<DonationCardProps> = ({
  title,
  imageUrl,
  url,
}) => {
  return url ? (
    <Link
      href={url}
      className="bg-white rounded-[40px] flex flex-col justify-center items-center gap-y-8 px-6 h-64 border-1"
    >
      <p>{title}</p>
      <div className="h-16 w-52 relative">
        <Image alt={title} src={imageUrl} fill />
      </div>
    </Link>
  ) : (
    <div className="bg-white rounded-[40px] flex flex-col justify-center items-center gap-y-8 px-6 h-64 border border-grey">
      <p>{title}</p>
      <div className="h-16 w-52 relative">
        <Image alt={title} src={imageUrl} fill objectFit="contain" />
      </div>
    </div>
  );
};

export default DonationCard;
