"use client";

import { useState, useEffect } from "react";
import { ScriptBrowser } from "@/components/script-browser";
import type { Script } from "@/lib/types";
import { defaultScript } from "@/lib/data";

export default function Home() {
  const [userScripts, setUserScripts] = useState<Script[]>([defaultScript]);

  useEffect(() => {
    try {
      const savedScripts = localStorage.getItem("userScripts");
      if (savedScripts) {
        const parsedScripts = JSON.parse(savedScripts);
        const allScripts = [defaultScript, ...parsedScripts.filter((s: Script) => s.id !== defaultScript.id)];
        setUserScripts(allScripts);
      }
    } catch (e) {
      console.error("Could not load scripts from local storage", e);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold font-headline text-primary">
          yonsko hub
        </h1>
      </div>
      <ScriptBrowser scripts={userScripts} />
    </div>
  );
}
