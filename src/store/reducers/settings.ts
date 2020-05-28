import { IActionData, IDataStore } from "./data.interface";
import { AnyAction } from "redux";

import { ISettingsStore } from "./settings.interface";
import { ADD_FAVORITE_SYMBOL, REMOVE_FAVORITE_SYMBOL } from "../types/settings";

const initialState: ISettingsStore = {
  favorites: {
    symbols: [],
    assets: [],
  },
  sidebarType: "symbols",
};

export const settingsReducer = (
  state: ISettingsStore = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_FAVORITE_SYMBOL: {
      if (state.favorites.symbols.find((symbol) => symbol === action.payload)) {
        return state;
      }
      return {
        ...state,
        favorites: {
          ...state.favorites,
          symbols: [...state.favorites.symbols, action.payload],
        },
      };
    }
    case REMOVE_FAVORITE_SYMBOL: {
      const newFavoriteSymbols = state.favorites.symbols.filter(
        (symbol) => symbol !== action.payload
      );
      return {
        ...state,
        favorites: {
          ...state.favorites,
          symbols: newFavoriteSymbols,
        },
      };
    }
    default:
      return state;
  }
};
