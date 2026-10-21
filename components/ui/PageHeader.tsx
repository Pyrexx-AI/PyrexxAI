import type { ReactNode } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = {
  trail: { name: string; path: string }[];
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
};

/** Standard inner-page header: breadcrumbs, optional eyebrow, the page's single <h1>, intro copy, CTAs. */
export default function PageHeader({ trail, eyebrow, title, children, actions }: Props) {
  return (
    <header className="page-header">
      <div className="wrap">
        <Breadcrumbs trail={trail} />
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
        {actions && <div className="hero__cta">{actions}</div>}
      </div>
    </header>
  );
}
