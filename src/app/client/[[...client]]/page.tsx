"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/router";

// protected route for client component
const ClientPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const router = useRouter();
    console.log(isLoaded, isSignedIn);

    // if current loading show loading
    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    // if user is not signed in
    if (!isSignedIn) {
        router.push("/sign-in");
        return null;
    }
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl text-white">Client Page, Hello {user?.firstName}</h1>
                <p>{user?.username}</p>
            </div>
        </section>
    );
};

export default ClientPage;
