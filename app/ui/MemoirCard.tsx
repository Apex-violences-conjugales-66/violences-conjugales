import { Memoir } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";

export default function MemoirCard(
  { author, title, description, documentUrl }: Memoir,
  className?: string,
) {
  return (
    <div
      className={cn(
        "border border-orange p-4 flex flex-col h-fit gap-y-2 rounded-sm",
        className,
      )}
    >
      <div>
        <span className="text-lg font-bold">Auteur </span>: 
        {author}
      </div>
      <div>
        <span className="text-lg font-bold">Titre </span>: 
        {documentUrl ? (
          <a className="underline" href={documentUrl} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      {description && (
        <div>
          <span className="text-lg font-bold">Description </span>: 
          {description}
        </div>
      )}
    </div>
  );
}
