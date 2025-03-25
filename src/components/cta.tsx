import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        < section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground" >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Ready to start sharing your ideas?
                        </h2>
                        <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Join thousands of creators and readers on our platform today.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="#">Sign Up Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cta