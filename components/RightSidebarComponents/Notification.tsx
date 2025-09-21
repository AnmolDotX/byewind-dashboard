import React from "react";
import { NotificationType } from "@/components/RightSidebar";

const Notification = ({ id, title, time, Icon }: NotificationType) => {
  return (
    <div key={id} className="flex flex-nowrap gap-2">
      <div className="p-1 mt-1 rounded-md aspect-square text-black bg-[#E3F5FF] h-fit">
        <Icon className="w-[17px] h-[17px]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-ellipsis text-gray-800 dark:text-white text-sm text-nowrap">
          {title}
        </p>
        <p className="text-xs text-gray-400 text-nowrap">{time}</p>
      </div>
    </div>
  );
};

export default Notification;
