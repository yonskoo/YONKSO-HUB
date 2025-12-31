"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitReview } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { StarRating } from "@/components/star-rating";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const reviewSchema = z.object({
  comment: z
    .string()
    .min(10, "Comment must be at least 10 characters.")
    .max(500, "Comment cannot exceed 500 characters."),
});

export function ReviewForm({ scriptId }: { scriptId: string }) {
  const [rating, setRating] = useState(0);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { comment: "" },
  });

  const onSubmit = (values: z.infer<typeof reviewSchema>) => {
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      const result = await submitReview({
        scriptId,
        rating,
        comment: values.comment,
      });

      if (result?.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Your review has been submitted.",
        });
        form.reset();
        setRating(0);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium">Leave a review</p>
          <StarRating rating={rating} onRate={setRating} readOnly={false} size={28} />
        </div>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts on this script..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </Form>
  );
}
