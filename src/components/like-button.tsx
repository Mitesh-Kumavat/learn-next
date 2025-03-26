"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Heart } from "lucide-react";

interface Props {
    postId: string;
    setLikes: (updateFn: (prev: number) => number) => void;
    postLikes: string[];
}

export default function LikeButton({ postId, setLikes, postLikes }: Props) {
    const [isLiked, setIsLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem("userId") as string;
        setIsLiked(postLikes.includes(userId));
    }, [postLikes, postId]);


    const toggleLike = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const res = await axios.post(`/api/posts/${postId}/like`);
            if (res.status === 200) {
                setIsLiked(!isLiked);
                setLikes((prev: number) => (isLiked ? prev - 1 : prev + 1));
            } else {
                toast.error("Failed to like the post");
            }
        } catch (error) {
            toast.error("Error liking post");
        } finally {
            setLoading(false);
        }
    };

    return (

        <button onClick={toggleLike} className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground">
            <Heart className={`h-4 w-4 ${isLiked ? "fill-primary" : "fill-secondary"}`} />
        </button>
    );
}
