import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className={
          "w-full bottom-0 h-[60px] flex justify-center items-center border-t border-secondary text-center"
        }
      >
        Made with <span className={"text-primary mx-2 text-xl"}>♥</span> by
        team Snapback.
      </div>
    </>
  );
};

export default Footer;
