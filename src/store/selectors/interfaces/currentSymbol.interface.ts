export interface ICurrentSymbol {
  symbol: string;
  largestAsset: string;
  currentAsset: string;
  expiry_ts: number | null;
  currentSupport: number;
  largestSupport: number;
  isFavorite: boolean;
}
