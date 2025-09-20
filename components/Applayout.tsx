"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import Header from "@/components/Header";

const Applayout = ({ children }: { children: React.ReactNode }) => {
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false);
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarCollapsed(!isRightSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Left Sidebar */}
      <Sidebar isCollapsed={isLeftSidebarCollapsed} />

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
          ${isLeftSidebarCollapsed ? "ml-16" : "ml-64"}
          ${isRightSidebarCollapsed ? "mr-0" : "mr-64"}
        `}
      >
        {/* Header */}
        <Header
          toggleLeftSidebar={toggleLeftSidebar}
          isLeftSidebarCollapsed={isLeftSidebarCollapsed}
          toggleRightSidebar={toggleRightSidebar}
          isRightSidebarCollapsed={isRightSidebarCollapsed}
        />

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>

      {/* Right Sidebar */}
      <RightSidebar isCollapsed={isRightSidebarCollapsed} />
    </div>
  );
};

export default Applayout;
