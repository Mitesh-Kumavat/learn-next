"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import axios from "axios"

export default function CreatePostPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const post = await axios.post("/api/posts/create", formData);
            if (post.status !== 201) {
                toast("An error occurred while creating your post.")
            }

            toast("Post created", {
                description: "Your post has been created successfully.",
            })

        } catch (error: Error | any) {
            console.log(error.response.data.message);
            toast("Error", {
                description: "There was an error creating your post.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold ">Create a New Post</h2>
            <Card className="max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle>Create a New Post</CardTitle>
                    <CardDescription>Share your thoughts with the community</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Post Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter post title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Write your post content here..."
                                value={formData.description}
                                onChange={handleChange}
                                rows={6}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="mt-5 " disabled={isSubmitting}>
                            {isSubmitting ? "Creating..." : "Create Post"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

