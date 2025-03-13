import { currentUser, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId) {
        //  if user is not logged in
        return NextResponse.json({ message: "Not Authenticaed" }, { status: 401 });
    }

    return NextResponse.json({ message: "Authenticated", data: { userId: user?.id, username: user?.username } }, { status: 200 });
};
