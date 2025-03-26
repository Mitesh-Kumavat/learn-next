import { connectDB } from "@/config/db";
import Post from "@/models/post.model";
import ApiResponse from "@/utils/ApiResponse";
import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log("GET /api/posts/liked");

    try {
        const userId = req.headers.get("x-user-id");
        if (!userId) {
            const response = new ApiResponse("Unauthorized", 401);
            return NextResponse.json(response, { status: 401 });
        }
        await connectDB();
        const likedPosts = await Post.find({ likes: userId }).populate("userId", "firstName lastName email").sort({ createdAt: -1 });
        const response = new ApiResponse("Liked posts fetched successfully", 200, likedPosts);
        return NextResponse.json(response, { status: 200 });
    } catch (error: Error | any) {
        console.log(error);
        const response = new ApiResponse(error?.message || "Something went wrong while fetching liked posts", 500);
        return NextResponse.json(response, { status: 500 });
    }
}