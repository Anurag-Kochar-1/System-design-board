import { Button } from "@/components/ui/button";
import React from "react";

export const Hero = () => {
  return (
    <section className="w-full mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className="pt-12 pb-12 md:pt-28">
        {/* Section header */}
        <div className="text-center pb-8">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            System design puzzles
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Prepare for your system design interview with engaging puzzles on
              a flexible node-based editor.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <Button size={"lg"}>Play now</Button>
              <Button size={"lg"} variant={"secondary"}>
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
