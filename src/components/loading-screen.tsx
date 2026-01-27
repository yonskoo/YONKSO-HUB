"use client";

import { useState, useEffect } from "react";

const loadingTexts = [
  "INITIALIZING YONSKO.HUB...",
  "CONNECTING TO MAINFRAME...",
];

export function LoadingScreen() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentTextIndex < loadingTexts.length) {
      const targetText = loadingTexts[currentTextIndex];
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(targetText.substring(0, i + 1));
        i++;
        if (i > targetText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentTextIndex((prev) => prev + 1);
          }, 200); // Wait a bit before showing next text
        }
      }, 50); // Typing speed

      return () => clearInterval(interval);
    }
  }, [currentTextIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="font-code text-primary text-center p-4">
        <pre className="whitespace-pre-wrap text-sm sm:text-base">
{`
██╗   ██╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗ ██████╗ 
╚██╗ ██╔╝██╔═══██╗████╗  ██║██╔════╝██║ ██╔╝██╔═████╗
 ╚████╔╝ ██║   ██║██╔██╗ ██║███████╗█████╔╝ ██║██╔██║
  ╚██╔╝  ██║   ██║██║╚██╗██║╚════██║██╔═██╗ ████╔╝██║
   ██║   ╚██████╔╝██║ ╚████║███████║██║  ██╗╚██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
`}
</pre>
        <div className="mt-4 text-lg h-8">
          <span>{displayedText}</span>
          <span
            className={`inline-block w-2 h-5 bg-primary ml-1 transition-opacity duration-300 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
}
