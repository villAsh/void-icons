import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import { SmoothScrolling } from "@/components/system/smooth-scrolling";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const hindSans = Hind({
  variable: "--font-hind-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Void Icons - Beautiful Animated SVG Icons",
  description:
    "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hindSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <Navbar />
            {children}
          </SmoothScrolling>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
