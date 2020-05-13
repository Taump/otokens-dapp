export interface IActionData {
  type: string;
  payload?: string | number | object | null;
}

export interface IStateData {
  data: object;
  loaded: boolean;
}
