import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";
export default function Experience() {
  return (<section id="experience" className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-7xl"><SectionHeading note="Placeholders are marked. Replace them with verified entries.">Experience</SectionHeading>
    <ol className="ml-2 border-l border-v/40 md:ml-[30%]">{experience.map((e) => (<li key={e.title} className="relative pb-14 pl-8 last:pb-0"><span className="absolute -left-[5px] top-2 size-2.5 bg-v" />
      <p className="font-mono text-xs text-v">{e.period}{e.placeholder && " (placeholder)"}</p><h3 className="mt-1 font-display text-4xl sm:text-5xl">{e.title}</h3><p className="text-sm text-fg">{e.org}</p><p className="mt-3 max-w-lg text-mute">{e.description}</p></li>))}</ol></div></section>);
}
