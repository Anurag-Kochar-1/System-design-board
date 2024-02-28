export type CustomNodeGroup = {
  id: string;
  name: string;
  icon: string;
  nodes?: CustomNode[];
};

export type CustomNode = {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: string;
};

export const CUSTOM_NODE_GROUPES: CustomNodeGroup[] = [
  {
    icon: "",
    id: "batabase",
    name: "Database",
    nodes: [
      {
        id: "relational",
        name: "Relational",
        description: "",
        icon: "",
        type: "relational",
      },
      {
        id: "nosql",
        name: "NoSQL",
        description: "",
        icon: "",
        type: "nosql",
      },
    ],
  },
  {
    id: "trigger",
    name: "Trigger",
    icon: "",
    nodes: [
      {
        id: "creator",
        type: "creator",
        name: "Creator",
        description: "",
        icon: "",
      },
      {
        id: "consumer",
        type: "consumer",
        name: "Consumer",
        description: "",
        icon: "",
      },
      {
        id: "cronJob",
        type: "cronJob",
        name: "Cron job",
        description: "",
        icon: "",
      },
    ],
  },
  {
    id: "loadBalancer",
    name: "Load Balancer",
    icon: "",
    nodes: [
      {
        name: "Load Balancer",
        id: "loadBalancer",
        type: "loadBalancer",
        description: "",
        icon: "",
      },
    ],
  },
  {
    id: "cache",
    name: "Cache",
    icon: "",
    nodes: [
      {
        name: "Cache",
        id: "cache",
        type: "cache",
        description: "",
        icon: "",
      },
    ],
  },
  {
    id: "thirdPartyServer",
    name: "Third Party Server",
    icon: "",
    nodes: [
      {
        id: "keyGenerationService",
        type: "keyGenerationService",
        name: "Key Generation Service",
        icon: "",
        description: "",
      },
      {
        id: "countryLookupService",
        type: "countryLookupService",
        name: "Country Lookup Service",
        icon: "",
        description: "",
      },
      {
        id: "baseWordProcessor",
        type: "baseWordProcessor",
        name: "Base Word Processor",
        icon: "",
        description: "",
      },
    ],
  },
];
