import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Suspense } from "react";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontier Vista",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.className}>
      <body>
        <Navbar />
        <div className="min-h-[80vh]">
          <Suspense>{children}</Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
