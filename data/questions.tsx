import { Question } from "@/types";

export const PUZZLE_QUESTIONS: Question[] = [
  {
    id: "basic-load-balancer",
    title: "Basic Load Balancer Setup",
    difficulty: "easy",
    description:
      "Design a simple load balancer system that evenly distributes incoming traffic to two web servers.",
    functionalRequirements: [
      "The load balancer should support round-robin distribution.",
      "Each server must handle one request at a time.",
      "The system should be able to scale by adding more servers.",
    ],
    nonFunctionalRequirements: [
      "The load balancer must have high availability.",
      "The system should ensure minimal latency.",
    ],
    assumptions: [
      "Web servers are identical and stateless.",
      "Traffic is HTTP-based.",
    ],
    estimatedUsage: [
      "The system is expected to handle up to 1000 requests per minute.",
    ],
    answerNodes: [
      {
        id: "lb",
        type: "lb",
        position: { x: 250, y: 5 },
        data: { label: "Load Balancer" },
      },
      {
        id: "server1",
        type: "server",
        position: { x: 100, y: 200 },
        data: { label: "Server 1" },
      },
      {
        id: "server2",
        type: "server",
        position: { x: 400, y: 200 },
        data: { label: "Server 2" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "lb",
        target: "server1",
        animated: true,
        label: "50% Traffic",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "lb",
        target: "server2",
        animated: true,
        label: "50% Traffic",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "basic-url-shortener",
    title: "Design a URL Shortener",
    difficulty: "easy",
    description:
      "Design a system that takes a long URL and returns a shorter, unique URL.",
    functionalRequirements: [
      "Users should be able to shorten any URL.",
      "The system should generate a unique shortened URL for each input.",
      "When a shortened URL is accessed, the user should be redirected to the original URL.",
    ],
    nonFunctionalRequirements: [
      "The system should ensure low latency for URL redirection.",
      "The shortened URLs must be durable and persist for long periods.",
    ],
    assumptions: [
      "URLs are standard HTTP/HTTPS URLs.",
      "Users don’t require user authentication for shortening URLs.",
    ],
    estimatedUsage: [
      "The system is expected to handle 10,000 URL shortens per day.",
    ],
    answerNodes: [
      {
        id: "user",
        type: "client",
        position: { x: -50, y: 100 },
        data: { label: "User" },
      },
      {
        id: "url-shortener",
        type: "server",
        position: { x: 300, y: 50 },
        data: { label: "URL Shortener Service" },
      },
      {
        id: "db",
        type: "relational",
        position: { x: 300, y: 200 },
        data: { label: "Database" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "user",
        target: "url-shortener",
        animated: true,
        label: "Generate Short URL",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "url-shortener",
        target: "db",
        animated: true,
        label: "Save URL",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "basic-file-upload",
    title: "File Upload Service",
    difficulty: "easy",
    description:
      "Design a service that allows users to upload files and retrieve them later.",
    functionalRequirements: [
      "Users should be able to upload files up to 100MB.",
      "The system should allow users to download their uploaded files.",
      "The system must support multiple file types (e.g., images, text, etc.).",
    ],
    nonFunctionalRequirements: [
      "The system should have high availability and durability.",
      "File uploads should be fast and reliable.",
    ],
    assumptions: [
      "Files are stored in cloud storage like AWS S3.",
      "Authentication is not required for file upload or download.",
    ],
    estimatedUsage: [
      "The system is expected to handle 1000 file uploads per day.",
    ],
    answerNodes: [
      {
        id: "user",
        type: "client",
        position: { x: -50, y: 150 },
        data: { label: "User" },
      },
      {
        id: "file-upload",
        type: "server",
        position: { x: 300, y: 50 },
        data: { label: "File Upload Service" },
      },
      {
        id: "cloud-storage",
        type: "nosql",
        position: { x: 300, y: 200 },
        data: { label: "Cloud Storage" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "user",
        target: "file-upload",
        animated: true,
        label: "Upload File",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "file-upload",
        target: "cloud-storage",
        animated: true,
        label: "Save File",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "scalable-chat-app",
    title: "Design a Scalable Chat Application",
    difficulty: "intermediate",
    description:
      "Design a chat application that can handle a large number of users sending and receiving real-time messages.",
    functionalRequirements: [
      "The system should support real-time messaging.",
      "Messages must be delivered in order.",
      "The system must be able to scale to handle thousands of concurrent users.",
    ],
    nonFunctionalRequirements: [
      "Messages should have low latency (less than 100ms).",
      "The system must ensure reliability and availability.",
    ],
    assumptions: [
      "Users are connected via mobile and desktop devices.",
      "Messages are sent via HTTP and WebSockets.",
    ],
    estimatedUsage: [
      "The system is expected to handle 10,000 messages per second at peak.",
    ],
    answerNodes: [
      {
        id: "user1",
        type: "client",
        position: { x: 100, y: 50 },
        data: { label: "User 1" },
      },
      {
        id: "user2",
        type: "client",
        position: { x: 400, y: 50 },
        data: { label: "User 2" },
      },
      {
        id: "chat-server",
        type: "server",
        position: { x: 250, y: 150 },
        data: { label: "Chat Server" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "user1",
        target: "chat-server",
        animated: true,
        label: "Send Message",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "chat-server",
        target: "user2",
        animated: true,
        label: "Deliver Message",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "content-delivery-network",
    title: "Design a Content Delivery Network (CDN)",
    difficulty: "intermediate",
    description:
      "Design a CDN system that caches content at geographically distributed servers to serve users with low latency.",
    functionalRequirements: [
      "The system should cache static content close to users’ geographical locations.",
      "The CDN should update cached content as the origin server changes.",
      "The system should provide fast and consistent access to content.",
    ],
    nonFunctionalRequirements: [
      "Ensure low latency and high availability.",
      "The system must be scalable to serve millions of requests per second.",
    ],
    assumptions: [
      "Most of the content is static (e.g., images, videos, HTML).",
      "CDN servers are spread globally.",
    ],
    estimatedUsage: [
      "The system is expected to handle 1 million requests per second.",
    ],
    answerNodes: [
      {
        id: "origin-server",
        type: "server",
        position: { x: 100, y: 150 },
        data: { label: "Origin Server" },
      },
      {
        id: "cdn-server",
        type: "cdn",
        position: { x: 300, y: 300 },
        data: { label: "CDN Server" },
      },
      {
        id: "user",
        type: "client",
        position: { x: 500, y: 150 },
        data: { label: "User" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "origin-server",
        target: "cdn-server",
        animated: true,
        label: "Cache Content",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "cdn-server",
        target: "user",
        animated: true,
        label: "Serve Content",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "distributed-cache",
    title: "Design a Distributed Cache",
    difficulty: "hard",
    description:
      "Design a distributed caching system to reduce the load on a database for frequently accessed data.",
    functionalRequirements: [
      "The cache should store frequently accessed data to reduce database load.",
      "The system should invalidate stale data after a certain time.",
      "It must be able to handle cache misses by fetching data from the database.",
    ],
    nonFunctionalRequirements: [
      "The system should provide fast access to cached data (less than 10ms).",
      "It must be scalable to handle millions of requests per second.",
    ],
    assumptions: [
      "The database is a relational database.",
      "The data stored in the cache is key-value pairs.",
    ],
    estimatedUsage: [
      "The system is expected to handle 500,000 cache lookups per second.",
    ],
    answerNodes: [
      {
        id: "app-server",
        type: "server",
        position: { x: 100, y: 100 },
        data: { label: "Application Server" },
      },
      {
        id: "cache",
        type: "cache",
        position: { x: 300, y: 200 },
        data: { label: "Cache" },
      },
      {
        id: "db",
        type: "relational",
        position: { x: 500, y: 100 },
        data: { label: "Database" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "app-server",
        target: "cache",
        animated: true,
        label: "Cache Lookup",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "cache",
        target: "db",
        animated: true,
        label: "Fetch from DB on Cache Miss",
        type: "custom-edge",
      },
    ],
  },
  {
    id: "real-time-chat-application",
    title: "Design a Real-Time Chat Application",
    difficulty: "hard",
    description:
      "Design a scalable real-time chat application that allows users to send and receive messages instantly.",
    functionalRequirements: [
      "Users should be able to create accounts and log in to the application.",
      "The system should support one-on-one and group chats.",
      "Messages should be delivered instantly and persist for a specified time.",
      "Users should be able to see when others are typing.",
    ],
    nonFunctionalRequirements: [
      "The system should handle up to 1 million concurrent users.",
      "Messages should be delivered with low latency (less than 200ms).",
      "The system should provide end-to-end encryption for messages.",
    ],
    assumptions: [
      "Users will access the application via web and mobile devices.",
      "The application will use WebSockets for real-time communication.",
    ],
    estimatedUsage: [
      "The system is expected to handle 10 million messages per day.",
    ],
    answerNodes: [
      {
        id: "client",
        type: "client",
        position: { x: 100, y: 150 },
        data: { label: "User" },
      },
      {
        id: "chat-server",
        type: "server",
        position: { x: 300, y: -25 },
        data: { label: "Chat Server" },
      },
      {
        id: "database",
        type: "nosql",
        position: { x: 500, y: 150 },
        data: { label: "Database" },
      },
      {
        id: "mq",
        type: "mq",
        position: { x: 300, y: 250 },
        data: { label: "Message Queue" },
      },
    ],
    answerEdges: [
      {
        id: "e1",
        source: "client",
        target: "chat-server",
        animated: true,
        label: "Send Message",
        type: "custom-edge",
      },
      {
        id: "e2",
        source: "chat-server",
        target: "mq",
        animated: true,
        label: "Queue Message",
        type: "custom-edge",
      },
      {
        id: "e3",
        source: "mq",
        target: "database",
        animated: true,
        label: "Store Message",
        type: "custom-edge",
      },
      {
        id: "e4",
        source: "chat-server",
        target: "client",
        animated: true,
        label: "Receive Message",
        type: "custom-edge",
      },
    ],
  },
];
