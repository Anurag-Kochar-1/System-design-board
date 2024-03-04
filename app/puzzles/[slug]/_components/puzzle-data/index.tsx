import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

export const PuzzleData = ({ className }: { className?: string }) => {
  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col justify-start items-start gap-10 w-[30%] xl:w-[25%] h-full bg-secondary border-r-2 p-4 lg:p-6 xl:p-8 overflow-y-auto",
        className
      )}
    >
      {/* ========== Header ========== */}
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-xl font-semibold text-foreground">
          Puzzle Title here...
        </h2>
        <Badge> Easy </Badge>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex est
          nihil officia doloremque molestias.
        </p>
      </div>
      {/* ========== Functional requirements ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Functional Requirements
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
        </ul>
      </div>

      {/* ========== Non-functional  requirements ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Non-functional Requirements
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
        </ul>
      </div>
      {/* ========== Assumptions ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Assumptions
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
        </ul>
      </div>
      {/* ========== Estimated Usage ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Estimated Usage
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            blanditiis.
          </li>
        </ul>
      </div>
    </aside>
  );
};
