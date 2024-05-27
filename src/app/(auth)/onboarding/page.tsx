import AccountProfile from "@/components/forms/account-profile/account-profile";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { UserProps } from "@/types/user.type";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userDate: Partial<UserProps> = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile nwq to use Threads
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userDate} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
