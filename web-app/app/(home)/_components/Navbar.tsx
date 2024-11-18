"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { alexBrush, poppins } from "@/lib/fonts";
import { ModeToggle } from "@/components/toggle-theme";

export const Navbar = () => {
  const navItems: { path: string; name: string }[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact us",
    },
  ];

  return (
    <nav className="flex px-4 z-20 h-[80px] bg-transparent backdrop-blur fixed top-0 w-full justify-between border-b border-dotted items-center ">
      <div
        className={cn(
          "transition-all text-2xl duration-300 ",
          alexBrush.className,
        )}
      >
        <span className={"text-3xl"}>{"Snapback"}</span>
      </div>

      <div className={cn(poppins.className)}>
        {navItems.map((navItem: { path: string; name: string }) => (
          <Link
            href={navItem.path}
            key={navItem.path}
            className={
              "m-4 hover:border-b hover:border-primary transition-all duration-300"
            }
          >
            {navItem.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-between m-4 items-center">
        <ModeToggle />
      </div>
    </nav>
  );
};
