import React from "react";
import { SidebarCheckbox } from "@/app/image/_components/sidebar-checkbox";
import ComplaintBox from "@/app/image/_components/complaint-box";
import ChoosingImage from "@/app/image/_components/choosing-image";
import { useSidebar } from "@/store/useSidebarStore";

const SidebarContent = () => {
  const { collapsed } = useSidebar();
  return (
    <>
      {!collapsed && (
        <div className={"flex justify-between gap-6 h-[70%] flex-col  px-8"}>
          <SidebarCheckbox />
          <ComplaintBox />
          <ChoosingImage />
        </div>
      )}
    </>
  );
};

export default SidebarContent;
