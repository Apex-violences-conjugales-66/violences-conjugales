import { DocumentResource } from "@/app/lib/definitions";
import { DownloadIcon, ExternalLinkIcon, XIcon } from "lucide-react";

export default function DocumentPanel({
  doc,
  onClose,
}: {
  doc: DocumentResource;
  onClose: () => void;
}) {
  return (
    <div className="hidden md:flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b gap-2">
        <p className="font-bold font-amatic_sc truncate text-2xl">{doc.name}</p>
        <div className="flex gap-2 shrink-0">
          <a
            href={doc.documentUrl}
            download
            className="flex items-center gap-1 text-sm border px-2 py-1 rounded hover:bg-gray-100"
          >
            <DownloadIcon className="w-4 h-4" />
          </a>
          <a
            href={doc.documentUrl}
            className="flex items-center gap-1 text-sm border px-2 py-1 rounded hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(doc.documentUrl)}&embedded=true`}
        className="flex-1 w-full min-h-[600px]"
      />
    </div>
  );
}
