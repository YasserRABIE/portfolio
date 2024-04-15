import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "YasserRABIE | Developer && Sudent",
    description: "Yasser Rabie A front-end developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
