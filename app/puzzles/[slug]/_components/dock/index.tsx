"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import { Panel } from "reactflow";
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
import { SearchPopoverContent } from "./search-popover-content";
export const Dock = () => {
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
      className="h-24 w-[85%] max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl lg:w-full rounded-2xl bg-secondary border-2 flex justify-center lg:justify-start items-center p-4"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-min lg:w-full mr-2 overflow-x-hidden"
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
                  <Card className="h-full p-0 gap-0">
                    <CardContent className="flex bg-background shadow-md h-full items-center justify-center p-0">
                      <span className="font-semibold text-center text-sm sm:text-sm">
                        + {group.name}
                      </span>
                    </CardContent>
                  </Card>
                </PopoverTrigger>
                <PopoverContent side="top" className="mb-4">
                  <div className="max-w-md h-72 flex flex-col justify-start items-start gap-4 overflow-y-auto">
                    {" "}
                    {group?.nodes?.map((node) => {
                      return (
                        <div
                          key={node.id}
                          className="flex w-full min-h-20 justify-start items-center gap-2 p-4 border hover:cursor-move transition-all duration-150 ease-in group"
                          onDragStart={(event) => onDragStart(event, node.type)}
                          draggable
                        >
                            <div className="mr-auto flex flex-col justify-start items-start">
                            <span className="text-sm font-medium">
                              {node.name}
                            </span>
                          </div>
                          <Button
                            variant={"outline"}
                            size={"sm"}
                            className="group-hover:flex hidden text-xs"
                          >
                            {" "}
                            Drag
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
          <Button variant={"default"} className="h-full">
            {" "}
            <Search size={15} />{" "}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="mb-10">
          <div className="max-w-xl h-72 flex flex-col justify-start items-start gap-4 overflow-y-auto">
            <SearchPopoverContent />
          </div>
        </PopoverContent>
      </Popover>
    </Panel>
  );
};
