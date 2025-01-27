import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ExtraSidebar } from "./components/ExtraSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cybture",
  description: "for ctf nerds",
  icons: {
    icon: "/cybture.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <Navbar />
        <div className="max-w-[1550px] mx-auto px-4">
          <div className="flex gap-x-4">
            <div className="hidden md:block sticky top-0 h-[calc(100vh-4rem)]">
              <Sidebar />
            </div>

            <main className="flex-1 min-w-0 py-4">{children}</main>

            <ExtraSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
