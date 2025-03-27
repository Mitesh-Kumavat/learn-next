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
                <SidebarInset >
                    <Header />
                    <main className="p-6 mt-16">{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}

