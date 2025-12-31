import { notFound } from "next/navigation";
import { scripts } from "@/lib/data";
import type { Script } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";
import { CodeBlock } from "@/components/code-block";
import { User, Calendar, Tag, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ReviewForm } from "./review-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getAverageRating = (script: Script) => {
  if (script.ratings.length === 0) return 0;
  const total = script.ratings.reduce((acc, rating) => acc + rating.rating, 0);
  return total / script.ratings.length;
};

export default function ScriptDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const script = scripts.find((s) => s.id === params.id);

  if (!script) {
    notFound();
  }

  const averageRating = getAverageRating(script);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-3xl font-headline">
                  {script.title}
                </CardTitle>
                <Badge variant="default">{script.category}</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {script.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />{" "}
                  {new Date(script.createdAt).toLocaleDateString()}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{script.description}</p>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {script.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <CodeBlock code={script.code} />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Rating</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold">
                {averageRating.toFixed(1)}
              </span>
              <StarRating rating={averageRating} size={24} />
              <span className="text-sm text-muted-foreground">
                from {script.ratings.length} reviews
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ReviewForm scriptId={script.id} />
              <Separator />
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
                {script.ratings.length > 0 ? (
                  script.ratings.map((review) => (
                    <div key={review.id} className="flex gap-3 text-sm">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={review.userAvatar} alt={review.userId} />
                        <AvatarFallback>{review.userId.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold">{review.userId}</span>
                          <StarRating rating={review.rating} size={14} />
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No reviews yet. Be the first!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
