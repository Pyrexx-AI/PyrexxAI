import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tone = "brand" | "violet" | "green";

/** Rotating tone helper so repeated cards alternate blue / violet / green consistently. */
export const toneAt = (i: number): Tone => (["brand", "violet", "green"] as const)[i % 3];

export default function IconTile({ icon: Icon, tone = "brand" }: { icon: LucideIcon; tone?: Tone }) {
  return (
    <div className={cn("icon-tile", tone === "violet" && "icon-tile--violet", tone === "green" && "icon-tile--green")} aria-hidden="true">
      <Icon className="icon" />
    </div>
  );
}
