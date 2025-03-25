import { CheckCircle, MessageSquare, Users, Zap } from 'lucide-react';
import React from 'react'

const FeaturesSection = () => {
    return (
        < section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Everything you need to express yourself
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform provides all the tools you need to create and share your content with the world.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="grid gap-6">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="h-8 w-8 text-primary" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Easy Post Creation</h3>
                                <p className="text-muted-foreground">
                                    Create beautiful posts with our intuitive editor. Add images, format text, and more.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Users className="h-8 w-8 text-primary" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Community Engagement</h3>
                                <p className="text-muted-foreground">
                                    Connect with like-minded individuals. Comment, like, and share posts from others.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="flex items-start gap-4">
                            <Zap className="h-8 w-8 text-primary" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Real-time Updates</h3>
                                <p className="text-muted-foreground">
                                    Get notified instantly when someone interacts with your content or posts something new.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MessageSquare className="h-8 w-8 text-primary" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Personalized Feed</h3>
                                <p className="text-muted-foreground">
                                    Discover content tailored to your interests with our smart recommendation system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FeaturesSection;