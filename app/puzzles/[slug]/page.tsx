"use client";
import "reactflow/dist/style.css";
import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  Panel,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

const initialNodes: Node[] = [
  { id: "1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

export default function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);

  //   const onConnect: OnConnect = useCallback(
  //     (params: any) => setEdges((eds) => addEdge(params, eds)),
  //     [setEdges]
  //   );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div className="flex justify-between items-center w-full h-[calc(100vh-56px)]">
      <div className="w-[30%] h-full bg-red-500"></div>
      <ReactFlowProvider>
        <div className="w-[70%] h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          >
            {" "}
            <Controls position="bottom-right" />
            <MiniMap position="top-right" />
            <Background gap={12} size={1} />
            <Panel
              position="bottom-center"
              className="h-28 max-w-xl w-full rounded-md bg-secondary border-2"
            >
              <div></div>
            </Panel>
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
