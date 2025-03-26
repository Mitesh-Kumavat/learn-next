import { NextRequest, NextResponse } from "next/server";
import ApiResponse from "@/utils/ApiResponse";
import { connectDB } from "@/config/db";
import Post from "@/models/post.model";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const search = searchParams.get('q');
        console.log(search);

        if (!search) {
            const response = new ApiResponse("No search query provided", 400);
            return NextResponse.json(response, { status: 400 });
        }

        await connectDB();
        const posts = await Post.find({
            title: { $regex: search, $options: "i" }
        }).populate("userId", "firstName email lastName");
        if (!posts || posts.length === 0) {
            const response = new ApiResponse("No posts found", 404);
            return NextResponse.json(response, { status: 404 });
        }

        const response = new ApiResponse("Posts found", 200, posts);
        return NextResponse.json(response, { status: 200 });
    } catch (error: Error | any) {
        const response = new ApiResponse(error.message, 500);
        return NextResponse.json(response, { status: 500 });
    }
}