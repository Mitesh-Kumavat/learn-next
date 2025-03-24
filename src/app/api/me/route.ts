import { connectDB } from "@/config/db"
import User from "@/models/user.model";
import ApiResponse from "@/utils/ApiResponse";
import { verifyToken } from "@/utils/verifyToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        if (!token) {
            const response = new ApiResponse("Unauthorized request", 401);
            return NextResponse.json(response, { status: 401 });
        }

        const decodedToken: any = await verifyToken(token);
        if (!decodedToken) {
            const response = new ApiResponse("Unauthorized request", 401);
            return NextResponse.json(response, { status: 401 });
        }

        const user = await User.findById(decodedToken?._id).select("-password -accessToken");
        if (!user) {
            const response = new ApiResponse("User not found", 404);
            return NextResponse.json(response, { status: 404 });
        }

        const response = new ApiResponse("User found", 200, user);
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log("ERROR IN POST REQUEST OF USER: ", error);
    }
}