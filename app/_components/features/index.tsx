"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <BentoGrid className="w-full md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Puzzle Board",
    description: (
      <span className="text-sm">An Interactive node-based editor.</span>
    ),
    header: <div className="w-full h-full bg-[#000000]"> </div>,
    className: "md:col-span-1",
    icon: <></>,
  },
  {
    title: "Solve Puzzles",
    description: (
      <span className="text-sm">Solve system design puzzles to prepare.</span>
    ),
    header: <div className="w-full h-full bg-[#FFCF00]"> </div>,
    className: "md:col-span-1",
    icon: <></>,
  },
  {
    title: "Powered by AI",
    description: (
      <span className="text-sm">
        Get suggestions and help from our AI (coming soon).
      </span>
    ),
    header: <div className="w-full h-full bg-[#A4A4A4]"> </div>,
    className: "md:col-span-1",
    icon: <></>,
},
{
    title: "Brainstorming",
    description: (
        <span className="text-sm">
        Don&apos;t want to solve puzzles? Create an empty board for yourself.
      </span>
    ),
    header: <div className="w-full h-full bg-[#D01012]"> </div>,
    className: "md:col-span-2",
    icon: <></>,
  },

  {
    title: "Leaderboard",
    description: (
      <span className="text-sm">
        Compete with others and boost your interview confidence.
      </span>
    ),
    header: <div className="w-full h-full bg-[#5C9A00]"> </div>,
    className: "md:col-span-1",
    icon: <></>,
  },
];
