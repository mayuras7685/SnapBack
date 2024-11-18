import React from "react";
import { cn } from "@/lib/utils";
import { roboto } from "@/lib/fonts";
import ImageUpload from "@/app/image/_components/image-upload";

const ChoosingImage = () => {
  return (
    <div>
      <h2 className={roboto.className}>Choose an Image :</h2>
      <div
        className={
          "p-4 h-full mt-2 gap-3 flex flex-col justify-evenly bg-gray-100 dark:bg-gray-800 border rounded-xl"
        }
      >
        <h3
          className={cn(
            "text-gray-800  dark:text-gray-300 text-[14px]",
            roboto.className
          )}
        >
          Drag and drop files here
        </h3>
        <p className={"text-gray-400 text-[10px]"}>
          Limit 10MB per file.JPG,JPEG and PNG
        </p>
        <ImageUpload />
      </div>
    </div>
  );
};

export default ChoosingImage;
