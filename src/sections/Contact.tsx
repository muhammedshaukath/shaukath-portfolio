import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";
const field = "w-full border-b border-white/20 bg-transparent py-3 text-fg placeholder:text-mute focus:border-v focus:outline-none";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    // No backend configured: open the visitor's email app with the message filled in.
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${d.get("name")}`)}&body=${encodeURIComponent(`${d.get("message")}\n\nReply to: ${d.get("email")}`)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="px-5 py-28 md:px-10 md:py-40"><div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
      <div className="md:col-span-7"><SectionHeading>Let's build something.</SectionHeading>
        <a href={`mailto:${site.email}`} className="break-all font-display text-3xl italic text-v underline-offset-8 hover:underline sm:text-5xl">{site.email}</a><SocialLinks className="mt-8" /></div>
      <form onSubmit={submit} className="space-y-6 md:col-span-5 md:pt-8">
        <label className="block text-sm text-mute">Name<input required name="name" autoComplete="name" className={field} /></label>
        <label className="block text-sm text-mute">Email<input required type="email" name="email" autoComplete="email" className={field} /></label>
        <label className="block text-sm text-mute">Message<textarea required name="message" rows={4} className={field} /></label>
        <button className="min-h-11 bg-v px-6 py-3 font-medium text-ink transition-colors hover:bg-fg">Send by email</button>
        <p className="font-mono text-xs text-mute" role="status">{sent ? "Your email app should open with the message ready to send." : "This opens your email app. No data is stored."}</p>
      </form></div></section>
  );
}
