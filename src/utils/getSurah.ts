import { ayat, sowar } from "../lib/data";
import type { SurahNumber } from "../types"

/**
 * Returns ayat from a specific surah.
 *
 * @param surahNumber - The surah number (1–114).
 * @param from - The first ayah to include. Defaults to the first ayah of the surah.
 * @param to - The last ayah to include. Defaults to the last ayah of the surah.
 *
 * @returns An array of ayat text from the specified surah.
 *
 * @example
 * getSurah(1)
 * // Returns all ayat of Surah Al-Fatiha
 *
 * @example
 * getSurah(2, 1, 5)
 * // Returns ayat 1 through 5 of Surah Al-Baqarah
 */
export const getSurah = (
  surahNumber: SurahNumber,
  from?: number,
  to?: number
): string[] => {
  const surah = sowar[surahNumber - 1];

  if (!surah) {
    throw new Error("Invalid surah number");
  }
  const start = from 
  ? (surah.from - 1) + from -1
  : surah.from
  const end = to
    ? (surah.from - 1) + to
    : surah.to;

  return ayat.slice(start, end);
};

