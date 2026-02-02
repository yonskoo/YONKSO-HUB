"use client";

import { useState, useEffect, Suspense } from "react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Youtube, CheckCircle, Hourglass, Sparkles, Code2, Zap } from "lucide-react";
import Link from "next/link";
import { LoadingScreen } from "@/components/loading-screen";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface ScriptData {
  name: string;
  features: string[];
  code: string;
  icon: React.ReactNode;
  color: string;
}

// Data
const mainScript: ScriptData = {
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
  icon: <Sparkles className="h-6 w-6" />,
  color: "from-emerald-500/20 to-teal-500/20",
};

const trollingGui: ScriptData = {
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
    "Bypass Lag Back (In Most Games)",
    "And Many More!!",
  ],
  code: "loadstring(game:HttpGet('https://raw.githubusercontent.com/yonskoo/FE-Trolling-GUI/refs/heads/main/FE%20Trolling%20GUI'))()",
  icon: <Code2 className="h-6 w-6" />,
  color: "from-violet-500/20 to-purple-500/20",
};

// Components
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

const ScriptCard = ({ script, index }: { script: ScriptData; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full group"
    >
      <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-3 flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${script.color} text-primary`}>
          {script.icon}
        </div>
        <h2 className="text-xl font-bold text-primary tracking-wide">{script.name}</h2>
      </div>
      <div className="w-full rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-6 space-y-6 green-glow-sm relative overflow-hidden">
        {/* Hover gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${script.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        <div className="relative z-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-left">
            {script.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-white/10">
            <CopyButton
              textToCopy={script.code}
              className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-accent rounded-lg green-glow transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              COPY SCRIPT
            </CopyButton>
            <p className="text-xs text-white/40 text-center mt-2 font-mono truncate">
              {script.code.substring(0, 50)}...
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ComingSoonCard = () => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="w-full"
  >
    <div className="w-full bg-card/80 backdrop-blur-sm border-primary/50 border-t border-x rounded-t-lg px-4 py-3">
      <h2 className="text-xl font-bold text-primary tracking-wide flex items-center gap-2">
        <Zap className="h-5 w-5" />
        Coming Soon...
      </h2>
    </div>
    <div className="w-full rounded-b-2xl border-x border-b border-primary/50 bg-card/80 backdrop-blur-sm p-8 flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center gap-3 text-lg text-white/60">
        <div className="relative">
          <Hourglass className="h-8 w-8 animate-pulse" />
          <div className="absolute inset-0 blur-lg bg-primary/30 rounded-full" />
        </div>
        <span>New script on the way!</span>
        <p className="text-sm text-white/40">Stay tuned for updates</p>
      </div>
    </div>
  </motion.article>
);

const SocialLinks = () => (
  <nav className="w-full max-w-lg space-y-4 pt-4" aria-label="Social links">
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        asChild
        variant="outline"
        className="w-full group relative overflow-hidden border-white/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
      >
        <Link
          href="https://youtube.com/channel/UCyiSESnngA6MSF2dWziW_pA?si=KTXFJ2wBSTeT6RON"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-2"
        >
          <Youtube className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-red-400 transition-colors">YOUTUBE CHANNEL</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="w-full group relative overflow-hidden border-white/20 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
      >
        <Link
          href="https://discord.gg/JMuBMcvrK6"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-2"
        >
          <DiscordIcon className="h-5 w-5 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-indigo-400 transition-colors">DISCORD SERVER</span>
        </Link>
      </Button>
    </div>
  </nav>
);

// JSON-LD Structured Data
const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YONKSO HUB",
    url: "https://yonkso-hub.vercel.app",
    description: "Premium Roblox scripts and AI-powered code generation platform",
    author: {
      "@type": "Person",
      name: "yonskoo",
    },
    sameAs: [
      "https://youtube.com/channel/UCyiSESnngA6MSF2dWziW_pA",
      "https://discord.gg/JMuBMcvrK6",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Main Component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Reduced loading time from 3500ms to 1500ms for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StructuredData />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8 text-center"
          >
            {/* Header */}
            <header className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-black tracking-wider text-white glitch font-[family-name:var(--font-orbitron)]"
                data-text="YONSKO"
              >
                YONSKO
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl md:text-2xl font-medium tracking-widest text-white/80"
              >
                DIGITAL HUB
              </motion.p>
            </header>

            {/* Scripts Grid */}
            <section 
              className="w-full max-w-4xl space-y-6"
              aria-label="Available scripts"
            >
              <div className="grid gap-6">
                <ScriptCard script={mainScript} index={0} />
                <ScriptCard script={trollingGui} index={1} />
                <ComingSoonCard />
              </div>
            </section>

            {/* Social Links */}
            <SocialLinks />

            {/* Footer */}
            <footer className="w-full max-w-lg space-y-2 pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 tracking-wider font-mono">
                v2.0.25 — PREMIUM EDITION
              </p>
              <p className="text-xs text-white/40 tracking-wider">
                © {new Date().getFullYear()} YONSKO. All Rights Reserved.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
