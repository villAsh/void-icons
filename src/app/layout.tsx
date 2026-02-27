import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import { SmoothScrolling } from "@/components/smooth-scrolling";

const hindSans = Hind({
  variable: "--font-hind-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Void Icons - Beautiful Animated SVG Icons",
  description: "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hindSans.variable} antialiased`}>
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
