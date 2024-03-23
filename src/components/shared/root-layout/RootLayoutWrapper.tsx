import React from "react";
import TopBar from "./components/TopBar";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import BottomBar from "./components/BottomBar";

function RootLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <main>
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
