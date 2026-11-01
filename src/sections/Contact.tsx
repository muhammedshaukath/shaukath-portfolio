import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
export default function Contact() {
  return (
    <section id="contact" className="bg-ink2 px-5 py-28 md:px-10 md:py-40"><div className="mx-auto max-w-7xl">
      <SectionHeading>Let's build something.</SectionHeading>
      <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-12">
        <p className="max-w-xl font-display text-3xl leading-tight text-fg sm:text-5xl md:col-span-8">{site.email ? "Have a project or idea in mind? Get in touch." : "Find me and follow what I am building."}</p>
        <div className="md:col-span-3 md:col-start-10">{site.email ? <a href={`mailto:${site.email}`} className="break-all font-mono text-sm text-v underline underline-offset-4">{site.email}</a> : <p className="font-mono text-xs text-mute">Email address coming soon</p>}<SocialLinks className="mt-6" /></div>
      </div></div></section>
  );
}
