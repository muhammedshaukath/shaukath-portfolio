import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileDown } from "lucide-react";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
const line = { hidden: { y: "105%" }, show: (i: number) => ({ y: 0, transition: { duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.16, 1, 0.3, 1] as const } }) };
export default function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => { if (reduce) return; const t = setInterval(() => setI((n) => (n + 1) % site.phrases.length), 2800); return () => clearInterval(t); }, [reduce]);
  const L = ({ n, children, cls = "" }: { n: number; children: React.ReactNode; cls?: string }) => (<span className={`block overflow-hidden pb-[0.08em] ${cls}`}><motion.span className="block" custom={n} variants={line} initial={reduce ? "show" : "hidden"} animate="show">{children}</motion.span></span>);
  return (
    <section id="home" className="relative flex min-h-svh flex-col justify-end px-5 pb-12 pt-28 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="font-display text-[clamp(4.2rem,17vw,16rem)] leading-[0.82] tracking-tight">
          <L n={0}>Muhammed</L><L n={1} cls="md:ml-[14vw] italic text-v">Shaukath A.</L>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="max-w-md text-lg text-mute">{site.intro}</p>
            <p className="mt-5 flex min-h-7 items-center gap-2 font-mono text-sm" aria-live="off"><span className="h-px w-8 bg-v" />
              <AnimatePresence mode="wait"><motion.span key={i} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>{site.phrases[i]}</motion.span></AnimatePresence></p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="#projects">View Projects</Button><Button variant="line" href={site.resume} download><FileDown size={16} />Download Resume</Button></div>
          </div>
          <dl className="space-y-3 border-l border-v/60 pl-5 font-mono text-xs text-mute md:col-span-3 md:col-start-9">
            <div><dt className="text-v">Studying</dt><dd className="text-fg">Computer Science Engineering</dd></div>
            <div><dt className="text-v">Focus</dt><dd className="text-fg">Developer</dd></div>
            <div><dt className="text-v">Based in</dt><dd className="text-fg">{site.location}</dd></div>
            <SocialLinks className="pt-3" />
          </dl>
        </div>
      </div>
    </section>
  );
}
