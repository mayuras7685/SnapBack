"use client";
import { cn } from "@/lib/utils";
import { monsterrat } from "@/lib/fonts";
import React from "react";

export default function Home() {
  return (
    <div className={"flex flex-col gap-y-4"}>
      <div className={"w-full h-full"}>
        <h1
          className={cn(
            "items-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-foreground my-8 mx-16 text-start text-5xl font-bold",
            monsterrat.className,
          )}
        >
          Food Compliant Resolution :
        </h1>
        {/*Container for showing up images*/}
        <div
          className={
            "h-[32rem] grid grid-cols-2 gap-8 mx-16 border-dotted rounded-xl border dark:border-gray-700"
          }
        >
          <div
            className={
              "border-r flex flex-col gap-8 h-full p-16 border-gray-200 dark:border-gray-700 border-dotted"
            }
          >
            <h1
              className={cn(
                " text-center font-bold text-3xl",
                monsterrat.className,
              )}
            >
              Recognition
            </h1>
            <div
              className={
                "h-64 text-center border border-opacity-10 border-primary/20 rounded-xl"
              }
            ></div>
          </div>
          <div
            className={
              "border-r flex flex-col gap-8 h-full p-16 border-gray-200 dark:border-gray-700 border-dotted"
            }
          >
            <h1
              className={cn(
                " text-center font-bold text-3xl",
                monsterrat.className,
              )}
            >
              Output
            </h1>
            <div
              className={
                "h-64 text-center border border-opacity-10 border-primary/20 rounded-xl"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
