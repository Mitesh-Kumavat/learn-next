import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        id: "item-1",
        question: "Is it free to create an account?",
        answer: "Yes, creating an account on our platform is completely free. You can start creating and sharing posts right away without any cost."
    },
    {
        id: "item-2",
        question: "How do I create my first post?",
        answer: "After signing up, you can create your first post by clicking on the 'New Post' button on your dashboard. Our intuitive editor makes it easy to format text, add images, and more."
    },
    {
        id: "item-3",
        question: "Can I edit or delete my posts?",
        answer: "Yes, you have full control over your content. You can edit or delete your posts at any time from your profile or directly from the post itself."
    },
    {
        id: "item-4",
        question: "How does the recommendation system work?",
        answer: "Our recommendation system analyzes your interests based on your interactions with posts and suggests content that you might find interesting. The more you use the platform, the better our recommendations become."
    }
];

const FaqSection = () => {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Find answers to common questions about our platform.
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl space-y-8 py-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
