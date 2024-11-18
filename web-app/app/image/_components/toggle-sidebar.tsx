"use client";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine, Ghost } from "lucide-react";
import React from "react";
import { useSidebar } from "@/store/useSidebarStore";

export const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const label: string = collapsed ? "expand" : "collapse";
  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex items-center justify-center pt-4 mb-4">
          <Hint side={"right"} label={label} asChild>
            <Button
              onClick={onExpand}
              className="h-auto p-2 "
              variant={"outline"}
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex">
          <Hint label={label} side={"right"} asChild>
            <Button
              onClick={onCollapse}
              className="h-auto p-2 ml-auto"
              variant={"ghost"}
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
