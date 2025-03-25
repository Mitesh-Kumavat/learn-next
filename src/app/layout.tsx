import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700', '100', '200', '300', '500', '600', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Learning Next.js",
  description: "Learning Next.js by creating a simple post generator app",
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
      </body>
    </html>
  );
}
