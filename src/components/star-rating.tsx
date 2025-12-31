"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  onRate?: (rating: number) => void;
  readOnly?: boolean;
  size?: number;
}

export function StarRating({
  rating,
  totalStars = 5,
  onRate,
  readOnly = true,
  size = 16,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  const handleClick = (index: number) => {
    if (!readOnly && onRate) {
      onRate(index);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const ratingValue = i + 1;
        const currentRating = hoverRating || rating;
        return (
          <Star
            key={i}
            className={cn(
              "transition-all",
              ratingValue <= currentRating
                ? "text-[hsl(var(--chart-4))] fill-[hsl(var(--chart-4))]"
                : "text-muted-foreground/30",
              !readOnly && "cursor-pointer hover:scale-125"
            )}
            style={{ width: size, height: size }}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(ratingValue)}
            aria-label={`Rate ${ratingValue} out of ${totalStars} stars`}
          />
        );
      })}
    </div>
  );
}
