"use client";

import React, { useState, useEffect } from "react";
import { SearchIcon, PanelLeft, PanelRight, Star, Command } from "lucide-react";

import {
  PiBell,
  PiClockCounterClockwise,
  PiMoonDuotone,
  PiSunDuotone,
} from "react-icons/pi";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  // BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs = [];
    let currentPath = "";

    breadcrumbs.push({
      name: "Home",
      href: "/",
      isCurrent: pathname === "/",
    });

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (segment.startsWith("(") && segment.endsWith(")")) {
        continue;
      }
      currentPath += `/${segment}`;
      const name = segment.replace(/-/g, " ");
      const isCurrent = currentPath === pathname;

      breadcrumbs.push({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        href: currentPath,
        isCurrent: isCurrent,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  if (!mounted) {
    return (
      <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6 dark:bg-gray-900 dark:border-gray-700 sticky top-0">
        <div className="flex items-center space-x-4">
          <button
            className="p-1 rounded-md text-black hover:bg-gray-200/80 focus:outline-none dark:text-white"
            aria-label="Toggle left sidebar"
          >
            <PanelRight size={18} />
          </button>
          <Star
            height={16}
            width={16}
            className="text-black fill-gray-200 dark:text-white dark:fill-gray-600"
          />
          <nav className="text-sm text-gray-600 hidden md:block">
            {/* Minimal placeholder for breadcrumbs */}
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <span className="text-gray-400/80 dark:text-gray-500">
                  Loading...
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-[36px] h-[36px] bg-gray-200 rounded-md animate-pulse dark:bg-gray-700"></div>
          <div className="w-[36px] h-[36px] bg-gray-200 rounded-md animate-pulse dark:bg-gray-700"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6 sticky top-0 dark:bg-gray-900 dark:border-gray-700 z-50">
      <div className="flex items-center space-x-4">
        {/* Left Sidebar Collapse Button */}
        <button
          onClick={toggleLeftSidebar}
          className="p-1 rounded-md text-black hover:bg-gray-200/80 focus:outline-none dark:text-white dark:hover:bg-gray-700"
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
          className="text-black fill-gray-200 dark:text-white dark:fill-gray-600"
        />

        {/* Dynamic Breadcrumbs */}
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {item.isCurrent ? (
                    <BreadcrumbPage className="text-black dark:text-white">
                      {item.name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={item.href}
                        className="text-gray-400/80 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator className="text-gray-400" />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
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
            className="pl-7 pr-7 py-1 border-none placeholder:text-gray-400/80 bg-gray-200/50 rounded-md focus:outline-none w-[160px] text-sm dark:bg-gray-700 dark:placeholder:text-gray-500 dark:text-white"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400/60">
            <Command size={14} className="dark:text-gray-500" />
            <span className="text-sm dark:text-gray-500">{" /"}</span>
          </span>
        </div>

        <div
          title="Theme"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer dark:hover:bg-gray-700"
        >
          {theme === "dark" ? (
            <PiSunDuotone
              size={20}
              className="text-black dark:text-white"
              onClick={() => setTheme("light")}
            />
          ) : (
            <PiMoonDuotone
              size={18}
              className="text-black dark:text-white font-bold"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        <div
          onClick={toggleRightSidebar}
          title="Activities"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer dark:hover:bg-gray-700"
        >
          <PiClockCounterClockwise
            size={20}
            className="text-black dark:text-white"
          />
        </div>
        <div
          onClick={toggleRightSidebar}
          title="Notifications"
          className="hover:bg-gray-200/80 rounded-md p-1 cursor-pointer dark:hover:bg-gray-700"
        >
          <PiBell size={20} className="text-black font-bold dark:text-white" />
        </div>

        {/* Right Sidebar Toggle Button (example: an info or activity icon) */}
        <button
          onClick={toggleRightSidebar}
          className="p-1 text-black rounded-md hover:bg-gray-200/80 focus:outline-none dark:text-white dark:hover:bg-gray-700"
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
