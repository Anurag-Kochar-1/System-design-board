import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Hero = () => {
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
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <Link href={`/puzzles/1`}>
                <Button size={"lg"}>Get started</Button>
              </Link>
              <Link href={`/puzzles/basic-load-balancer`}>
                <Button size={"lg"} variant={"secondary"}>
                  Play Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
