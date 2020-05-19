export interface IActionModals {
  type: string;
  payload?: string | number | object | null;
}

export interface IModals {
  visible: boolean;
  loading: boolean;
}

export interface IModalsStore {
  createToken: IModals;
  addSupport: IModals;
}
