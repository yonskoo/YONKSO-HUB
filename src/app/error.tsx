"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center animate-fade-in">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertTriangle className="h-24 w-24 text-destructive opacity-50" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-wider text-white">
          SOMETHING WENT WRONG
        </h1>
        
        <p className="text-white/60">
          An error occurred while loading this page.
        </p>

        {error.message && (
          <div className="bg-card/50 border border-destructive/50 rounded-lg p-4">
            <p className="text-sm text-destructive font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        <Button
          onClick={reset}
          className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 green-glow"
        >
          <RefreshCcw className="h-4 w-4 mr-2" />
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
}
