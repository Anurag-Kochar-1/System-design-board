import { PUZZLE_QUESTIONS } from "@/data/questions";
import Link from "next/link";
import React from "react";

export const PuzzlesList = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full gap-6">
      <h2 className="text-xl font-bold text-gray-800">Today&apos;s Puzzles</h2>

      <ul className="flex flex-col gap-4 w-full">
        {PUZZLE_QUESTIONS.map((question, index) => (
          <Link key={index} href={`/puzzles/${question.id}`} className="w-full">
            <li className="bg-white border border-gray-300 rounded-md p-4 flex flex-col transition duration-150 hover:bg-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  {question.title}
                </span>
                <span
                  className={`text-xs font-bold py-1 px-2 rounded ${
                    question.difficulty === "easy"
                      ? "bg-green-600 text-green-100"
                      : question.difficulty === "intermediate"
                      ? "bg-orange-600 text-orange-100"
                      : "bg-red-600 text-red-100"
                  }`}
                >
                  {question.difficulty.charAt(0).toUpperCase() +
                    question.difficulty.slice(1)}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {question.description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
