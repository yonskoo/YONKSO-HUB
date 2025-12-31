"use client";

import { useState, useEffect } from "react";
import { ScriptBrowser } from "@/components/script-browser";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import type { Script } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [userScripts, setUserScripts] = useState<Script[]>([]);
  const heroImage = placeholderImages.placeholderImages.find(
    (p) => p.id === "hero"
  );

  useEffect(() => {
    try {
      const savedScripts = localStorage.getItem("userScripts");
      if (savedScripts) {
        setUserScripts(JSON.parse(savedScripts));
      }
    } catch (e) {
      console.error("Could not load scripts from local storage", e);
    }
  }, []);

  return (
    <>
      <section className="relative bg-card overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 md:py-20">
            <div className="relative z-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
                Roblox Script Hub
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
                The ultimate community platform to discover, share, and rate the
                best scripts for Roblox.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  priority
                  className="object-cover rounded-lg"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {userScripts.length > 0 ? (
          <ScriptBrowser scripts={userScripts} />
        ) : (
          <div className="text-center py-16 text-muted-foreground bg-card rounded-lg border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              You haven't published any scripts yet.
            </h3>
            <p className="mb-4">Click the button below to share your first script with the community!</p>
            <Button asChild>
                <Link href="/publish">Publish a Script</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
