import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

// Caching the connection for better performance in development
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectDB = async () => {
    if (cached.conn) return cached.conn; // Return cached connection if available

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "learning", // Change this to your actual DB name
            bufferCommands: false,
            connectTimeoutMS: 30000,
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("MongoDB connected successfully!");
        return cached.conn;
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw new Error("MongoDB connection error");
    }
};
