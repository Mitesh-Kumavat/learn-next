import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";
import ApiResponse from "./utils/ApiResponse";

const protectedRoutes = ["/dashboard", "/api/logout", "/api/me", "/api/posts/create", "/api/posts", "/api/posts/delete", "/api/posts/update"];

export async function middleware(req: NextRequest) {
    const { nextUrl, cookies } = req;
    const token = cookies.get("token")?.value;

    const isProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute) {
        if (!token) {
            const response = new ApiResponse("Unauthorized user", 401, { error: "Invalid token" });
            return NextResponse.json(response, { status: 401 });
        }

        try {
            const decodedToken: any = await verifyToken(token);

            if (!decodedToken || !decodedToken.payload._id) {
                return NextResponse.json({ error: "Invalid Token" }, { status: 403 });
            }

            const res = NextResponse.next();
            res.headers.set("x-user-id", decodedToken.payload._id); // Attach userId in header
            return res;
        } catch (error) {
            return NextResponse.json({ error: "Invalid Token" }, { status: 403 });
        }
    }

    return NextResponse.next();
}

