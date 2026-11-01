import type { SkillGroup } from "../types";
export default function SkillCard({ group }: { group: SkillGroup }) {
  return (<div className="border-t border-white/10 py-8"><h3 className="font-mono text-sm text-v">{group.title}</h3>
    {group.items.length ? (<ul className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-2">{group.items.map((i) => (<li key={i.name} className="font-display text-5xl leading-none sm:text-6xl">{i.name}{i.note && <span className="ml-2 font-mono text-xs text-mute">{i.note}</span>}</li>))}</ul>)
      : (<p className="mt-5 font-mono text-xs text-mute">Nothing verified yet. Add skills in src/data/skills.ts.</p>)}</div>);
}
