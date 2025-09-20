import React from "react";
import { ActivityType } from "@/components/RightSidebar";
import Image from "next/image";

const Activity = ({
  activity,
  isLast,
}: {
  activity: ActivityType;
  isLast: boolean;
}) => {
  return (
    <div key={activity?.id} className="flex flex-nowrap gap-1">
      <div className="p-1 rounded-md aspect-square h-fit relative">
        <Image
          src={activity?.profilePic}
          alt="profile picture"
          className="w-[20px] h-[20px]"
        />
        {!isLast && (
          <div className="h-4 w-[1px] bg-gray-300 absolute left-[14px] top-7" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-ellipsis text-gray-800 text-sm text-nowrap">
          {activity?.title}
        </p>
        <p className="text-xs text-gray-400 text-nowrap">{activity?.time}</p>
      </div>
    </div>
  );
};

export default Activity;
