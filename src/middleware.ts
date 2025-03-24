import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

const protectedRoutes = ["/dashboard", "/api/logout", "/api/me", "/api/posts/create"];

export async function middleware(req: NextRequest) {
    const { nextUrl, cookies } = req;
    const token = cookies.get("token")?.value;
    console.log(token, "FROM THE MIDDLEWARE");

    const isProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
    );

    if (isProtectedRoute) {
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        try {
            const decodedToken: any = await verifyToken(token);
            console.log("DECODE TOKEN:", decodedToken.payload._id);

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

export const config = {
    matcher: ["/dashboard/:path*", "/api/logout", "/api/me", "/api/posts/create"],
};
