import { PuzzlesList } from "@/components/puzzles-list";
import { Hero } from "./_components/hero";
import { Demo } from "./_components/demo";

export default async function Home() {
  return (
    <div className="min-h-screen flex w-full overflow-y-auto gap-20 justify-start items-center flex-col max-w-6xl 2xl:max-w-7xl mx-auto pb-32">
      <Hero />
      <Demo />
      <PuzzlesList />
    </div>
  );
}
