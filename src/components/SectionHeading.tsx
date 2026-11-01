export default function SectionHeading({ children, note }: { children: React.ReactNode; note?: string }) {
  return (<div className="mb-14 md:mb-20"><h2 className="font-display text-6xl leading-[0.9] sm:text-8xl md:text-9xl">{children}</h2>{note && <p className="mt-4 max-w-md font-mono text-xs text-mute">{note}</p>}</div>);
}
