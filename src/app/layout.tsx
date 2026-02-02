import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "YONKSO HUB - AI Code Creation",
    template: "%s | YONKSO HUB",
  },
  description: "Yonsko Digital Hub - Premium Roblox scripts and AI-powered code generation platform",
  keywords: ["Roblox", "scripts", "AI", "code generation", "Nyxara", "FE Trolling GUI", "Yonsko"],
  authors: [{ name: "yonskoo", url: "https://github.com/yonskoo" }],
  creator: "yonskoo",
  publisher: "YONKSO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yonkso-hub.vercel.app",
    siteName: "YONKSO HUB",
    title: "YONKSO HUB - AI Code Creation",
    description: "Premium Roblox scripts and AI-powered code generation platform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YONKSO HUB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YONKSO HUB - AI Code Creation",
    description: "Premium Roblox scripts and AI-powered code generation platform",
    images: ["/og-image.png"],
    creator: "@yonskoo",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
  alternates: {
    canonical: "https://yonkso-hub.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body 
        className={`${inter.variable} ${orbitron.variable} min-h-screen flex flex-col bg-background font-sans antialiased relative`}
      >
        {/* Grid Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-20 pointer-events-none" 
          aria-hidden="true"
        />
        {/* Radial Gradient Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-top bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,_hsl(var(--primary)/0.3),_transparent)] -z-10 pointer-events-none" 
          aria-hidden="true"
        />
        <main className="flex-grow relative z-0">
          {children}
        </main>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
