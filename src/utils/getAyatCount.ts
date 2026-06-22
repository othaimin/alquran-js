import { sowar } from "../lib/data";
import type { SurahNumber } from "../types"

/**
 * Returns ayat count of a specific surah.
 *
 * @param surahNumber - The surah number (1–114).
 *
 * @returns Ayat count.
 *
 * @example
 * getAyatCount(1)
 * // Returns ayat count of Surah Al-Fatiha (7)
 *
 */
export const getAyatCount = (
  surahNumber: SurahNumber
): number => {
  const surah = sowar[surahNumber - 1];

  if (!surah) {
    throw new Error("Invalid surah number");
  }
  
  return surah.ayat;
};

