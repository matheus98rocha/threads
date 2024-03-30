import SignOutButton from "@/components/buttons/sign-out-button/SignOutButton";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dark } from "@clerk/themes";

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
      <Link href="/" className="flex items-center gap-4">
        <Image src={"/assets/logo.svg"} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignOutButton isLeftSideBar={false} />
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default TopBar;
