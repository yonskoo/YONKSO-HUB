
import type { Script } from "@/lib/types";

export const categories = ["Utility", "Combat", "Fun", "Farming"] as const;

export const defaultScript: Script = {
  id: "main-script",
  title: "Main Script",
  description: "Features: Inf jump, no clip, fly, fly speed slider, walk speed slider, jump power slider, gravity slider, teleport to selected player, teleport to mouse cursor location, esp players, esp color picker, aimbot.",
  code: 'loadstring(game:HttpGet("https://pastebin.com/raw/FgdtsFbv"))()',
  author: "ScriptMaster",
  category: "Utility",
  tags: ["inf jump", "noclip", "fly", "aimbot", "esp"],
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
