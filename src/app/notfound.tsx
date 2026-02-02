import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center animate-fade-in">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-primary opacity-50" />
        </div>
        
        <h1 className="text-6xl font-bold tracking-wider text-white glitch" data-text="404">
          404
        </h1>
        
        <h2 className="text-2xl font-medium text-white/80 tracking-widest">
          PAGE NOT FOUND
        </h2>
        
        <p className="text-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 green-glow"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            BACK TO HOME
          </Link>
        </Button>
      </div>
    </div>
  );
}
