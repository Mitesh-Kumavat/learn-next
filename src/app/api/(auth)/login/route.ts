import ApiResponse from "@/utils/ApiResponse";
import { connectDB } from "../../../../config/db";
import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "@/models/user.model";
import { cookies } from 'next/headers'

export interface LoginRequest {
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {

    try {
        const { email, password }: LoginRequest = await req.json();
        if (!email || !password) {
            const response = new ApiResponse("Email and password are required", 400);
            return NextResponse.json(response, { status: 400 });
        }

        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
            const response = new ApiResponse("Invalid credentials", 401);
            return NextResponse.json(response, { status: 401 });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            const response = new ApiResponse("Invalid credentials", 401);
            return NextResponse.json(response, { status: 401 });
        }

        const token = await user.createAccessToken();
        const cookieStore = await cookies()
        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
        })
        const response = new ApiResponse("Login successful", 200, { token });
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log(error);
        const response = new ApiResponse("An error occurred", 500);
        return NextResponse.json(response, { status: 500 });
    }

}