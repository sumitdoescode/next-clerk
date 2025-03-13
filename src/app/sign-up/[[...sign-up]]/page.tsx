import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <section className="flex items-center justify-center min-h-full py-24">
            <SignUp />
        </section>
    );
};

export default SignUpPage;
