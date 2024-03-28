import React from "react";
import TopBar from "./components/top-bar/TopBar";
import LeftSideBar from "./components/left-sidebar/LeftSideBar";
import BottomBar from "./components/bottom-bar/BottomBar";
import RightSideBar from "./components/right-sidebar/RightSideBar";

function RootLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <main className="flex flex-row">
        <LeftSideBar />
        <section className="main-container">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
        <RightSideBar />
      </main>
      <BottomBar />
    </>
  );
}

export default RootLayoutWrapper;
