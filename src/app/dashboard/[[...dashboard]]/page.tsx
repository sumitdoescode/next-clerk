import React from "react";
// import { UserProfile } from "@clerk/nextjs";
// import { SignOutButton } from "@clerk/nextjs";
import { currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// this is server side protected routes
const DashboardPage = async () => {
    const { userId } = await auth();
    const isAuth = !!userId;
    const user = await currentUser();
    if (!isAuth) {
        // if user is not logged in
        return redirect("/sign-in");
    }
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl text-white">Dashboard, Hello {user?.firstName}</h1>
                <h2>What's in your mind, {user?.username}</h2>
            </div>
        </section>
    );
};

export default DashboardPage;
