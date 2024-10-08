import { PUZZLE_QUESTIONS } from "@/data/questions"
import { Question } from "@/types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getQuestion = (id:string): Question => {
  return PUZZLE_QUESTIONS.filter(item => item.id === id)[0]
}