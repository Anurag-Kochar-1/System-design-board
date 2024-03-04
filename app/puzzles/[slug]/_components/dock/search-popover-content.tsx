"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CUSTOM_NODE_GROUPES, CustomNode } from "@/constants/custom-node.data";
import React, { useMemo, useState } from "react";

export const SearchPopoverContent = ({handleAddNode}: {handleAddNode:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string, label: string) => void}) => {
  const [nodes, setnodes] = useState<CustomNode[]>([]);
  const allNodes = useMemo(() => {
    return CUSTOM_NODE_GROUPES.reduce(
      (acc: CustomNode[], group) =>
        group.nodes ? [...acc, ...group.nodes] : acc,
      []
    );
  }, []);
  const handleSearch = (searchTerm: string) => {
    const filteredNodes = allNodes.filter((node) =>
      node.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setnodes(filteredNodes);
  };

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex items-start flex-col w-full gap-4 justify-start p-1">
      {" "}
      <Input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      {nodes.length > 0 ? (
        nodes?.map((node) => {
          return (
            <div
              key={node.id}
              className="flex w-full min-h-20 justify-start items-center gap-2 p-4 border hover:cursor-move transition-all duration-150 ease-in group"
              onDragStart={(event) => onDragStart(event, node.type)}
              draggable
            >
              {/* <div className="aspect-square h-full bg-primary rounded-md"></div> */}
              <div className="mr-auto flex flex-col justify-start items-start">
                <span className="text-sm font-medium">
                  {node.icon} {node.name}
                </span>
              </div>
              <Button
                variant={"outline"}
                size={"sm"}
                className="hidden text-xs sm lg:flex"
              >
                {" "}
                Drag
              </Button>
              <Button
                variant={"outline"}
                size={"sm"}
                className="lg:hidden text-xs sm"
                onClick={(e) => handleAddNode(e, node.type, node.name)}
              >
                {" "}
                Add
              </Button>
            </div>
          );
        })
      ) : (
        <span className="py-6 mx-auto text-muted-foreground text-sm font-medium">
          no search results{" "}
        </span>
      )}
    </div>
  );
};
