import { IActionData, IDataStore } from "./data.types";

const initialState: IDataStore = {
  data: {},
  loaded: false,
};

export const dataReducer = (
  state: IDataStore = initialState,
  action: IActionData
) => {
  switch (action.type) {
    default:
      return state;
  }
};
