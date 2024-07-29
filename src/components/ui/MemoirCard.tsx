import { FunctionComponent } from "react";
import { cn } from "../../../lib/utils";

interface MemoirCardProps {
  className?: string;
  author: string;
  title: string;
  description: string;
}

const MemoirCard: FunctionComponent<MemoirCardProps> = ({
  className,
  author,
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "border border-orange p-6 w-80 flex flex-col h-fit gap-y-2",
        className
      )}
    >
      <div>
        <span className="text-lg sm:text-xl font-bold">Auteur : </span>
        {author}
      </div>
      <div>
        <span className="text-lg sm:text-xl font-bold">Titre : </span>
        {title}
      </div>
      <div>
        <span className="text-lg sm:text-xl font-bold">Description : </span>
        {description}
      </div>
    </div>
  );
};

export default MemoirCard;
