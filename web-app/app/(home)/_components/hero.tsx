"use client";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <div
        className={cn(
          "h-[calc(100vh-60px)] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center",
          poppins.className,
        )}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div className="relative flex flex-col items-center">
            <span className="mb-1.5 dark:text-foreground text-background inline-block rounded-full bg-primary px-3 py-1.5 text-sm">
              Now Live!
            </span>
            <h1 className="max-w-3xl bg-gradient-to-br dark:from-gray-200 dark:to-gray-500 from-gray-800 to-gray-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight">
              Snap, Send, Smile! Instant Refunds for Food Flubs, No Drama!
            </h1>
            <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
              Snap a photo of the issue, and we will take care of the rest. No
              lengthy forms, no waiting on hold with customer service – just
              instant cashback, so you can get back to enjoying your meal.
            </p>
            <Button className="group relative flex w-fit items-center gap-1.5 rounded-full bg-inherit  px-4 py-2 text-gray-800 dark:text-gray-200 font-semibold transition-colors hover:bg-primary border border-primary hover:text-white ">
              <Link href={"/image"}>Explore now</Link>
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
