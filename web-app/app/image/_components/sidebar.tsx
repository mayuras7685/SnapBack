"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebarStore";
import { Toggle } from "@/app/image/_components/toggle-sidebar";
import SidebarContent from "@/app/image/_components/sidebar-content";

const Sidebar = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-72 h-full bg-background border-r border-dotted dark:border-gray-700 border-gray-200 z-50",
        collapsed && "w-[70px]"
      )}
    >
      <Toggle />
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
