import { PUZZLE_QUESTIONS } from "@/data/questions";
import Link from "next/link";
import React from "react";

export const PuzzlesList = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full gap-10">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tighter tracking-tighter">
          {" "}
          Today&apos;s puzzles{" "}
        </h2>
        <Link href={`/`} className="text-sm font-medium hover:underline">
          View all
        </Link>
      </div>
      <ul className="flex flex-col justify-start items-start gap-6 w-full">
        {PUZZLE_QUESTIONS.map((question, index) => (
          <Link
            key={index}
            href={`/puzzles/${question.id}`}
            className={"w-full"}
          >
            <li className="bg-secondary border p-3 w-full flex justify-start items-center">
              {" "}
              <span>{question.title}</span>{" "}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
