import type { SkillGroup } from "../types";
// Only list skills you can back up. Empty groups show a prompt to add yours.
export const skills: SkillGroup[] = [
  { title: "Programming Languages", items: [{ name: "C" }, { name: "C++" }, { name: "Python" }, { name: "Java" }] },
  { title: "Frontend Development", items: [] },
  { title: "Backend Development", items: [] },
  { title: "Tools and Technologies", items: [{ name: "Unreal Engine 5", note: "planned project" }] },
];
