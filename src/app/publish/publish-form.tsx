"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { publishScript } from "@/lib/actions";
import { categories } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const categoryEnum = categories as [string, ...string[]];

const publishSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(100, "Title cannot exceed 100 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(1000, "Description cannot exceed 1000 characters."),
  code: z
    .string()
    .min(50, "Script code must be at least 50 characters."),
  category: z.enum(categoryEnum, {
    required_error: "Please select a category.",
  }),
  tags: z
    .string()
    .min(1, "Please add at least one tag.")
    .refine((s) => s.split(",").every((tag) => tag.trim().length > 0), {
      message: "Tags must be a comma-separated list of words.",
    })
    .refine((s) => s.split(",").length <= 5, {
      message: "You can add up to 5 tags.",
    }),
});

export function PublishForm() {
  const [isPending, startTransition] = React.useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof publishSchema>>({
    resolver: zodResolver(publishSchema),
    defaultValues: {
      title: "",
      description: "",
      code: "",
      tags: "",
    },
  });

  const onSubmit = (values: z.infer<typeof publishSchema>) => {
    startTransition(async () => {
      const result = await publishScript(values);

      if (result?.error) {
        toast({
          title: "Error publishing script",
          description: result.error,
          variant: "destructive",
        });
      } else if (result.success && result.script) {
        // Save to local storage
        try {
          const existingScripts = JSON.parse(
            localStorage.getItem("userScripts") || "[]"
          );
          localStorage.setItem(
            "userScripts",
            JSON.stringify([result.script, ...existingScripts])
          );
        } catch (e) {
          console.error("Could not save script to local storage", e);
        }

        toast({
          title: "Success!",
          description: "Your script has been published.",
        });
        router.push("/");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Script Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Awesome Auto-Collector" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a script category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what your script does, how to use it, and any special features."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Script Code</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Paste your Lua script code here."
                  className="min-h-[200px] font-code"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="e.g., farming, pvp, fun" {...field} />
              </FormControl>
              <FormDescription>
                Add up to 5 comma-separated tags to help others find your
                script.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Publishing..." : "Publish Script"}
        </Button>
      </form>
    </Form>
  );
}
