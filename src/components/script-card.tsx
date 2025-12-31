import Link from "next/link";
import type { Script } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/star-rating";
import { User, ArrowRight } from "lucide-react";

const getAverageRating = (script: Script) => {
  if (script.ratings.length === 0) return 0;
  const total = script.ratings.reduce((acc, rating) => acc + rating.rating, 0);
  return total / script.ratings.length;
};

export function ScriptCard({ script }: { script: Script }) {
  const averageRating = getAverageRating(script);

  return (
    <Link href={`/scripts/${script.id}`} className="group block">
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-primary/20 hover:border-primary">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="font-headline text-lg mb-2 group-hover:text-primary transition-colors">
              {script.title}
            </CardTitle>
            <Badge variant="secondary">{script.category}</Badge>
          </div>
          <CardDescription className="flex items-center gap-2 text-xs">
            <User className="w-3 h-3" />
            <span>{script.author}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {script.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <StarRating rating={averageRating} />
            <span className="text-xs text-muted-foreground">
              ({script.ratings.length})
            </span>
          </div>
          <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
