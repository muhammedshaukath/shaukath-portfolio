import { nav, site } from "../data/site";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (<footer className="border-t border-white/10 px-5 py-10 md:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
    <p className="text-sm text-mute">© {new Date().getFullYear()} {site.name}</p>
    <ul className="flex flex-wrap gap-5 text-sm text-mute">{nav.map((n) => <li key={n}><a className="hover:text-v" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
    <SocialLinks /></div></footer>);
}
