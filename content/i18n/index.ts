import { en } from "./en";
import { th } from "./th";
import type { Locale } from "../site";

export const dictionary = (locale: Locale) => locale === "th" ? th : en;
export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (token, key: string) => String(values[key] ?? token));
