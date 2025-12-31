import { ScriptBrowser } from "@/components/script-browser";
import { scripts } from "@/lib/data";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { Card } from "@/components/ui/card";

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(
    (p) => p.id === "hero"
  );

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
        <ScriptBrowser scripts={scripts} />
      </div>
    </>
  );
}
