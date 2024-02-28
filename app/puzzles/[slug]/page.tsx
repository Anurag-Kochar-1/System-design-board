"use client";
import "reactflow/dist/style.css";
import React from "react";
import { ReactFlowProvider } from "reactflow";
import { PuzzleData } from "./_components/puzzle-data";
import { Flow } from "./_components/flow";

export default function Page() {
  return (
    <div className="flex justify-between items-center w-full h-[calc(100vh-56px)]">
      <PuzzleData />
      <div className="w-full lg:w-[70%] xl:w-[75%] h-full">
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
    </div>
  );
}
