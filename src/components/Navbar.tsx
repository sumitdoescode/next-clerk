import React from "react";
import Link from "next/link";
import { currentUser, auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
    const { userId } = await auth();
    return (
        <nav className="py-3 bg-stone-700">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <ul className="flex text-center gap-8 text-xl">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="flex items-center gap-4 text-xl">
                        {userId ? (
                            // user is logged in
                            <>
                                {" "}
                                <li>
                                    <Link href="#">Logout</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="/client">Client</Link>
                                </li>
                                <UserButton />
                            </>
                        ) : (
                            // user is not logged in
                            <>
                                <li>
                                    <Link href="/sign-in">SignIn</Link>
                                </li>
                                <li>
                                    <Link href="/sign-up">SignUp</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
