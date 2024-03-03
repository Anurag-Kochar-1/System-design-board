"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import { Handle, NodeToolbar, Position, useReactFlow } from "reactflow";

const DEFAULT_HANDLE_STYLE = {
  width: 10,
  height: 10,
  bottom: -5,
};

type CustomNodeProps = {
  type: string;
  id?: string;
  name: string;
  bgColor?: string;
  forceToolbarVisible?: boolean;
  isConnectable?: boolean;
};

export function CustomNode({
  id,
  type,
  name,
  bgColor,
  forceToolbarVisible,
  isConnectable = true,
}: CustomNodeProps) {
  const reactFlow = useReactFlow();

  const deleteNode = useCallback(() => {
    reactFlow.setNodes((nodes) => nodes.filter((node) => node.id !== id));
    reactFlow.setEdges((edges) => edges.filter((edge) => edge.source !== id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <>
      <NodeToolbar
        isVisible={forceToolbarVisible || undefined}
        position={Position.Top}
      >
        <Button variant={"destructive"} size={"sm"} onClick={deleteNode}>
          Delete
        </Button>
      </NodeToolbar>
      <div
        className={cn(
          `min-w-[10rem] shadow-md rounded-md text-center py-1 font-medium bg-secondary border-2`,
          bgColor
        )}
      >
        <span className="text-xs font-normal text-secondary-foreground">{name}</span>

        <Handle
          id="a"
          type="target"
          position={Position.Left}
          className="w-1 rounded-full bg-slate-500"
        />
        <Handle
          id="b"
          type="source"
          position={Position.Right}
          className="w-1 rounded-full bg-gray-500"
        />
        <Handle
          id="c"
          type="source"
          position={Position.Top}
          className="w-1 rounded-full bg-gray-500"
        />
        {/* <Handle
          id="c"
          type="source"
          position={Position.Bottom}
          className="w-1 rounded-full bg-gray-500"
        /> */}
        <Handle
          type="source"
          id="red"
          position={Position.Bottom}
          style={{ ...DEFAULT_HANDLE_STYLE, left: "10%", background: "red" }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="blue"
          style={{ ...DEFAULT_HANDLE_STYLE, left: "20%", background: "blue" }}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="orange"
          style={{ ...DEFAULT_HANDLE_STYLE, left: "30%", background: "orange" }}
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
}
