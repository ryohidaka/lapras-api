import { LaprasApiResponse } from "./types";
import { LaprasPublicApi } from "./types/typescript-fetch";

/**
 * Fetches Lapras data for a given share ID.
 *
 * @param {string} shareId - The share ID for which Lapras data is to be fetched.
 * @returns {Promise<LaprasApiResponse>} A Promise that resolves to the Lapras API response.
 */
export const fetchLaprasData = async (
  shareId: string,
): Promise<LaprasApiResponse> => {
  const api = new LaprasPublicApi();
  const res = await api.getLaprasData({ shareId });
  return res;
};
