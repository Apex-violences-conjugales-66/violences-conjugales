import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { FunctionComponent } from "react";

interface MemoirCardProps {
  className?: string;
  author: string;
  title: string;
  description?: string;
  docPath?: string;
}

const MemoirCard: FunctionComponent<MemoirCardProps> = ({
  className,
  author,
  title,
  description,
  docPath,
}) => {
  return (
    <div
      className={cn(
        "border border-orange p-6 w-80 flex flex-col h-fit gap-y-2",
        className,
      )}
    >
      <div>
        <span className="text-lg sm:text-xl font-bold">Auteur : </span>
        {author}
      </div>
      <div>
        <span className="text-lg sm:text-xl font-bold">Titre : </span>
        {docPath ? (
          <a className="underline" href={docPath} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      {description && (
        <div>
          <span className="text-lg sm:text-xl font-bold">Description : </span>
          {description}
        </div>
      )}
    </div>
  );
};

export default MemoirCard;
