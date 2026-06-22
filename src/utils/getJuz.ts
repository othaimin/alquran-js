import { ajzaa, ayat } from "../lib/data";
import type { JuzNumber } from "../types"

/**
 * Returns ayat from a specific Juz.
 *
 * @param juzNumber - The Juz number (1–114).
 * @param from - The first ayah to include. Defaults to the first ayah of the juz.
 * @param to - The last ayah to include. Defaults to the last ayah of the juz.
 *
 * @returns An array of ayat text from the specified juz.
 *
 * @example
 * getJuz(1)
 * // Returns all ayat of Juz 1
 *
 * @example
 * getJuz(2, 1, 5)
 * // Returns ayat 1 through 5 of juz 2
 */
export const getJuz = (
  juzNumber: JuzNumber,
  from?: number,
  to?: number
): string[] => {
  const juz = ajzaa[juzNumber - 1];

  if (!juz) {
    throw new Error("Invalid juz number");
  }
  const start = from
    ? (juz.from - 1) + from - 1
    : juz.from
  const end = to
    ? (juz.from - 1) + to
    : juz.to;

  return ayat.slice(start, end);
};

