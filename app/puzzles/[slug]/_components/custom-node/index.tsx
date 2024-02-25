import { cn } from "@/lib/utils";
import React from "react";
import { Handle, NodeToolbar, Position } from "reactflow";

type CustomNodeProps = {
  name: string;
  bgColor: string;
};

export function CustomNode({ name, bgColor }: CustomNodeProps) {
  return (
    <>
      <NodeToolbar
        // isVisible={data.forceToolbarVisible || undefined}
        isVisible={true}
        position={Position.Top}
      >
        <button>cut</button>
        <button>copy</button>
        <button>paste</button>
      </NodeToolbar>
      <div
        className={cn(
          `min-w-[10rem] shadow-md rounded-md text-center py-1 font-medium`,
          bgColor
        )}
      >
        <span className="text-xs font-normal text-black">{name}</span>

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
        <Handle
          id="c"
          type="source"
          position={Position.Bottom}
          className="w-1 rounded-full bg-gray-500"
        />
      </div>
    </>
  );
}
