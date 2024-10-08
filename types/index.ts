import { Edge, Node } from "reactflow";

export type Question = {
  id: string;
  title: string;
  difficulty: "easy" | "intermediate" | "hard";
  description: string;
  functionalRequirements: string[];
  nonFunctionalRequirements: string[];
  assumptions: string[];
  estimatedUsage: string[];
  answerNodes: Array<Node>
  answerEdges: Array<Edge>
};
