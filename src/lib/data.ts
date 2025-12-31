import type { Script } from "@/lib/types";

export const categories = ["Utility", "Combat", "Fun", "Farming"] as const;

export const scripts: Script[] = [
  {
    id: "auto-farm-pro",
    title: "Auto-Farm Pro",
    description:
      "An advanced auto-farming script that works with most simulator games. Features customizable paths and automatic selling.",
    code: `local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()

local function farmResource(resource)
    -- Complex farming logic here
    print("Farming: " .. resource.Name)
    wait(2)
    print("Finished farming: " .. resource.Name)
end

while true do
    for _, resource in pairs(workspace.Resources:GetChildren()) do
        farmResource(resource)
    end
    print("Cycle complete, selling items...")
    wait(10)
end`,
    author: "ScripterDude123",
    category: "Farming",
    tags: ["simulator", "automation", "farming"],
    createdAt: "2023-10-26T10:00:00Z",
    ratings: [
      {
        id: "r1-1",
        userId: "GamerX",
        userAvatar: "/avatars/avatar-1.png",
        rating: 5,
        comment: "This is the best auto-farm script I've ever used!",
        createdAt: "2023-10-27T10:00:00Z",
      },
      {
        id: "r1-2",
        userId: "RobloxFan",
        userAvatar: "/avatars/avatar-2.png",
        rating: 4,
        comment: "Works great, but sometimes gets stuck.",
        createdAt: "2023-10-28T10:00:00Z",
      },
    ],
  },
  {
    id: "aim-assist-master",
    title: "Aim Assist Master",
    description:
      "Improve your aim in FPS games with this subtle and effective aim assist script. Fully configurable sensitivity and FOV.",
    code: `local UserInputService = game:GetService("UserInputService")
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local SENSITIVITY = 0.8

UserInputService.InputChanged:Connect(function(input)
    if input.UserInputType == Enum.UserInputType.MouseMovement then
        -- Aim assist logic
    end
end)

print("Aim Assist Master loaded.")`,
    author: "FPSGod",
    category: "Combat",
    tags: ["fps", "aimbot", "combat"],
    createdAt: "2023-11-15T14:30:00Z",
    ratings: [
      {
        id: "r2-1",
        userId: "NoobSlayer",
        userAvatar: "/avatars/avatar-3.png",
        rating: 5,
        comment: "Absolutely amazing, my K/D ratio has doubled!",
        createdAt: "2023-11-16T14:30:00Z",
      },
    ],
  },
  {
    id: "speed-boost-fun",
    title: "Speed Boost Fun",
    description:
      "A simple and fun script to give your character a super speed boost. Great for exploring large maps or just having fun.",
    code: `local player = game.Players.LocalPlayer

local function onCharacterAdded(character)
    local humanoid = character:WaitForChild("Humanoid")
    humanoid.WalkSpeed = 100
end

player.CharacterAdded:Connect(onCharacterAdded)

if player.Character then
    onCharacterAdded(player.Character)
end

print("Speed Boost enabled!")`,
    author: "SpeedyG",
    category: "Fun",
    tags: ["speed", "utility", "fun"],
    createdAt: "2023-12-01T18:00:00Z",
    ratings: [
      {
        id: "r3-1",
        userId: "ExplorerPro",
        userAvatar: "/avatars/avatar-4.png",
        rating: 5,
        comment: "So much fun to zip around the map!",
        createdAt: "2023-12-02T18:00:00Z",
      },
      {
        id: "r3-2",
        userId: "CasualPlayer",
        userAvatar: "/avatars/avatar-5.png",
        rating: 4,
        comment: "Simple and does what it says.",
        createdAt: "2023-12-03T18:00:00Z",
      },
    ],
  },
  {
    id: "admin-commands-lite",
    title: "Admin Commands Lite",
    description:
      "A lightweight admin commands script with essential commands like fly, noclip, and godmode. Easy to install and use.",
    code: `local ADMIN_LIST = { "YourUsernameHere", "AnotherAdmin" }

game.Players.PlayerAdded:Connect(function(player)
    player.Chatted:Connect(function(msg)
        local isAdmin = table.find(ADMIN_LIST, player.Name)
        if isAdmin then
            if msg == ":fly" then
                -- Fly command logic
                print(player.Name .. " is now flying.")
            end
        end
    end)
end)`,
    author: "AdminWizard",
    category: "Utility",
    tags: ["admin", "commands", "utility"],
    createdAt: "2024-01-10T09:00:00Z",
    ratings: [
      {
        id: "r4-1",
        userId: "GameDev",
        userAvatar: "/avatars/avatar-1.png",
        rating: 5,
        comment: "Perfect for testing my own games. Thanks!",
        createdAt: "2024-01-11T09:00:00Z",
      },
    ],
  },
];
