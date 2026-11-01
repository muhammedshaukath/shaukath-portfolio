import { GitBranch, BriefcaseBusiness, Mail } from "lucide-react";
import { site } from "../data/site";
export default function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    ...(site.github ? [{ l: "GitHub", h: site.github, I: GitBranch }] : []),
    ...(site.linkedin ? [{ l: "LinkedIn", h: site.linkedin, I: BriefcaseBusiness }] : []),
    ...(site.email ? [{ l: "Email", h: `mailto:${site.email}`, I: Mail }] : []),
  ];
  return (<ul className={`flex gap-3 ${className}`}>{items.map(({ l, h, I }) => (<li key={l}><a href={h} aria-label={l} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid size-11 place-items-center border border-white/10 text-mute transition-colors hover:border-v hover:text-v"><I size={18} /></a></li>))}</ul>);
}
