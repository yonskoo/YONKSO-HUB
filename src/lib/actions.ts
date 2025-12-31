"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const publishSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string(),
  category: z.string(),
  tags: z.string(),
});

export async function publishScript(values: z.infer<typeof publishSchema>) {
  // In a real app, you'd validate and save to a database.
  // Here, we're just logging and simulating success.
  console.log("New script submitted:", values);

  // Revalidate the home page to show the new script (if data was persistent)
  revalidatePath("/");

  return { success: "Script published successfully." };
}

const reviewSchema = z.object({
  scriptId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10).max(500),
});

export async function submitReview(values: z.infer<typeof reviewSchema>) {
  const result = reviewSchema.safeParse(values);
  if (!result.success) {
    return { error: "Invalid data provided." };
  }
  // In a real app, save to a database.
  console.log("New review submitted:", result.data);

  // Revalidate the script's detail page
  revalidatePath(`/scripts/${values.scriptId}`);

  return { success: "Review submitted." };
}
