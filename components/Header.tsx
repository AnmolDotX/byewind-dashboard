import React from "react";
import { SearchIcon, PanelLeft, PanelRight, Star, Command } from "lucide-react";
import Link from "next/link";
import {
  PiBell,
  PiClockCounterClockwise,
  PiMoonDuotone,
  PiSunDuotone,
} from "react-icons/pi";
import { useTheme } from "next-themes";

interface HeaderProps {
  toggleLeftSidebar: () => void;
  isLeftSidebarCollapsed: boolean;
  toggleRightSidebar: () => void;
  isRightSidebarCollapsed: boolean;
}

const Header = ({
  toggleLeftSidebar,
  isLeftSidebarCollapsed,
  toggleRightSidebar,
  isRightSidebarCollapsed,
}: HeaderProps) => {
  const { setTheme, theme } = useTheme();
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6 sticky top-0 ">
      <div className="flex items-center space-x-4">
        {/* Left Sidebar Collapse Button */}
        <button
          onClick={toggleLeftSidebar}
          className="p-1 rounded-md text-black hover:bg-gray-200/80 focus:outline-none "
          aria-label={
            isLeftSidebarCollapsed
              ? "Expand left sidebar"
              : "Collapse left sidebar"
          }
        >
          {isLeftSidebarCollapsed ? (
            <PanelRight size={18} />
          ) : (
            <PanelLeft size={18} />
          )}
        </button>

        <Star
          height={16}
          width={16}
          className="text-black fill-gray-200 dark:text-white"
        />

        {/* Breadcrumbs (Placeholder) */}
        <nav className="text-sm text-gray-600 hidden md:block">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/dashboard" className="text-gray-400/80">
                Dashboards
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li>
              <span className="text-black dark:text-white">Default</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Search and Right Sidebar Toggle */}
      <div className="flex items-center space-x-1">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon size={16} className="text-gray-400/80" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-7 py-1 border-none placeholder:text-gray-400/80 bg-gray-200/50 rounded-md focus:outline-none w-[160px] text-sm"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400/60">
            <Command size={14} />
            <span className="text-sm">{" /"}</span>
          </span>
        </div>

        <div
          title="Theme"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer"
        >
          {theme === "dark" ? (
            <PiSunDuotone
              size={20}
              className="text-black"
              onClick={() => setTheme("light")}
            />
          ) : (
            <PiMoonDuotone
              size={18}
              className="text-black font-bold"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        <div
          onClick={toggleRightSidebar}
          title="Activities"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer"
        >
          <PiClockCounterClockwise size={20} className="text-black " />
        </div>
        <div
          onClick={toggleRightSidebar}
          title="Notifications"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer"
        >
          <PiBell size={20} className="text-black font-bold" />
        </div>

        {/* Right Sidebar Toggle Button (example: an info or activity icon) */}
        <button
          onClick={toggleRightSidebar}
          className="p-1 text-black rounded-md hover:bg-gray-200/80 focus:outline-none"
          aria-label={
            isRightSidebarCollapsed
              ? "Open right sidebar"
              : "Close right sidebar"
          }
        >
          {isRightSidebarCollapsed ? (
            <PanelLeft size={18} />
          ) : (
            <PanelRight size={18} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
