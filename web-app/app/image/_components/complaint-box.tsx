import React from "react";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

const ComplaintBox = () => {
  return (
    <div className={"font-semibold text-md"}>
      <div className="mb-4">
        <h2
          className={cn(
            "text-md font-normal dark:text-gray-200",
            poppins.className
          )}
        >
          Enter your Complaint:
        </h2>
      </div>
      <textarea
        name={"complaint-box"}
        className={
          "w-full rounded-xl p-2 font-normal text-sm h-[95px] border outline-none focus:border-primary overflow-auto "
        }
      ></textarea>
    </div>
  );
};

export default ComplaintBox;
