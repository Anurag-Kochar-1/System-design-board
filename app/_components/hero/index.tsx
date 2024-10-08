import { buttonVariants } from "@/components/ui/button";
import { PUZZLE_QUESTIONS } from "@/data/questions";
import { cn, getCustomWeekdayNumber, getQuestion } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  const date = new Date();
  const dayIndex = getCustomWeekdayNumber(date);
  const todayQuestion = getQuestion(
    PUZZLE_QUESTIONS[(dayIndex > 7 ? 1 : dayIndex) - 1].id
  );

  return (
    <section className="w-full mx-auto px-4 sm:px-6">
      <div className="pt-12 pb-12 md:pt-28">
        <div className="text-center pb-8">
          <h1
            className="text-4xl lg:text-6xl xl:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 lg:mb-6"
            data-aos="zoom-y-out"
          >
            System design puzzles
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl lg:font-medium text-muted-foreground mb-8">
              Prepare for your system design interview with engaging puzzles on
              a flexible node-based editor.
            </p>
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                  class: "w-full max-w-xs",
                })
              )}
              href={`/puzzles/${todayQuestion.id}`}
            >
              Play Today&apos;s Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
