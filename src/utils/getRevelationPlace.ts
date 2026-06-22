import { sowar } from "../lib/data";
import type { SurahNumber } from "../types"

/**
 * Returns Revelation Place of a specific surah.
 *
 * @param surahNumber - The surah number (1–114).
 *
 * @returns Revelation Place.
 *
 * @example
 * getRevelationPlace(1)
 * // Returns Revelation Place of Surah Al-Fatiha (مكية)
 *
 */
export const getRevelationPlace = (
  surahNumber: SurahNumber
): string => {
  const surah = sowar[surahNumber - 1];

  if (!surah) {
    throw new Error("Invalid surah number");
  }
  
  return surah.revelation_place;
};

