"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Sparkles, Youtube } from "lucide-react";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const script = 'loadstring(game:HttpGet("https://pastebin.com/raw/FgdtsFbv"))()';

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
        <h1 className="text-7xl md:text-8xl font-display font-black tracking-wider text-white glitch" data-text="YONSKO">
          YONSKO
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-widest text-white/80">
          DIGITAL HUB
        </p>
      </header>

      <div className="w-full max-w-lg rounded-2xl border border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-4 green-glow-sm">
        <h2 className="flex items-center justify-center gap-2 text-sm font-bold tracking-[0.2em] text-primary">
          <Sparkles className="h-4 w-4" />
          SCRIPT
          <Sparkles className="h-4 w-4" />
        </h2>
        <div className="bg-black/50 rounded-lg p-4 text-left font-code text-white/90 relative">
          <pre className="whitespace-pre-wrap break-all">{script}</pre>
        </div>
        <CopyButton
          textToCopy={script}
          className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-accent rounded-lg green-glow transition-all duration-300 transform hover:scale-105"
        >
          COPY CODE
        </CopyButton>
      </div>

      <footer className="w-full max-w-lg space-y-4 pt-4">
        <Button
          asChild
          variant="link"
          className="w-full text-white/60 hover:text-primary transition-colors"
        >
          <Link href="#">
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
