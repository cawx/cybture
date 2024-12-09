import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className="max-w-[1550px] mx-auto px-4">
          <div className="flex">
            <Sidebar />
            <main className="flex-1 min-w-0 px-4">{children}</main>
            <aside className="hidden xl:block w-[250px] px-4 border-l border-white/20">
              <div className="sticky top-0 pt-4">
                <h3 className="text-xl font-semibold text-white/95">
                  On this page
                </h3>
                <nav className="pt-3">
                  <p>test</p>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
