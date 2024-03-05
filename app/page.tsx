import { PuzzlesList } from "@/components/puzzles-list";
import { Hero } from "./_components/hero";
import { Demo } from "./_components/demo";
import { Features } from "./_components/features";

export default async function Home() {
  return (
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.07] w-full h-full">
      <div className="min-h-screen flex w-[95%] overflow-y-auto gap-10 md:gap-20 justify-start items-center flex-col max-w-6xl 2xl:max-w-7xl mx-auto pb-32">
        <Hero />
        <Demo />
        <PuzzlesList />
        <Features />
      </div>
    </div>
  );
}
