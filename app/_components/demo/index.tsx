import Link from "next/link";
import React from "react";

export const Demo = () => {
  return (
    <div className="w-full aspect-video bg-primary h-full flex justify-center items-center">
      <Link href={`/puzzles/demo`} className="text-background text-sm font-medium"> Play demo</Link>
    </div>
  );
};
