"use server";

import User from "@/models/user.model";
import { connectDB } from "@/db/dbConn";

// this action is going to create a new user in our database
// it receives an user objects and saves the user in the database

export const createOrUpdateUser = async (id, first_name, username, email_addresses, image_url) => {
    try {
        await connectDB();
        let user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    username: username,
                    email: email_addresses[0].email,
                    photo: image_url,
                },
            },
            { upsert: true, new: true }
        );
        // upsert true means if doesn't find the user then creates a new user
        return user;
    } catch (error: any) {
        console.log("Error creating or updating user", error.message);
    }
};

export const deleteUser = async (id: any) => {
    try {
        await connectDB();
        await User.findOneAndDelete({ clerkId: id });
    } catch (error: any) {
        console.log("Error deleting user", error.message);
    }
};
