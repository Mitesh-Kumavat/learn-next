import { connectDB } from "@/config/db";
import Post from "@/models/post.model";
import ApiResponse from "@/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function POST(req: NextRequest, postID: { params: Params }) {
    try {
        await connectDB();
        const params = postID.params;
        const { id } = await params;
        const userId = req.headers.get("x-user-id");

        const post = await Post.findById(id);

        if (!post) {
            const res = new ApiResponse("Post not found", 404);
            return NextResponse.json(res, { status: 404 });
        }

        if (post.likes.includes(userId)) {
            post.likes.remove(userId);
            await post.save();
            const res = new ApiResponse("Like remove from the post.", 200);
            return NextResponse.json(res, { status: 200 });
        }

        post.likes.push(userId);
        await post.save();

        const res = new ApiResponse("Post liked", 200);
        return NextResponse.json(res, { status: 200 });
    } catch (error: Error | any) {
        const res = new ApiResponse("Error", 500, error.message);
        return NextResponse.json(res, { status: 500 });
    }
}