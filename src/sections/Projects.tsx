import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
export default function Projects() {
  return (<section id="projects" className="bg-ink2 px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-7xl"><SectionHeading note="Screenshots and links appear here once they exist.">Projects</SectionHeading>
    <div className="space-y-28 md:space-y-44">{projects.map((p, i) => <ProjectCard key={p.title} p={p} flip={i % 2 === 1} />)}</div></div></section>);
}
