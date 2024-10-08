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
      {
        id: "global_lb",
        name: "Global Load Balancer",
        description:
          "A load balancer that routes traffic across multiple regions or data centers.",
        icon: "🌍",
        type: "global_lb",
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
        name: "Relational Database",
        description:
          "A database that stores data in tables and supports SQL queries",
        icon: "🔢",
        type: "relational",
      },
      {
        id: "nosql",
        name: "NoSQL Database",
        description:
          "A database that stores data in various formats and supports flexible queries",
        icon: "🔣",
        type: "nosql",
      },
      {
        id: "distributed_db",
        name: "Distributed Database",
        description:
          "A database system spread over multiple locations or machines.",
        icon: "🗺️",
        type: "distributed_db",
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
      {
        id: "distributed_cache",
        name: "Distributed Cache",
        description:
          "A cache that is spread across multiple servers to provide high scalability and reliability.",
        icon: "🧱",
        type: "distributed_cache",
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
      {
        id: "pubsub",
        name: "Pub/Sub Messaging",
        description:
          "A messaging pattern where publishers send messages to subscribers via a central broker.",
        icon: "🔔",
        type: "pubsub",
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
      {
        id: "ssl_tls",
        name: "SSL/TLS",
        description:
          "A protocol for securing data transmission over the web using encryption.",
        icon: "🔐",
        type: "ssl_tls",
      },
    ],
  },
  {
    icon: "🗂️",
    id: "storage",
    name: "Storage",
    nodes: [
      {
        id: "object_storage",
        name: "Object Storage",
        description:
          "A storage service that stores data as objects, often used for unstructured data like files and media.",
        icon: "📦",
        type: "object_storage",
      },
      {
        id: "file_storage",
        name: "File Storage",
        description:
          "A storage service that allows storing data in a file system hierarchy.",
        icon: "🗄️",
        type: "file_storage",
      },
    ],
  },
  {
    icon: "🖧",
    id: "network",
    name: "Network",
    nodes: [
      {
        id: "cdn",
        name: "Content Delivery Network (CDN)",
        description:
          "A distributed network of servers that deliver web content to users based on their geographical location.",
        icon: "🖧",
        type: "cdn",
      },
      {
        id: "dns",
        name: "DNS",
        description: "A system that translates domain names into IP addresses.",
        icon: "🌐",
        type: "dns",
      },
    ],
  },
];
