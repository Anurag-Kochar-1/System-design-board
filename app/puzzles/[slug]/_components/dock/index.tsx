"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import { Panel, useNodes, useReactFlow } from "reactflow";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CUSTOM_NODE_GROUPES } from "@/constants/custom-node.data";
export const Dock = () => {
  const nodes = useNodes();
  const reactFlow = useReactFlow();
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <Panel
      position="bottom-center"
      className="h-24 w-[85%] max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl lg:w-full rounded-2xl bg-secondary border-2 flex justify-start items-center p-4"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mr-2 hidden md:inline-block"
      >
        <CarouselContent className="hover:cursor-move h-16">
          {CUSTOM_NODE_GROUPES.map((group, index) => (
            <CarouselItem
              key={index}
              className={`md:basis-1/2 lg:basis-1/4 hover:cursor-pointer ${
                index < CUSTOM_NODE_GROUPES?.length - 1 ? "mr-2" : ""
              }`}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Card className="border-2 border-black h-full p-0 gap-0">
                    <CardContent className="flex bg-red-400 h-full items-center justify-center p-0">
                      <span className="font-semibold text-center">
                        {group.name}
                      </span>
                    </CardContent>
                  </Card>
                </PopoverTrigger>
                <PopoverContent side="top" className="mb-4">
                  <div className="max-w-md h-72 flex flex-col justify-start items-start gap-4">
                    {" "}
                    {group?.nodes?.map((node) => {
                      return (
                        <div
                          key={node.id}
                          className="flex w-full justify-start items-center gap-2 p-2 border-black border-2"
                          onDragStart={(event) => onDragStart(event, node.type)}
                          draggable
                        >
                          <div className="aspect-square h-full bg-primary rounded-md"></div>
                          <div className="mr-auto flex flex-col justify-start items-start">
                            <span className="">{node.name}</span>
                          </div>
                          <Button
                            variant={"outline"}
                            size={"sm"}
                            onClick={() => {
                              const testNode: any = {
                                id: "asd",
                                type: "creator",
                                position: { x: 100, y: 50 },
                                data: { label: `test` },
                              };
                              reactFlow.setNodes((nds) => nds.concat(testNode));
                            }}
                          >
                            {" "}
                            Add
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* ========== Search button ========== */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"default"} size={"icon"} className="h-full">
            {" "}
            <Search size={15} />{" "}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="mb-10">
          <div
            className="max-w-md h-72 bg-primary"
            onClick={() => {
              console.log(nodes);
            }}
          >
            log
          </div>
        </PopoverContent>
      </Popover>
    </Panel>
  );
};
