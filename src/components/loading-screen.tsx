"use client";

import { useState, useEffect, useRef } from "react";

const loadingTexts = [
  "INITIALIZING YONSKO.HUB...",
  "CONNECTING TO MAINFRAME...",
];

export function LoadingScreen() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

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
          }, 200);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentTextIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    function autoCenter() {
      if (!logoRef.current || !containerRef.current) return;

      const logoWidth = logoRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;

      if (logoWidth > containerWidth) {
        setScale(containerWidth / logoWidth);
      } else {
        setScale(1);
      }
    }

    autoCenter();
    window.addEventListener("resize", autoCenter);
    return () => window.removeEventListener("resize", autoCenter);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="w-full flex justify-center overflow-hidden"
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
          }}
        >
          <pre
            ref={logoRef}
            className="font-mono leading-none select-none text-center"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              lineHeight: "1",
            }}
          >
{`
██╗   ██╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗ ██████╗ 
╚██╗ ██╔╝██╔═══██╗████╗  ██║██╔════╝██║ ██╔╝██╔═████╗
 ╚████╔╝ ██║   ██║██╔██╗ ██║███████╗█████╔╝ ██║██╔██║
  ╚██╔╝  ██║   ██║██║╚██╗██║╚════██║██╔═██╗ ████╔╝██║
   ██║   ╚██████╔╝██║ ╚████║███████║██║  ██╗╚██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
`}
          </pre>
        </div>
      </div>
      <div className="mt-4 text-lg h-8">
        <span>{displayedText}</span>
        <span
          className={`inline-block w-2 h-5 bg-primary ml-1 transition-opacity duration-300 ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </div>
    </div>
  );
}
useEffect(() => {
  function autoCenter() {
    if (!logoRef.current || !containerRef.current) return;

    const logoWidth = logoRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;

    if (logoWidth > containerWidth) {
      setScale(containerWidth / logoWidth);
    } else {
      setScale(1);
    }
  }

  autoCenter();
  window.addEventListener("resize", autoCenter);
  return () => window.removeEventListener("resize", autoCenter);
}, []);
