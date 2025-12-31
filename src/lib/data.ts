import type { Script } from "@/lib/types";

export const categories = ["Utility", "Combat", "Fun", "Farming"] as const;

export const defaultScript: Script = {
  id: "super-speed-script",
  title: "Super Speed Script",
  description: "This script gives your character super speed! Run faster than anyone in the game. Easy to use, just execute and you are ready to go. Works in most games.",
  code: `
-- Super Speed Script
local Player = game.Players.LocalPlayer
local Character = Player.Character or Player.CharacterAdded:Wait()
local Humanoid = Character:WaitForChild("Humanoid")

-- Configuration
local SUPER_SPEED = 200 -- Default is 16

-- Apply speed
Humanoid.WalkSpeed = SUPER_SPEED

print("Super Speed script activated! Your speed is now "..tostring(SUPER_SPEED))

-- You can add a loop to ensure it stays applied
while wait(1) do
    if Humanoid.WalkSpeed ~= SUPER_SPEED then
        Humanoid.WalkSpeed = SUPER_SPEED
    end
end
  `,
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