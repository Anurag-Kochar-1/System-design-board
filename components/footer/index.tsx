"use client";
import React from "react";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  // if (pathname === "/puzzles/[slug]") return null;
  return null;
  return (
    <footer className="w-full min-h-52 border-y-2 flex justify-between items-center">
      <p>{pathname}</p>
    </footer>
  );
};
