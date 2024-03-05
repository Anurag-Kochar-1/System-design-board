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
          Basic Load Balancer Setup
        </h2>
        <Badge> Easy </Badge>
        <p className="text-sm text-muted-foreground">
          Design a simple load balancer system that evenly distributes incoming
          traffic to two web servers.
        </p>
      </div>
      {/* ========== Functional requirements ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Functional Requirements
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          <li className="text-xs font-light text-muted-foreground">
            The load balancer should support round-robin distribution.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Each server must handle one request at a time.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            The system should be able to scale by adding more servers.
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
            The load balancer must have high availability.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            The system should ensure minimal latency.
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
            Web servers are identical and stateless.
          </li>
          <li className="text-xs font-light text-muted-foreground">
            Traffic is HTTP-based.
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
            The system is expected to handle up to 1000 requests per minute.
          </li>
        </ul>
      </div>
    </aside>
  );
};
