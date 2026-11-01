import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";
export default function About() {
  return (
    <section id="about" className="bg-ink2 px-5 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
      <div className="md:col-span-7"><SectionHeading>Learning by building.</SectionHeading></div>
      <div className="space-y-6 text-lg leading-relaxed text-mute md:col-span-5 md:col-start-8 md:pt-6">
        <p>I'm a Computer Science Engineering student in India. I started with C and C++, then moved to Python and Java, and I enjoy turning a confusing problem into code that works.</p>
        <p>I like exploring how modern software is made, from web apps and AI to games, and I try to learn by building small, real things rather than only reading about them.</p>
        <p className="text-fg">I learn best by shipping something, breaking it, and understanding why.</p>
        <ul className="flex flex-wrap gap-2 pt-2">{site.interests.map((t) => <li key={t} className="border border-v/30 px-3 py-1 font-mono text-xs text-fg">{t}</li>)}</ul>
      </div></div></section>
  );
}
