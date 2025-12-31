"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Script } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";
import { CodeBlock } from "@/components/code-block";
import { User, Calendar, Tag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const getAverageRating = (script: Script) => {
  if (script.ratings.length === 0) return 0;
  const total = script.ratings.reduce((acc, rating) => acc + rating.rating, 0);
  return total / script.ratings.length;
};

export default function ScriptDetailsPage() {
  const params = useParams();
  const { id } = params;
  const [script, setScript] = useState<Script | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof id !== "string") return;

    try {
      const savedScripts = localStorage.getItem("userScripts");
      if (savedScripts) {
        const allScripts: Script[] = JSON.parse(savedScripts);
        const foundScript = allScripts.find((s) => s.id === id);
        if (foundScript) {
          setScript(foundScript);
        } else {
          setScript(null);
        }
      }
    } catch (e) {
      console.error("Failed to load script from local storage", e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-48 w-full" />
                </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2">
                    <Skeleton className="h-12 w-20" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
        </div>
      </div>
    </div>
  );
}
