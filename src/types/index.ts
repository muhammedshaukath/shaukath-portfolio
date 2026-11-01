export interface Project { title: string; category: string; description: string; tech: string[]; status: string; github?: string; demo?: string; image?: string; }
export interface SkillGroup { title: string; items: { name: string; note?: string }[]; }
export interface ExperienceItem { title: string; org: string; period: string; description: string; placeholder?: boolean; }
export interface Achievement { title: string; issuer: string; date: string; description: string; link?: string; image?: string; placeholder?: boolean; }
