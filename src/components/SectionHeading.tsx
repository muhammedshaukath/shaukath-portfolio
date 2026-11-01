import { motion, useReducedMotion } from "motion/react";

export default function SectionHeading({ children, note }: { children: React.ReactNode; note?: string }) {
  const reduce = useReducedMotion();
  return (<motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.55, ease: "easeOut" }} className="mb-14 md:mb-20"><h2 className="font-display text-6xl leading-[0.9] sm:text-8xl md:text-9xl">{children}</h2>{note && <p className="mt-4 max-w-md font-mono text-xs text-mute">{note}</p>}</motion.div>);
}
