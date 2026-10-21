import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  alt,
  flushTop,
  children,
  className,
  narrow,
  "aria-labelledby": labelledBy,
}: {
  id?: string;
  alt?: boolean;
  flushTop?: boolean;
  narrow?: boolean;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("section", alt && "section--alt", flushTop && "section--flush-top", className)}>
      <div className="wrap" style={narrow ? { maxWidth: 800 } : undefined}>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  id,
  eyebrow,
  title,
  children,
  center = true,
  reveal = true,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  reveal?: boolean;
}) {
  return (
    <div className={cn("section-head", center && "section-head--center")} data-reveal={reveal ? "" : undefined}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
