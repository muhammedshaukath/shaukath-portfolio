import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
const ids = nav.map((n) => n.toLowerCase());
export default function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    addEventListener("keydown", closeOnEscape);
    return () => removeEventListener("keydown", closeOnEscape);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-ink/300 backdrop-blur" : ""}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" className="font-display text-2xl italic">Muhammed <span className="text-v">Shaukath</span></a>
        <ul className="hidden gap-8 md:flex">{nav.map((n) => { const on = active === n.toLowerCase(); return (<li key={n}><a href={`#${n.toLowerCase()}`} aria-current={on ? "true" : undefined} className={`relative text-sm transition-colors hover:text-fg ${on ? "text-fg" : "text-mute"}`}>{n}<span className={`absolute -bottom-1 left-0 h-px bg-v transition-all duration-300 ${on ? "w-full" : "w-0"}`} /></a></li>); })}</ul>
        <button className="grid size-11 place-items-center md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <ul id="mobile-navigation" className={`${open ? "block" : "hidden"} border-t border-white/10 px-5 pb-6 md:hidden`}>{nav.map((n) => (<li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-3 font-display text-4xl">{n}</a></li>))}</ul>
    </header>
  );
}
