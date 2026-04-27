"use client";

import {
  Book,
  DocumentResource,
  Formation,
  Movie,
  Memoir,
  Partner,
  Member,
} from "@/app/lib/definitions";
import {
  AddButton,
  DeleteButton,
  EditButton,
} from "@/app/ui/admin/ActionButtons";

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
          <table className="table rounded-md border-slate-500 w-full">
            <thead>
              <tr>
                {Object.keys(data[0]).map(
                  (key) =>
                    key !== "id" && (
                      <th
                        key={key}
                        className="px-3 py-5 font-medium text-left first:pl-6"
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
                  {Object.values(item).map(
                    (value, i) =>
                      i !== 0 && (
                        <td key={i} className="p-3 first:pl-6">
                          {value}
                        </td>
                      ),
                  )}
                  {editable && (
                    <td className="relative py-3 pl-6 pr-3 flex justify-end">
                      <div className="flex gap-2">
                        <EditButton id={item.id} entry={name.toLowerCase()} />
                        <DeleteButton table={name.toLowerCase()} id={item.id} />
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
