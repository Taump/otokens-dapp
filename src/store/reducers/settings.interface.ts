export interface ISettingsStore {
  favorites: {
    symbols: string[];
    assets: string[];
  };
  sidebarType: "assets" | "symbols";
}
