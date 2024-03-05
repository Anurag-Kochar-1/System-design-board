"use client";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import { Handle, Position, useReactFlow } from "reactflow";

type CustomNodeProps = {
  type: string;
  id?: string;
  name: string;
  bgColor?: string;
  forceToolbarVisible?: boolean;
  isConnectable?: boolean;
  icon: string;
};

export function CustomNode({
  id,
  type,
  name,
  bgColor,
  forceToolbarVisible,
  isConnectable = true,
  icon,
}: CustomNodeProps) {
  const reactFlow = useReactFlow();

  const deleteNode = useCallback(() => {
    reactFlow.setNodes((nodes) => nodes.filter((node) => node.id !== id));
    reactFlow.setEdges((edges) => edges.filter((edge) => edge.source !== id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          className={cn(
            `min-w-[10rem] bg-secondary shadow-lg rounded-md text-center py-1 font-medium border-2`
          )}
        >
          <span className="text-xs font-normal text-secondary-foreground">
            {icon} {name}
          </span>

          <Handle
            id="a"
            type="target"
            position={Position.Left}
            isConnectable
            isConnectableStart
            isConnectableEnd
            isValidConnection={() => true}
          />
          <Handle
            id="b"
            type="source"
            position={Position.Right}
            isConnectable
            isConnectableStart
            isConnectableEnd
            isValidConnection={() => true}
          />
          <Handle
            id="c"
            type="source"
            position={Position.Top}
            isConnectable
            isConnectableStart
            isConnectableEnd
            isValidConnection={() => true}
          />
          <Handle
            id="c"
            type="source"
            position={Position.Bottom}
            isConnectable
            isConnectableStart
            isConnectableEnd
            isValidConnection={() => true}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={deleteNode}>
          {" "}
          remove this {name} block{" "}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
