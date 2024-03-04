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

// export const CUSTOM_NODE_GROUPES: CustomNodeGroup[] = [
//   {
//     icon: "",
//     id: "database",
//     name: "Database",
//     nodes: [
//       {
//         id: "relational",
//         name: "Relational",
//         description: "",
//         icon: "",
//         type: "relational",
//       },
//       {
//         id: "nosql",
//         name: "NoSQL",
//         description: "",
//         icon: "",
//         type: "nosql",
//       },
//     ],
//   },
//   {
//     id: "trigger",
//     name: "Trigger",
//     icon: "",
//     nodes: [
//       {
//         id: "creator",
//         type: "creator",
//         name: "Creator",
//         description: "",
//         icon: "",
//       },
//       {
//         id: "consumer",
//         type: "consumer",
//         name: "Consumer",
//         description: "",
//         icon: "",
//       },
//       {
//         id: "cronJob",
//         type: "cronJob",
//         name: "Cron job",
//         description: "",
//         icon: "",
//       },
//     ],
//   },
//   {
//     id: "loadBalancer",
//     name: "Load Balancer",
//     icon: "",
//     nodes: [
//       {
//         name: "Load Balancer",
//         id: "loadBalancer",
//         type: "loadBalancer",
//         description: "",
//         icon: "",
//       },
//     ],
//   },
//   {
//     id: "cache",
//     name: "Cache",
//     icon: "",
//     nodes: [
//       {
//         name: "Cache",
//         id: "cache",
//         type: "cache",
//         description: "",
//         icon: "",
//       },
//     ],
//   },
//   {
//     id: "thirdPartyServer",
//     name: "Third Party Server",
//     icon: "",
//     nodes: [
//       {
//         id: "keyGenerationService",
//         type: "keyGenerationService",
//         name: "Key Generation Service",
//         icon: "",
//         description: "",
//       },
//       {
//         id: "countryLookupService",
//         type: "countryLookupService",
//         name: "Country Lookup Service",
//         icon: "",
//         description: "",
//       },
//       {
//         id: "baseWordProcessor",
//         type: "baseWordProcessor",
//         name: "Base Word Processor",
//         icon: "",
//         description: "",
//       },
//     ],
//   },
// ];
export const CUSTOM_NODE_GROUPES: CustomNodeGroup[] = [
  {
    icon: "🌐",
    id: "web",
    name: "Web",
    nodes: [
      {
        id: "client",
        name: "Client",
        description:
          "A web browser or a mobile app that interacts with the user",
        icon: "👤",
        type: "client",
      },
      {
        id: "server",
        name: "Server",
        description: "A web server that handles requests from the client",
        icon: "🖥️",
        type: "server",
      },
      {
        id: "api",
        name: "API",
        description:
          "An application programming interface that defines the communication between the client and the server",
        icon: "🔌",
        type: "api",
      },
    ],
  },
  {
    icon: "🔀",
    id: "load_balancer",
    name: "Load Balancer",
    nodes: [
      {
        id: "lb",
        name: "Load Balancer",
        description:
          "A device that distributes incoming traffic among multiple servers",
        icon: "🔀",
        type: "lb",
      },
    ],
  },
  {
    icon: "🗄️",
    id: "database",
    name: "Database",
    nodes: [
      {
        id: "relational",
        name: "Relational",
        description:
          "A database that stores data in tables and supports SQL queries",
        icon: "🔢",
        type: "relational",
      },
      {
        id: "nosql",
        name: "NoSQL",
        description:
          "A database that stores data in various formats and supports flexible queries",
        icon: "🔣",
        type: "nosql",
      },
    ],
  },
  {
    icon: "🚀",
    id: "cache",
    name: "Cache",
    nodes: [
      {
        id: "cache",
        name: "Cache",
        description:
          "A fast and temporary storage that improves the performance of the system",
        icon: "🚀",
        type: "cache",
      },
    ],
  },
  {
    icon: "📡",
    id: "message_queue",
    name: "Message Queue",
    nodes: [
      {
        id: "mq",
        name: "Message Queue",
        description:
          "A service that enables asynchronous communication between different components of the system",
        icon: "📡",
        type: "mq",
      },
    ],
  },
  {
    icon: "🔒",
    id: "security",
    name: "Security",
    nodes: [
      {
        id: "auth",
        name: "Authentication",
        description: "A process that verifies the identity of the user",
        icon: "🔑",
        type: "auth",
      },
      {
        id: "authz",
        name: "Authorization",
        description: "A process that determines the access rights of the user",
        icon: "🛡️",
        type: "authz",
      },
      {
        id: "encryption",
        name: "Encryption",
        description:
          "A technique that protects the data from unauthorized access",
        icon: "🔒",
        type: "encryption",
      },
    ],
  },
];
