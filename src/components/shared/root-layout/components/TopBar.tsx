import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <nav
      className="fixed 
    top-0 
    z-30 
    flex 
    w-full 
    items-center 
    justify-between 
    bg-dark-2 
    px-6 
    py-3"
    >
      <Link
        href="/"
        className="flex
      items-center gap-4"
      ></Link>
    </nav>
  );
}

export default TopBar;
