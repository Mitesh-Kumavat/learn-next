import { connectDB } from "@/config/db";
import Post from "@/models/post.model";
import ApiResponse from "@/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function GET(req: NextRequest, postID: { params: Params }) {
    try {
        await connectDB();
        const params = postID.params;
        const { id } = await params;
        const userId = req.headers.get("x-user-id");

        let post = await Post.findById(id).populate("userId", "firstName lastName email");

        if (!post) {
            const response = new ApiResponse("Post not found", 404);
            return NextResponse.json(response, { status: 404 });
        }

        if (post.userId._id.toString() === userId) {
            post = post.toObject();
            post.isOwner = true
        } else {
            post = post.toObject();
            post.isOwner = false
        }
        console.log(post);

        const response = new ApiResponse("Post found", 200, post);
        return NextResponse.json(response, { status: 200 });
    } catch (error: Error | any) {
        console.log(error);
        const response = new ApiResponse("Error", 500, error.message);
        return NextResponse.json(response, { status: 500 });
    }
}