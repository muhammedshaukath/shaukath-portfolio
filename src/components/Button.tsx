import type { AnchorHTMLAttributes } from "react";
export default function Button({ variant = "solid", className = "", ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "solid" | "line" }) {
  const v = variant === "solid" ? "bg-v text-ink hover:bg-fg" : "border border-v/50 text-fg hover:border-v hover:bg-v/10";
  return <a {...p} className={`inline-flex min-h-11 items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 active:translate-y-px ${v} ${className}`} />;
}
