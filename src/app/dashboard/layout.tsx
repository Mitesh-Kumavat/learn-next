import { SidebarTrigger } from "@/components/ui/sidebar"
import type React from "react"
import type { Metadata } from "next"
import { MainSidebar } from "@/components/main-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/components/main-header"


export const metadata: Metadata = {
    title: "PostPlatform",
    description: "A simple postPlatform",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex overflow-hidden h-fit w-full">
            <SidebarProvider>
                <MainSidebar />
                <SidebarInset className="bg-background">
                    <Header />
                    <main className="flex-1 p-4 mt-16">{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

