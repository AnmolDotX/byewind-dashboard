import React from "react";
import { PiBugBeetle } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { LuRadio } from "react-icons/lu";
import Notification from "@/components/RightSidebarComponents/Notification";
import { IconType } from "react-icons";
import Activity from "@/components/RightSidebarComponents/Activity";
import ActivityPerson1Img from "@/assets/ActivityPerson1.svg";
import ActivityPerson2Img from "@/assets/ActivityPerson2.svg";
import ActivityPerson3Img from "@/assets/ActivityPerson3.svg";
import ActivityPerson4Img from "@/assets/ActivityPerson4.svg";
import ActivityPerson5Img from "@/assets/ActivityPerson5.svg";
import Contact from "@/components/RightSidebarComponents/Contact";
import ContactPerson1Img from "@/assets/ContactPerson1.svg";
import ContactPerson2Img from "@/assets/ContactPerson2.svg";
import ContactPerson3Img from "@/assets/ContactPerson3.svg";
import ContactPerson4Img from "@/assets/ContactPerson4.svg";
import ContactPerson5Img from "@/assets/ContactPerson5.svg";
import ContactPerson6Img from "@/assets/ContactPerson6.svg";

interface RightSidebarProps {
  isCollapsed: boolean;
}

export type NotificationType = {
  id: number;
  title: string;
  time: string;
  Icon: IconType;
};

export type ActivityType = {
  id: number;
  profilePic: string;
  title: string;
  time: string;
};

export type ContactType = {
  id: number;
  profilePic: string;
  name: string;
};

const RightSidebar = ({ isCollapsed }: RightSidebarProps) => {
  const notificationList: NotificationType[] = [
    {
      id: 1,
      title: "You have bug that needs to be fixed ASAP.",
      time: "Just now",
      Icon: PiBugBeetle,
    },
    {
      id: 2,
      title: "New user registered",
      time: "59 minutes ago",
      Icon: GoPerson,
    },
    {
      id: 3,
      title: "You have bug that needs to be fixed ASAP.",
      time: "12 hours ago",
      Icon: PiBugBeetle,
    },
    {
      id: 4,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      Icon: LuRadio,
    },
  ];

  const dummyActivityList: ActivityType[] = [
    {
      id: 1,
      profilePic: ActivityPerson1Img,
      title: "You have a bug that needs to be fixed ASAP",
      time: "Just now",
    },
    {
      id: 2,
      profilePic: ActivityPerson2Img,
      title: "Released a new Version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      profilePic: ActivityPerson3Img,
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      profilePic: ActivityPerson4Img,
      title: "Modified a data in page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      profilePic: ActivityPerson5Img,
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];
  const dummyContactList: ContactType[] = [
    {
      id: 1,
      name: "Natali Craig",
      profilePic: ContactPerson1Img,
    },
    {
      id: 2,
      name: "Drew Cano",
      profilePic: ContactPerson2Img,
    },
    {
      id: 3,
      name: "Orlando Diggs",
      profilePic: ContactPerson3Img,
    },
    {
      id: 4,
      name: "Andi Lane",
      profilePic: ContactPerson4Img,
    },
    {
      id: 5,
      name: "Kate Morrison",
      profilePic: ContactPerson5Img,
    },
    {
      id: 6,
      name: "Koray Okumus",
      profilePic: ContactPerson6Img,
    },
  ];

  return (
    <aside
      className={`fixed inset-y-0 right-0 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300
        ${isCollapsed ? "w-0 overflow-hidden" : "w-64"}
      `}
    >
      {!isCollapsed && (
        <nav className="flex-1 py-4 px-4 overflow-y-auto flex flex-col w-full gap-6">
          {/* Notifications */}
          <div className="">
            <h3 className="font-semibold mb-4">Notifications</h3>
            <ul className="space-y-3">
              {notificationList?.map((notification) => (
                <Notification
                  key={JSON.stringify(notification)}
                  id={notification.id}
                  title={notification.title}
                  time={notification.time}
                  Icon={notification.Icon}
                />
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="">
            <h3 className="font-semibold mb-4">Activities</h3>
            <ul className="space-y-2">
              {dummyActivityList?.map((activity, index) => (
                <Activity
                  key={JSON.stringify(activity)}
                  activity={activity}
                  isLast={index === dummyActivityList.length - 1}
                />
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="">
            <h3 className="font-semibold mb-4">Contacts</h3>
            <ul className="space-y-3">
              {dummyContactList?.map((contact) => (
                <Contact key={JSON.stringify(contact)} contact={contact} />
              ))}
            </ul>
          </div>
        </nav>
      )}
    </aside>
  );
};

export default RightSidebar;
