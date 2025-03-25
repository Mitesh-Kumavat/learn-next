import mongoose from "mongoose";
import User from "@/models/user.model";
import Post from "@/models/post.model";

export const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "posts"
        });
        console.log(User, Post);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};