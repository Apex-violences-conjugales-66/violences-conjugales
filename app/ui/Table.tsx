"use client";

import {
  Book,
  DocumentResource,
  Formation,
  Movie,
  Memoir,
  Partner,
  Member,
  BlobUrl,
} from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import {
  AddButton,
  DeleteButton,
  EditButton,
} from "@/app/ui/admin/ActionButtons";

const BLOB_URL_KEYS = new Set<BlobUrl>([
  "imageUrl",
  "catalogueUrl",
  "bulletinUrl",
  "documentUrl",
]);

interface TableProps {
  name: string;
  editable?: boolean;
  data?:
    | Book[]
    | Movie[]
    | DocumentResource[]
    | Formation[]
    | Memoir[]
    | Partner[]
    | Member[];
}

export default function Table({ name, data, editable = true }: TableProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between ">
        <h2>{name}</h2>
        <AddButton entry={name.toLowerCase()} />
      </div>
      {data && (
        <div className="bg-slate-100 px-2 pb-2 rounded-md ">
          <table className="table-fixed rounded-md border-slate-500 w-full">
            <thead>
              <tr>
                {Object.keys(data[0]).map(
                  (key) =>
                    key !== "id" && (
                      <th
                        scope="col"
                        key={key}
                        className={cn(
                          "px-3 py-5 font-medium text-left first:pl-6",
                        )}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </th>
                    ),
                )}
                {editable && (
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {Object.entries(item).map(
                    ([key, value], i) =>
                      i !== 0 && (
                        <td
                          key={i}
                          className={cn("p-3 first:pl-6 max-w-0 truncate")}
                        >
                          {value}
                        </td>
                      ),
                  )}
                  {editable && (
                    <td className="relative py-3 pl-6 pr-3 flex justify-end">
                      <div className="flex gap-2">
                        <EditButton id={item.id} entry={name.toLowerCase()} />
                        <DeleteButton
                          table={name.toLowerCase()}
                          id={item.id}
                          blobUrl={
                            Object.entries(item).find(([key]) =>
                              BLOB_URL_KEYS.has(key as BlobUrl),
                            )?.[1] as string | undefined
                          }
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
