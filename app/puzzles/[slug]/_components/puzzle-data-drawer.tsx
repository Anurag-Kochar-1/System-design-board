import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Panel } from "reactflow";
import { Button } from "@/components/ui/button";
import { PuzzleData } from "./puzzle-data";
export const PuzzleDataDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Panel position="top-left" className="lg:hidden">
          {" "}
          <Button> Question </Button>{" "}
        </Panel>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh] bg-secondary">
        <PuzzleData className="w-full flex" />
        <DrawerFooter className="w-full p-2">
          <DrawerClose>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
