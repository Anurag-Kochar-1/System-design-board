import { cn, getQuestion } from "@/lib/utils";
import { useParams } from "next/navigation";
import React from "react";
import { useReactFlow } from "reactflow";

export const PuzzleData = ({ className }: { className?: string }) => {
  const params = useParams<{ slug: string }>();
  const question = getQuestion(params?.slug);

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
          {question?.title}
        </h2>

        <span
          className={`text-xs font-bold py-1 px-2 rounded ${
            question.difficulty === "easy"
              ? "bg-green-600 text-green-100"
              : question.difficulty === "intermediate"
              ? "bg-orange-600 text-orange-100"
              : "bg-red-600 text-red-100"
          }`}
        >
          {question.difficulty}
        </span>
        <p className="text-sm text-muted-foreground">
          {question?.description}
          traffic to two web servers.
        </p>
      </div>

      {/* ========== Functional requirements ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Functional Requirements
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          {question?.functionalRequirements.map((item, index) => (
            <li
              className="text-xs font-light text-muted-foreground"
              key={index}
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>

      {/* ========== Non-functional  requirements ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Non-functional Requirements
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          {question?.nonFunctionalRequirements.map((item, index) => (
            <li
              className="text-xs font-light text-muted-foreground"
              key={index}
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
      {/* ========== Assumptions ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Assumptions
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          {question?.assumptions.map((item, index) => (
            <li
              className="text-xs font-light text-muted-foreground"
              key={index}
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
      {/* ========== Estimated Usage ========== */}
      <div className="flex flex-col justify-start items-start gap-4">
        <span className="text-base font-medium text-secondary-foreground">
          Estimated Usage
        </span>
        <ul className="list-disc flex flex-col gap-2 [&>li]:ml-4">
          {question?.estimatedUsage.map((item, index) => (
            <li
              className="text-xs font-light text-muted-foreground"
              key={index}
            >
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
