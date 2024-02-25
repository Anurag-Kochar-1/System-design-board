type CustomNodeGroup = {
  id: string;
  name: string;
  icon: string;
  nodes?: CustomNode[];
};

type CustomNode = {
  id: string;
  name: string;
  icon: string;
  description: string;
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
      },
      {
        id: "nosql",
        name: "NoSQL",
        description: "",
        icon: "",
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
        name: "Creator",
        description: "",
        icon: "",
      },
      {
        id: "consumer",
        name: "Consumer",
        description: "",
        icon: "",
      },
      {
        id: "cronJob",
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
  },
  {
    id: "cache",
    name: "Cache",
    icon: "",
  },
  {
    id: "thirdPartyServer",
    name: "Third Party Server",
    icon: "",
    nodes: [
      {
        id: "keyGenerationService",
        name: "Key Generation Service",
        icon: "",
        description: "",
      },
      {
        id: "countryLookupService",
        name: "Country Lookup Service",
        icon: "",
        description: "",
      },
      {
        id: "baseWordProcessor",
        name: "Base Word Processor",
        icon: "",
        description: "",
      },
    ],
  },
];
