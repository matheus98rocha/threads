import React from "react";
import SuggestedContainer from "./components/suggested-container/SuggestedContainer";

function RightSideBar() {
  return (
    <section
      className="
    custom-scrollbar 
    sticky 
    right-0 
    top-0 z-20 
    flex 
    h-screen 
    w-fit 
    flex-col 
    justify-between 
    gap-12 
    overflow-auto 
    border-l 
    border-l-dark-4 
    bg-dark-2 
    px-10 
    pb-6 
    pt-28 
    max-xl:hidden"
    >
      <SuggestedContainer suggestedTitle="Suggested Comunities" />
      <SuggestedContainer suggestedTitle="Suggested Users" />
    </section>
  );
}

export default RightSideBar;
