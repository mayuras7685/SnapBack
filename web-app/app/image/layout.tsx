import React from "react";
import { Navbar } from "@/app/(home)/_components/Navbar";
import { Container } from "@/app/image/_components/container";
import Sidebar from "@/app/image/_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className={"flex h-full pt-20"}>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
