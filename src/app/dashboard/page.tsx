"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import PostCard from "@/components/post-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types";


export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("/api/posts");
                if (res.status !== 200) {
                    toast("An error occurred while fetching posts.");
                    return;
                }
                setPosts(res.data.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold">All Posts</h2>
            {loading ? (<>
                <Skeleton className="h-28 w-full" />
                <Skeleton className="h-28 w-full" />
                <Skeleton className="h-28 w-full" />
                <Skeleton className="h-28 w-full" />
            </>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => <PostCard key={post._id} post={post} />)}
                </div>
            )}
        </div>
    );
}
