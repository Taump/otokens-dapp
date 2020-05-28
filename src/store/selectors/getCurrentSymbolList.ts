import { IStore } from "../reducers/index.interface";
import { ICurrentSymbol } from "./interfaces/currentSymbol.interface";

export const getCurrentSymbolList: (store: IStore) => ICurrentSymbol[] = (
  store: IStore
) => {
  const { symbols, supportLinks } = store.data;
  const favoriteSymbols = store.settings.favorites.symbols;
  const result: ICurrentSymbol[] = [];
  for (let symbol in symbols) {
    const { currentAsset, expiry_ts, largestAsset } = symbols[symbol];
    const currentSupport = supportLinks[symbol + "_" + currentAsset];
    const largestSupport = supportLinks[symbol + "_" + largestAsset];
    const isFavorite = favoriteSymbols.find(
      (FavoriteSymbol) => FavoriteSymbol === symbol
    );
    if (currentSupport && largestSupport && currentAsset && largestAsset) {
      const current = {
        symbol,
        largestAsset,
        currentAsset,
        expiry_ts: expiry_ts || null,
        currentSupport: currentSupport.support || 0,
        largestSupport: largestSupport.support || 0,
        isFavorite: !!isFavorite,
      };
      result.push(current);
    }
  }
  return result;
};
