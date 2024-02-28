import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const LogoWithText = ({ className }: { className?: string }) => {
  return (
    <Link
      href={`/`}
      className={cn(`flex justify-center items-center gap-2`, className)}
    >
      <div className="w-8 h-8 bg-primary flex justify-center items-center">
        {" "}
        <span className="text-xs font-bold text-primary-foreground">SBP</span>
      </div>
      <h3 className="text-sm font-bold text-primary">
        System design puzzles
      </h3>
    </Link>
  );
};
