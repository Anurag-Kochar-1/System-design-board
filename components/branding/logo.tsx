import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={`/`}
      className={cn(
        `w-8 h-8 bg-primary flex justify-center items-center`,
        className
      )}
    >
      <h3 className="text-xs font-bold text-primary-foreground">SBP</h3>
    </Link>
  );
};
