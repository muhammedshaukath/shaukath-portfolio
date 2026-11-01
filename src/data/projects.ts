import type { Project } from "../types";
// Add github / demo / image only when they really exist.
export const projects: Project[] = [
  { title: "TANSAM Project", category: "Intern Project", status: "Finished", tech: ["Education", "ERP", "Web Development", "Node.js", "React"],
    description: "A full-stack web application for managing students, staff, and user roles with authentication. Built with Node.js/Express backend and React frontend.",github: "https://github.com/muhammedshaukath/TANSAM_project" },
  { title: "Sun Auto Gas", category: "A Business website", status: "Finished", tech: ["Education", "ERP", "Web Development", "Node.js", "React"],
    description: "Website for Sun Auto Gas, a sequential LPG & CNG fitting and service centre run by P.M. Ansari in Thiruvanmiyur, Chennai.",github: "https://github.com/muhammedshaukath/sun-auto-gas", demo: "https://sun-auto-gas.vercel.app/" },
  { title: "Cast Away", category: "EdTech / Hackathon", status: "Hackathon concept", tech: ["Education", "Problem solving"],
    description: "An educational support concept focused on helping students understand confusing academic material and improve independent problem-solving." },
  { title: "Jungle Expedition", category: "Game Development", status: "Planned", tech: ["Unreal Engine 5"],
    description: "A planned third-person jungle exploration experience focusing on environmental visuals, traversal, character animations, and immersive audio." },
  ];