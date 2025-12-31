"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Youtube, CheckCircle, Hourglass } from "lucide-react";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";

const mainScript = {
  name: "Main Script",
  features: [
    "Inf Jump",
    "No Clip",
    "Fly",
    "Fly Speed Slider",
    "Walk Speed Slider",
    "Jump Power Slider",
    "Gravity Slider",
    "Teleport to Player",
    "Teleport to Cursor",
    "ESP Players",
    "ESP Color Picker",
    "Aimbot",
  ],
  code: 'loadstring(game:HttpGet("https://pastebin.com/raw/FgdtsFbv"))()',
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8 text-center animate-fade-in">
      <header className="space-y-2">
        <h1
          className="text-7xl md:text-8xl font-display font-black tracking-wider text-white glitch"
          data-text="YONSKO"
        >
          YONSKO
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-widest text-white/80">
          DIGITAL HUB
        </p>
      </header>

      <div className="w-full max-w-lg space-y-8">
        {/* Main Script Table */}
        <div className="w-full">
          <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-2">
             <h2 className="text-lg font-bold text-primary tracking-widest">Main Script</h2>
          </div>
          <div className="w-full rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-6 green-glow-sm">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
              {mainScript.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <CopyButton
              textToCopy={mainScript.code}
              className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-accent rounded-lg green-glow transition-all duration-300 transform hover:scale-105"
            >
              COPY SCRIPT
            </CopyButton>
          </div>
        </div>

        {/* New Script Table */}
        <div className="w-full">
            <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-2">
                <h2 className="text-lg font-bold text-primary tracking-widest">New Script</h2>
            </div>
            <div className="w-full flex items-center justify-center text-center h-64 rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-6 green-glow-sm">
                <div className="flex flex-col items-center gap-4 text-white/70">
                    <Hourglass className="h-12 w-12 text-primary" />
                    <h3 className="text-2xl font-bold tracking-widest">COMING SOON</h3>
                    <p className="text-sm">A new script is under development and will be released soon. Stay tuned!</p>
                </div>
            </div>
        </div>
      </div>

      <footer className="w-full max-w-lg space-y-4 pt-4">
        <Button
          asChild
          variant="link"
          className="w-full text-white/60 hover:text-primary transition-colors"
        >
          <Link
            href="https://youtube.com/channel/UCyiSESnnGA6MSF2dWziW_pA?si=KTXFJ2wBSTeT6RON"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="mr-2" />
            YOUTUBE CHANNEL
          </Link>
        </Button>
        <div className="text-xs text-white/40 tracking-wider">
          V2.0.24 - PREMIUM EDITION
        </div>
      </footer>
    </div>
  );
}
