import { ayat } from "../lib/data";

/**
 * Returns a specific ayah.
 * 
 * @param ayahNumber - The ayah number.
 * @returns ayah text
 * 
* @example
 * getAyah(5)
 * // Returns the ayah "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ"
 */
export const getAyah = (ayahNumber:number)=>{
    const ayah = ayat[ayahNumber-1]
if(!ayah){
    throw new Error("Invalid ayah number");

}
    return ayah
}
