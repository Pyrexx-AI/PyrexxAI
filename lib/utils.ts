import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BOOK_DEMO_HREF } from "@/lib/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Kept for backwards compatibility with existing imports. */
export const CAL_LINK = BOOK_DEMO_HREF;
