import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    avatar: {
        type: String,
        required: true,
    },
});
// nextjs runs on edge functions

const User = models?.user || model("User", userSchema);

export default User;
