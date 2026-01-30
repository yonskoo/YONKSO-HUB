"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Youtube, CheckCircle, Hourglass } from "lucide-react";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";

const mainScript = {
  name: "Nyxara",
  features: [
    "Inf Jump",
    "No Clip",
    "Invisible (New)",
    "Fly",
    "Fly Speed Slider",
    "TPWalk Slider (New)",
    "Jump Power Slider",
    "Gravity Slider",
    "Teleport to Player",
    "Teleport to Cursor",
    "ESP Players",
    "ESP Color Picker",
    "Aimbot",
    "And Many More!!",
  ],
  code: "loadstring(game:HttpGet('https://raw.githubusercontent.com/yonskoo/Nyxara-Legacy/refs/heads/main/main.lua'))()",
};

const trollingGui = {
    name: "FE Trolling GUI",
    features: [
      "Trolls Players",
      "Admins Tab",
      "Other Scripts GUI Tab",
      "Main Trolls Tab",
      "GENESIS Tab",
      "N.O Bypass",
      "Supported Games Tab",
      "Bypass AC Tab",
      "And Many More!!",
   ],
    code: "loadstring(game:HttpGet('https://raw.githubusercontent.com/yonskoo/FE-Trolling-GUI/refs/heads/main/FE%20Trolling%20GUI'))()",
};

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 4.162 2.536 7.73 6.138 9.14-1.21-1.353-1.34-4.032.102-5.422.34-.326.746-.57 1.18-.737-2.316-.27-4.723-1.12-4.723-5.114 0-1.13.404-2.053 1.067-2.776-.107-.272-.463-1.314.102-2.735 0 0 .875-.28 2.866 1.06.83-.23 1.72-.346 2.602-.35.882.004 1.773.12 2.602.35 1.99-1.34 2.865-1.06 2.865-1.06.565 1.42.21 2.463.102 2.735.663.723 1.066 1.646 1.066 2.776 0 3.994-2.407 4.844-4.723 5.114.434.167.84.41 1.18.737 1.442 1.39 1.312 4.07.102 5.422C19.464 19.73 22 16.162 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.162 2.536 7.73 6.138 9.14" />
      <path d="M8.5 14.5s.5-1 1-1.5c-2-1.5-2.5-3-2.5-3s-1 2.5 0 4.5" />
      <path d="M15.5 14.5s-.5-1-1-1.5c2-1.5 2.5-3 2.5-3s1 2.5 0 4.5" />
    </svg>
  );

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

        {/* Trolling GUI Script Table */}
        <div className="w-full">
            <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-2">
                <h2 className="text-lg font-bold text-primary tracking-widest">Trolling GUI</h2>
            </div>
            <div className="w-full rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-6 green-glow-sm">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                {trollingGui.features.map((feature, index) => (
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
                textToCopy={trollingGui.code}
                className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-accent rounded-lg green-glow transition-all duration-300 transform hover:scale-105"
                >
                COPY SCRIPT
                </CopyButton>
            </div>
        </div>

        {/* Coming Soon Table */}
        <div className="w-full">
            <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-2">
                <h2 className="text-lg font-bold text-primary tracking-widest">Coming Soon...</h2>
            </div>
            <div className="w-full rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-6 green-glow-sm flex items-center justify-center">
                <div className="flex items-center gap-2 text-lg text-white/60">
                    <Hourglass className="h-6 w-6" />
                    <span>New script on the way!</span>
                </div>
            </div>
        </div>
      </div>

      <footer className="w-full max-w-lg space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row gap-4">
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
          <Button
            asChild
            variant="link"
            className="w-full text-white/60 hover:text-primary transition-colors"
          >
            <Link
              href="https://discord.gg/JMuBMcvrK6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon className="mr-2 h-5 w-5" />
              DISCORD SERVER
            </Link>
          </Button>
        </div>
        <div className="text-xs text-white/40 tracking-wider">
          V2.0.24 - PREMIUM EDITION
        </div>
        <div className="text-xs text-white/40 tracking-wider">
          © {new Date().getFullYear()} YONSKO. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
