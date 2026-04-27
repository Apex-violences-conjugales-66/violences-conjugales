import { cn } from "@/app/lib/utils";
import Divider from "@/app/ui/Divider";
import { Mail, Map, Phone } from "lucide-react";

interface ContactInfoProps {
  className?: string;
  horaires?: string;
  phone?: string;
  email?: string;
  address1?: string;
  address2?: string;
  address3?: string;
}

export default function ContactInfo({
  className,
  phone,
  email,
  horaires,
  address1,
  address2,
  address3,
}: ContactInfoProps) {
  return (
    <div
      className={cn(
        "p-2 rounded-sm border border-gray-800 size-fit shrink-0 bg-white space-y-1",
        className,
      )}
    >
      {horaires && <p className="whitespace-pre-line">{horaires}</p>}
      {phone && (
        <div className="flex items-center gap-x-2">
          <Phone fill="#1f2937" size={24} /> <span className="">{phone}</span>
        </div>
      )}
      {email && (
        <div className="flex items-center gap-x-2">
          <Mail size={24} />
          <span className="-mt-1">{email}</span>
        </div>
      )}
      {address1 && (
        <>
          <Divider horizontal className="my-1" />
          <div className="flex gap-x-2">
            <Map size={24} />
            <div className="flex flex-col items-start">
              {address1}
              {address2 && <span>{address2}</span>}
              {address3 && <span>{address3}</span>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
