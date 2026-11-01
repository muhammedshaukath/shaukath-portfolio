import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
const link = "inline-flex items-center gap-1 underline decoration-v underline-offset-4";
export default function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  const initials = p.title.split(" ").map((w) => w[0]).join("");
  const end = flip ? "md:justify-end" : "";
  return (
    <motion.article whileHover="h" className="grid items-end gap-8 md:grid-cols-12">
      <div className={`relative md:col-span-7 md:row-start-1 ${flip ? "md:col-start-6" : "md:col-start-1"}`}>
        {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          : <div className="overflow-hidden bg-surface" role="img" aria-label={`${p.title} placeholder cover`}><motion.div variants={{ h: { scale: 1.05 } }} className="grid aspect-[4/3] place-items-center"><span className="font-display text-[10rem] italic leading-none text-v3 sm:text-[16rem]">{initials}</span></motion.div></div>}
        <span className="absolute left-0 top-0 bg-v px-3 py-1 font-mono text-xs text-ink">{p.status}</span>
      </div>
      <div className={`relative z-10 md:col-span-6 md:row-start-1 ${flip ? "md:col-start-1 md:text-right" : "md:col-start-7"}`}>
        <p className="font-mono text-xs text-v">{p.category}</p>
        <h3 className={`mt-2 font-display text-6xl leading-[0.9] sm:text-8xl ${flip ? "md:-mr-24" : "md:-ml-24"}`}>{p.title}</h3>
        <p className={`mt-5 max-w-md text-mute ${flip ? "md:ml-auto" : ""}`}>{p.description}</p>
        <ul className={`mt-5 flex flex-wrap gap-2 ${end}`}>{p.tech.map((t) => <li key={t} className="border border-white/15 px-2 py-1 font-mono text-xs">{t}</li>)}</ul>
        <div className={`mt-6 flex gap-5 text-sm ${end}`}>
          {p.github && <a className={link} href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>}
          {p.demo && <a className={link} href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
          {!p.github && !p.demo && <span className="font-mono text-xs text-mute">Links will be added when available</span>}
        </div>
      </div>
    </motion.article>
  );
}
