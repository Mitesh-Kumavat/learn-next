import Post from "@/models/post.model";
import ApiResponse from "@/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { title, description } = await req.json();
        if (!title || !description) {
            const response = new ApiResponse('Title and description are required', 400);
            return NextResponse.json(response, { status: 400 });
        }

        const userId = req.headers.get('x-user-id');
        console.log(userId, 'userId');

        const post = await Post.create({ title, description, userId });
        const response = new ApiResponse('Post created successfully', 201, post);
        return NextResponse.json(response, { status: 201 });
    } catch (error: Error | any) {
        console.log(error);
        const response = new ApiResponse(error?.message || 'An error occurred', 500);
        return NextResponse.json(response, { status: 400 })
    }
}