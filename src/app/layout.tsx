import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhedya 3.0",
  description: "Abhedya: The Cryptic Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="sticky top-0">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
