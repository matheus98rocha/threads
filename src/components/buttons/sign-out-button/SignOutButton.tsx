"use client";
import React from "react";
import { SignOutButton as SignOutButtonClerk, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignOutButtonProps } from "./SignOutButton.types";

function SignOutButton({ isLeftSideBar }: SignOutButtonProps) {
  const router = useRouter();
  return (
    <>
      <SignedIn>
        <SignOutButtonClerk signOutCallback={() => router.push("/sign-in")}>
          <div
            className={`flex cursor-pointer ${isLeftSideBar && "gap-4 p-4"}`}
          >
            <Image
              src={"/assets/logout.svg"}
              alt="logout"
              width={24}
              height={24}
            />
            {isLeftSideBar && (
              <p className="text-light-2 max-lg:hidden">Logout</p>
            )}
          </div>
        </SignOutButtonClerk>
      </SignedIn>
    </>
  );
}

export default SignOutButton;
