import {
  MODAL_OPEN_CREATE_TOKEN,
  MODAL_CLOSE_CREATE_TOKEN,
  MODAL_CLOSE_ADD_SUPPORT,
  MODAL_OPEN_ADD_SUPPORT,
} from "../types/modals";
import { IModals, IModalsStore, IActionModals } from "./modals.interface";
import { AnyAction } from "redux";

const initModalProperty: IModals = {
  visible: false,
  loading: false,
};

const initialState: IModalsStore = {
  createToken: {
    ...initModalProperty,
  },
  addSupport: {
    ...initModalProperty,
  },
};

//IActionModals
export const modalsReducer = (
  state: IModalsStore = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case MODAL_OPEN_CREATE_TOKEN: {
      return {
        ...state,
        createToken: {
          ...state.createToken,
          visible: true,
        },
      };
    }
    case MODAL_CLOSE_CREATE_TOKEN: {
      return {
        ...state,
        createToken: {
          ...state.createToken,
          visible: false,
        },
      };
    }

    case MODAL_OPEN_ADD_SUPPORT: {
      return {
        ...state,
        addSupport: {
          ...state.addSupport,
          visible: true,
        },
      };
    }
    case MODAL_CLOSE_ADD_SUPPORT: {
      return {
        ...state,
        addSupport: {
          ...state.addSupport,
          visible: false,
        },
      };
    }
    default:
      return state;
  }
};
