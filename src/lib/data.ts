
import type { Script } from "@/lib/types";

export const categories = ["Utility", "Combat", "Fun", "Farming"] as const;

export const defaultScript: Script = {
  id: "super-speed-script",
  title: "Super Speed Script",
  description: "This script gives your character super speed! Run faster than anyone in the game. Easy to use, just execute and you are ready to go. Works in most games.",
  code: 'loadstring(game:HttpGet("https://pastebin.com/raw/FgdtsFbv"))()',
  author: "ScriptMaster",
  category: "Utility",
  tags: ["speed", "fun", "utility"],
  ratings: [
    {
      id: "1",
      userId: "TestUser1",
      userAvatar: "https://i.pravatar.cc/150?u=TestUser1",
      rating: 5,
      comment: "Works perfectly! I'm so fast now!",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      userId: "TestUser2",
      userAvatar: "https://i.pravatar.cc/150?u=TestUser2",
      rating: 4,
      comment: "Really fun script, sometimes it resets though.",
      createdAt: new Date().toISOString(),
    },
  ],
  createdAt: new Date().toISOString(),
};

export const scripts: Script[] = [];
