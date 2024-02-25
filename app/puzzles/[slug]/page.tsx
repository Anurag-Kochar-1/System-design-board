"use client";
import "reactflow/dist/style.css";
import React, { useMemo } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import { PuzzleData } from "./_components/puzzle-data";
import { Dock } from "./_components/dock";
import { CustomNode } from "./_components/custom-node";
import { RFState, useStore } from "@/store";
import { shallow } from "zustand/shallow";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export default function Page() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow
  );

  const nodeTypes = useMemo(
    () => ({
      client: () => <CustomNode name="Client" bgColor="bg-blue-300" />,
    }),
    []
  );
  return (
    <div className="flex justify-between items-center w-full h-[calc(100vh-56px)]">
      <PuzzleData />
      <ReactFlowProvider>
        <div className="w-full lg:w-[70%] xl:w-[75%] h-full">
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            proOptions={{ hideAttribution: true }}
          >
            {" "}
            <Controls position="bottom-right" />
            <MiniMap position="top-right" />
            <Background gap={12} size={1} />
            <Dock />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
