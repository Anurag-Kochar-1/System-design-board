import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getStraightPath,
  useReactFlow,
} from "reactflow";

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
}: EdgeProps) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const handleDeleteEdge = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  const onEdgeLabelUpdate = (value: string) => {
    setEdges((edges) => {
      return edges.map((edge) => {
        if (edge.id === id) {
          return {
            ...edge,
            label: value,
          };
        } else {
          return edge;
        }
      });
    });
  };
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan flex justify-center items-center gap-1"
        >
         {label ? <p className="p-1 bg-secondary border"> {label} </p> : null}

          <Popover>
            <PopoverTrigger>
              {" "}
              <Button
                size={"icon"}
                variant={"secondary"}
                className="w-min h-min p-1.5"
              >
                <Settings size={15} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-xl w-full flex justify-between items-center gap-2">
              <Input
                value={label as string}
                onChange={(e) => onEdgeLabelUpdate(e.target.value)}
                placeholder="add label here..."
              />{" "}
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={handleDeleteEdge}
              >
                ❌
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
