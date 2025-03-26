"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import PostCard from "@/components/post-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types";

export default function LikedPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const res = await axios.get("/api/posts/liked-posts");
                if (res.status !== 200) {
                    toast("No liked posts found.");
                    return;
                }
                setPosts(res.data.data);
            } catch (error) {
                toast("Error fetching liked posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchLikedPosts();
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold">Liked Posts</h2>
            {loading ? (
                <>
                    <Skeleton className="h-36 w-full" />
                    <Skeleton className="h-36 w-full" />
                    <Skeleton className="h-36 w-full" />
                    <Skeleton className="h-36 w-full" />
                </>
            ) : posts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
    );
}   
