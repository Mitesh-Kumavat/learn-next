import { connectDB } from "@/config/db";
import Post from "@/models/post.model";
import ApiResponse from "@/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
    try {
        await connectDB();
        const posts = await Post.find().populate("userId", "firstName lastName email");

        if (!posts || posts.length === 0) {
            const response = new ApiResponse("No posts found", 404);
            return NextResponse.json(response, { status: 404 });
        }

        const response = new ApiResponse("Posts retrieved successfully", 200, posts);
        return NextResponse.json(response, { status: 200 });
    } catch (error: Error | any) {
        console.log(error);
        const response = new ApiResponse(error?.message || "An error occurred", 500);
        return NextResponse.json(response, { status: 500 });
    }
}