export interface IActionData {
  type: string;
  payload?: string | number | object | null;
}

export interface IDataStore {
  data: object;
  loaded: boolean;
}
