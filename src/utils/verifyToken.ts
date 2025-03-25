import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function verifyToken(token: string) {
    try {
        const payload = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}
