import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        < section className="w-full py-12 md:py-18 " >
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Share Your Thoughts With The World
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Create, share, and discover posts from people around the globe. Join our community and start sharing
                                your ideas today.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" asChild>
                                <Link href="#">Get Started</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                            <div className="relative h-full w-full rounded-xl border bg-background p-4 shadow-xl">
                                <div className="space-y-4">
                                    <div className="h-8 w-24 rounded-full bg-muted"></div>
                                    <div className="h-4 w-full rounded-full bg-muted"></div>
                                    <div className="h-4 w-3/4 rounded-full bg-muted"></div>
                                    <div className="h-32 w-full rounded-lg bg-muted"></div>
                                    <div className="flex gap-2">
                                        <div className="h-8 w-8 rounded-full bg-muted"></div>
                                        <div className="h-8 w-24 rounded-full bg-muted"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero