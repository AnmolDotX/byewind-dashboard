import React from "react";
import Image from "next/image";
import ByeWindLogo from "@/assets/ByeWind.svg";
import { GrPieChart } from "react-icons/gr";
import {
  PiBookOpenDuotone,
  PiChatsCircle,
  PiFolderDuotone,
  PiIdentificationCardDuotone,
  PiNotebookDuotone,
  PiShoppingBagOpen,
} from "react-icons/pi";
import { LuSquareUser } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import NavItem from "@/components/NavItems";
import Link from "next/link";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const dashboardItems = [
    {
      name: "Default",
      href: "/dashboard/default",
      Icon: GrPieChart,
    },
    {
      name: "eCommerce",
      href: "/dashboard/ecommerce",
      Icon: PiShoppingBagOpen,
      subOption: [
        {
          name: "Option 1",
          href: "/option-1",
        },
      ],
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      Icon: PiFolderDuotone,
      subOption: [
        {
          name: "Option 1",
          href: "/option-1",
        },
      ],
    },
    {
      name: "Online Courses",
      href: "/dashboard/online-courses",
      Icon: PiBookOpenDuotone,
      subOption: [
        {
          name: "Option 1",
          href: "/option-1",
        },
      ],
    },
  ];

  const pagesItems = [
    {
      name: "User Profile",
      href: "/pages/user-profile",
      Icon: LuSquareUser,
      subOption: [
        {
          name: "Overview",
          href: "/overview",
        },
        {
          name: "Projects",
          href: "/projects",
        },
        {
          name: "Campaigns",
          href: "/campaigns",
        },
        {
          name: "Documents",
          href: "/documents",
        },
        {
          name: "Followers",
          href: "/followers",
        },
      ],
    },
    {
      name: "Account",
      href: "/pages/account",
      Icon: PiIdentificationCardDuotone,
    },
    {
      name: "Corporate",
      href: "/pages/corporate",
      Icon: HiOutlineUserGroup,
    },
    {
      name: "Blog",
      href: "/pages/blog",
      Icon: PiNotebookDuotone,
    },
    {
      name: "Social",
      href: "/pages/social",
      Icon: PiChatsCircle,
    },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 flex flex-col bg-white dark:bg-black transition-all duration-300 border-r border-gray-200 dark:border-gray-800 ${
        isCollapsed ? "w-16" : "w-64 px-4"
      }`}
    >
      <div
        className={`flex items-center h-16 ${isCollapsed && "justify-center"} `}
      >
        {/* Always render the Image */}
        <Image src={ByeWindLogo} width={24} height={24} alt="Byewind Logo" />
        {!isCollapsed && (
          <h1 className="ml-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 opacity-100">
            Byewind
          </h1>
        )}
      </div>
      <nav className="flex-1 w-full flex flex-col gap-6 overflow-y-auto pb-4">
        {!isCollapsed && (
          <div>
            <h3 className="w-full flex items-center gap-6 mb-3">
              <span className="text-gray-500 dark:text-gray-400">
                Favorites
              </span>
              <span className="text-gray-400 dark:text-gray-300">Recently</span>
            </h3>
            <ul
              className={`flex flex-col gap-1 list-none ${
                isCollapsed ? "items-center" : "items-start"
              }`}
            >
              <li>
                <Link
                  className="flex items-center gap-1 group"
                  href="/overview"
                >
                  <span className="text-gray-300 dark:text-gray-500 text-xl font-bold">
                    •
                  </span>
                  <span className="text-gray-900 dark:text-white text-[15px] group-hover:text-blue-500">
                    Overview
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 group"
                  href="/projects"
                >
                  <span className="text-gray-300 dark:text-gray-500 text-xl font-bold">
                    •
                  </span>
                  <span className="text-gray-900 dark:text-white text-[15px] group-hover:text-blue-500">
                    Projects
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Dashboard */}
        <div className="mt-4">
          {!isCollapsed && (
            <h3 className="text-gray-400 text-sm mb-2">Dashboards</h3>
          )}
          <ul className="flex flex-col gap-1">
            {dashboardItems.map((item) => (
              <li key={item.name}>
                <NavItem item={item} isCollapsed={isCollapsed} level={0} />{" "}
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div className="mt-4">
          {!isCollapsed && (
            <h3 className="text-gray-400 text-sm mb-2">Pages</h3>
          )}
          <ul className="flex flex-col gap-1">
            {pagesItems.map((item) => (
              <li key={item.name}>
                <NavItem item={item} isCollapsed={isCollapsed} level={0} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
