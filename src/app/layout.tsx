import type { Metadata, Viewport } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";
import Footer from "@/components/system/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const hindSans = Hind({
  variable: "--font-hind-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Void Icons - Beautiful Animated SVG Icons for React",
    template: "%s | Void Icons",
  },
  description:
    "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications. Lightweight, performant, and open-source.",
  keywords: [
    "animated icons",
    "SVG icons",
    "React icons",
    "Next.js icons",
    "Lucide icons",
    "SVG animations",
    "Void Icons",
    "web design",
    "micro-interactions",
    "frontend development",
  ],
  authors: [{ name: "Void Icons Team" }],
  creator: "Void Icons",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://void-icons.vercel.app",
    siteName: "Void Icons",
    title: "Void Icons - Beautiful Animated SVG Icons for React",
    description:
      "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications.",
    images: [
      {
        url: "/void-icons-home.png",
        width: 1200,
        height: 630,
        alt: "Void Icons - Animated SVG Icons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Void Icons - Beautiful Animated SVG Icons for React",
    description:
      "A meticulously crafted collection of animated SVG icons built for modern React and Next.js applications.",
    images: ["/void-icons-home.png"],
    creator: "@vilas_dev_x",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://void-icons.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Void Icons",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
