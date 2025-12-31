import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Bot className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold font-headline text-foreground">
            Roblox Script Hub
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Browse</Link>
          </Button>
          <Button asChild>
            <Link href="/publish">Publish Script</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
