import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";
export default function Skills() {
  return (<section id="skills" className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-7xl"><SectionHeading note="Only skills I can back up are listed here.">Skills</SectionHeading>
    <div className="md:ml-[16%]">{skills.map((g) => <SkillCard key={g.title} group={g} />)}</div></div></section>);
}
