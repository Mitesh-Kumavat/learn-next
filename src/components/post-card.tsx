"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LikeButton from "@/components/like-button";

interface User {
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
}

interface Post {
    _id: string;
    title: string;
    description: string;
    userId: User;
    createdAt: string;
    likes: string[];
}

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    const [likes, setLikes] = useState(post.likes.length);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <Card key={post._id}>
            <CardHeader >
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="flex justify-between">
                    <span>By @{post.userId.firstName.toLowerCase()}{post.userId.lastName.toLowerCase()}</span>
                    <span>{formatDate(post.createdAt)}</span>
                </CardDescription>
            </CardHeader>

            <CardContent>
                <p>{post.description}</p>
                <div className="flex justify-start gap-2 items-center mt-2 text-sm text-muted-foreground">
                    <LikeButton postId={post._id} setLikes={setLikes} postLikes={post.likes} />
                    <span>{likes} {likes === 1 ? "like" : "likes"}</span>
                </div>
            </CardContent>
        </Card>
    );
}
