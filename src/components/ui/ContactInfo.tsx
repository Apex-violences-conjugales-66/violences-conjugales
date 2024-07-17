import React, { FunctionComponent } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { cn } from "../../../lib/utils";

interface ContactInfoProps {
  className?: string;
  horaires?: string;
  phone?: string;
  email?: string;
}

const ContactInfo: FunctionComponent<ContactInfoProps> = ({
  className,
  phone,
  email,
  horaires,
}) => {
  return (
    <div
      className={cn("p-2 rounded-sm border border-grey size-fit", className)}
    >
      {horaires && <p className="whitespace-pre-line">{horaires}</p>}
      {phone && (
        <div className="flex items-center gap-x-2">
          <MdLocalPhone size={24} /> <span className="">{phone}</span>
        </div>
      )}
      {email && (
        <div className="flex items-center gap-x-2">
          <MdEmail size={24} />
          <span className="-mt-1">{email}</span>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
