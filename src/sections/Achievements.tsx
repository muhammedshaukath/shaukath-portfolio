import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/experience";
export default function Achievements() {
  return (<section id="achievements" className="bg-ink2 px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><SectionHeading>Achievements and certifications</SectionHeading>
    <ul className="divide-y divide-white/10 border-y border-white/10">{achievements.map((a) => (<li key={a.title} className="grid gap-2 py-6 md:grid-cols-12"><h3 className="font-display text-3xl md:col-span-5">{a.title}</h3>
      <p className="font-mono text-xs text-mute md:col-span-3">{a.issuer}<br />{a.date}</p><p className="text-mute md:col-span-4">{a.description}{a.link && <> <a className="text-v underline underline-offset-4" href={a.link} target="_blank" rel="noreferrer">View certificate</a></>}</p></li>))}</ul></div></section>);
}
