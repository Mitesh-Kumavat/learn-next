export interface User {
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
}

export interface Post {
    _id: string;
    title: string;
    description: string;
    userId: User;
    createdAt: string;
    likes: string[];
}
