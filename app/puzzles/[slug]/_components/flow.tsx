"use client";
import React, { useCallback, useMemo, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  addEdge,
  OnConnect,
  useReactFlow,
} from "reactflow";
import { Dock } from "./dock";
import { CustomNode } from "./custom-node";
import { CustomEdge } from "./custom-edge";
import {
  CUSTOM_NODE_GROUPES,
  CustomNodeGroup,
} from "@/constants/custom-node.data";
import { PuzzleDataDrawer } from "./puzzle-data-drawer";
import { getQuestion } from "@/lib/utils";
import { useParams } from "next/navigation";
let id = 0;
const getId = () => `dndnode_${id++}`;

export const Flow = () => {
  const params = useParams<{ slug: string }>();
  const question = getQuestion(params?.slug);
  const reactFlow = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(
    question.answerNodes as Node[]
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(
    question.answerEdges
  );
  const ref = useRef<any>(null);

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = { ...params, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlow]
  );

  const populateNodeTypes = () => {
    const components: any = {};
    const allNodes = CUSTOM_NODE_GROUPES.reduce(
      (accumulator: any[], currentGroup: CustomNodeGroup) => {
        if (currentGroup.nodes) {
          accumulator.push(...currentGroup.nodes);
        }
        return accumulator;
      },
      []
    );
    allNodes.forEach((node) => {
      components[node.type] = (props: any) => (
        <CustomNode
          type={node.id}
          name={node?.name}
          icon={node.icon}
          {...props}
        />
      );
    });
    return components;
  };

  const nodeTypes = useMemo(() => populateNodeTypes(), []);

  const edgeTypes = useMemo(
    () => ({
      "custom-edge": CustomEdge,
    }),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={onDragOver}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      ref={ref}
    >
      {" "}
      <MiniMap position="top-right" className="hidden lg:flex" />
      <Background gap={12} size={1} />
      <Controls position="top-left" className="hidden lg:flex" />
      <PuzzleDataDrawer />
      <Dock />
    </ReactFlow>
  );
};
