"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import PostCard from "@/components/post-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchResults() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;

        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`/api/posts/search?q=${searchQuery}`);

                console.log(res.data);

                if (res.status !== 200) {
                    toast("No results found.");
                    return;
                }

                if (res.data.data.length === 0) {
                    toast("No results found.");
                    setPosts([]);
                    return;
                }
                setPosts(res.data.data);
            } catch (error: Error | any) {
                if (error.response.data.statusCode) {
                    toast("No results found.");
                    setPosts([]);
                    return;
                }
                toast("Error fetching search results.");
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }


    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Search Posts</CardTitle>
                    <CardDescription>Find posts by title or content</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search posts..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Searching..." : "Search"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <h2 className="text-xl font-bold">Search Results for "{searchQuery}"</h2>
            {loading ? <Skeleton className="h-7 w-full" /> : posts.map((post) => <PostCard key={post._id} post={post} />)}
            {!loading && posts.length === 0 && <p>No Posts Found</p>}
        </div>
    );


}
