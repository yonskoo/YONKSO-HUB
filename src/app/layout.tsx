import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "YONSKO",
  description: "Yonsko Digital Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background font-body antialiased relative">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px] -z-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-top bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,_hsl(var(--primary)/0.3),_transparent)] -z-10" />
        <main className="flex-grow">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
