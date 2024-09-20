import React, { FunctionComponent } from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { cn } from "../../../lib/utils";
import Divider from "./Divider";

interface ContactInfoProps {
  className?: string;
  horaires?: string;
  phone?: string;
  email?: string;
  address1?: string;
  address2?: string;
  address3?: string;
}

const ContactInfo: FunctionComponent<ContactInfoProps> = ({
  className,
  phone,
  email,
  horaires,
  address1,
  address2,
  address3,
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
      {address1 && (
        <>
          <Divider horizontal className="my-1" />
          <div className="flex gap-x-2">
            <FaLocationDot size={24} />
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
};

export default ContactInfo;
