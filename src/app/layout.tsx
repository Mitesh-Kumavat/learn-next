import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ['400', '700', '100', '200', '300', '500', '600', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PostPlatform",
  description: "Create and share your posts with the world",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
