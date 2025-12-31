"use client";

import { useState, useEffect, ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends ButtonProps {
  textToCopy: string;
  children?: ReactNode;
}

export function CopyButton({ textToCopy, children, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
  };

  const buttonContent = (
    <>
      {hasCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      {children}
    </>
  );

  if (!children) {
    return (
       <TooltipProvider>
        <Tooltip open={hasCopied ? true : undefined}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className={cn("h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent", className)}
              onClick={copyToClipboard}
              {...props}
            >
              {hasCopied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy code</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copied!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
  
  return (
    <TooltipProvider>
      <Tooltip open={hasCopied}>
        <TooltipTrigger asChild>
          <Button
            onClick={copyToClipboard}
            className={cn("gap-2", className)}
            {...props}
          >
            {buttonContent}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copied to clipboard!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
