"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItemProps {
  item: {
    name: string;
    href: string;
    Icon?: React.ElementType;
    subOption?: { name: string; href: string }[];
  };
  isCollapsed: boolean;
  level?: number;
}

const NavItem = ({ item, isCollapsed, level = 0 }: NavItemProps) => {
  const pathname = usePathname();
  const hasSubOptions = item.subOption && item.subOption.length > 0;
  const itemFullHref = item.href;

  const isParentExactActive = pathname === itemFullHref;

  const isAnySubOptionActive =
    hasSubOptions &&
    item.subOption?.some((sub) => pathname === `${itemFullHref}${sub.href}`);

  const [isOpen, setIsOpen] = useState(isAnySubOptionActive);

  const toggleSubOptions = () => {
    if (!isCollapsed) {
      setIsOpen(!isOpen);
    }
  };

  const baseLinkPaddingTailwind = 0;
  const linkPaddingClass = `pl-${baseLinkPaddingTailwind + level * 4}`;
  const subOptionLeftPaddingClass = `pl-${
    baseLinkPaddingTailwind + (level + 1) * 4
  }`;

  return (
    <div>
      <Link
        title={item.name}
        href={itemFullHref}
        onClick={
          hasSubOptions && !isCollapsed
            ? (e) => {
                e.preventDefault();
                toggleSubOptions();
              }
            : undefined
        }
        className={`flex items-center py-2 pl-[2px] relative ${
          isCollapsed ? "w-[80%] mx-auto" : ""
        } rounded-md group
          ${
            isParentExactActive
              ? "bg-gray-200 text-black dark:bg-gray-700"
              : "text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }
          ${isCollapsed ? "justify-center" : `${linkPaddingClass}`}
        `}
      >
        {isParentExactActive && (
          <div className="absolute left-0 h-5 w-1 bg-black rounded-full dark:bg-white" />
        )}
        {isCollapsed ? (
          item.Icon && (
            <item.Icon
              size={20}
              className={`${
                isParentExactActive
                  ? "text-black dark:text-white"
                  : "text-gray-800 dark:text-gray-400"
              }`}
            />
          )
        ) : (
          <>
            <span className="w-5 flex-shrink-0 text-center">
              {hasSubOptions && (
                <span
                  className={`${
                    isParentExactActive || isAnySubOptionActive
                      ? "text-black dark:text-white"
                      : "text-gray-400"
                  }`}
                >
                  {isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </span>
              )}
            </span>
            {/* Icon */}
            {item.Icon && (
              <item.Icon
                size={20}
                className={`${
                  isParentExactActive
                    ? "text-black dark:text-white"
                    : "text-gray-800 dark:text-gray-400"
                } mr-2`}
              />
            )}
            {/* Name */}
            <span className="whitespace-nowrap text-[15px] flex-1">
              {item.name}
            </span>
          </>
        )}
      </Link>

      {/* Render sub-options if not collapsed and expanded */}
      {!isCollapsed && hasSubOptions && isOpen && (
        <ul className="flex flex-col gap-1 mt-1 ml-10">
          {item.subOption?.map((subItem) => (
            <li key={subItem.name}>
              <Link
                href={`${itemFullHref}${subItem.href}`}
                className={`flex items-center gap-2 py-2 pl-2 rounded-md text-sm relative
                  ${subOptionLeftPaddingClass}
                  ${
                    pathname === `${itemFullHref}${subItem.href}`
                      ? "bg-gray-300 text-black dark:bg-gray-600"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  }
                `}
              >
                {/* Left active indicator bar for sub-option */}
                {pathname === `${itemFullHref}${subItem.href}` && (
                  <div className="absolute left-0 h-5 w-1 bg-black rounded-full dark:bg-white" />
                )}

                <span className="whitespace-nowrap">{subItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
