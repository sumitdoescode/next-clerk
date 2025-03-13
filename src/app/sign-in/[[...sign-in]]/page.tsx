import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <section className="flex items-center justify-center min-h-full py-24">
            <SignIn />
        </section>
    );
};

export default SignInPage;
