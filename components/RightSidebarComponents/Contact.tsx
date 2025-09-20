import React from "react";
import { ContactType } from "@/components/RightSidebar";
import Image from "next/image";

const Contact = ({ contact }: { contact: ContactType }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={contact?.profilePic}
        alt="profile picture"
        className="h-6 w-6"
      />
      <p className="text-gray-800 text-sm text-nowrap">{contact?.name}</p>
    </div>
  );
};

export default Contact;
