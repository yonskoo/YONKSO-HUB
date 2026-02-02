import type { Metadata, Viewport } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YONSKO - AI Code Hub",
    template: "%s | YONSKO"
  },
  description: "Yonsko Digital Hub - AI-powered code generation platform for Roblox scripts",
  keywords: ["AI", "code generation", "Roblox", "scripts", "Nyxara", "FE Trolling GUI"],
  authors: [{ name: "yonskoo" }],
  creator: "yonskoo",
  metadataBase: new URL("https://yonkso-hub.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yonkso-hub.vercel.app",
    siteName: "YONSKO HUB",
    title: "YONSKO - AI Code Hub",
    description: "AI-powered code generation platform for Roblox scripts",
  },
  twitter: {
    card: "summary_large_image",
    title: "YONSKO - AI Code Hub",
    description: "AI-powered code generation platform for Roblox scripts",
  },
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(150 100% 50%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(210 40% 2%)" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${orbitron.variable} ${roboto.variable} min-h-screen flex flex-col bg-background font-sans antialiased relative`}
      >
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-top bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,_hsl(var(--primary)/0.3),_transparent)] -z-10" />
        <main className="flex-grow">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
