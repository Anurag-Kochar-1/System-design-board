"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
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
  Panel,
} from "reactflow";
import { Dock } from "./dock";
import { CustomNode } from "./custom-node";
import { NodeContextMenu } from "./node-context-menu";
import { DeleteEdge } from "./delete-edge";
import {
  CUSTOM_NODE_GROUPES,
  CustomNodeGroup,
} from "@/constants/custom-node.data";
import { PuzzleDataDrawer } from "./puzzle-data-drawer";
let id = 0;
const getId = () => `dndnode_${id++}`;

export const Flow = () => {
  const reactFlow = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  // const [menu, setMenu] = useState<any>(null);
  const ref = useRef<any>(null);

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = { ...params, type: "delete-edge" };
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
        <CustomNode type={node.id} name={node?.name} icon={node.icon} {...props} />
      );
    });
    return components;
  };

  const nodeTypes = useMemo(() => populateNodeTypes(), []);

  const edgeTypes = useMemo(
    () => ({
      "delete-edge": DeleteEdge,
    }),
    []
  );

  // const onNodeContextMenu = useCallback(
  //   (event: any, node: any) => {
  //     event.preventDefault();
  //     if (!ref.current) return;
  //     const pane = ref.current.getBoundingClientRect();
  //     setMenu({
  //       id: node.id,
  //       top: event.clientY < pane.height - 200 && event.clientY,
  //       left: event.clientX < pane.width - 200 && event.clientX,
  //       right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
  //       bottom:
  //         event.clientY >= pane.height - 200 && pane.height - event.clientY,
  //     });
  //   },
  //   [setMenu]
  // );

  // const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

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
      // onNodeContextMenu={onNodeContextMenu}
      // onPaneClick={onPaneClick}
      ref={ref}
    >
      {" "}
      <MiniMap position="top-right" className="hidden lg:flex" />
      <Background gap={12} size={1} />
      <Controls position="top-left" className="hidden lg:flex" />
      {/* {menu && <NodeContextMenu onClick={onPaneClick} {...menu} />} */}
      <PuzzleDataDrawer />
      <Dock />
    </ReactFlow>
  );
};
