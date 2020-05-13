import { IActionData, IStateData } from "./data.types";

const initialState: IStateData = {
  data: {},
  loaded: false,
};

export const dataReducer = (
  state: IStateData = initialState,
  action: IActionData
) => {
  switch (action.type) {
    default:
      return state;
  }
};
