import jwt from "jsonwebtoken";

export interface tokenInterface {
    _id: string;
}

export const verifyToken = async function (token: string): Promise<string | tokenInterface | object> {
    return jwt.verify(token, process.env.JWT_SECRET!);
}