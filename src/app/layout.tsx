import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import { Suspense } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhimas Ferdiansyah",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-zinc-900`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-end">
            <Suspense fallback={<div>Loading...</div>}>
              <NavMenu />
            </Suspense>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
