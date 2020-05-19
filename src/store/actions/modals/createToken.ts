import {
  MODAL_CLOSE_CREATE_TOKEN,
  MODAL_OPEN_CREATE_TOKEN
} from "../../types/modals";

export const createTokenOpen = ()=> ({
  type: MODAL_OPEN_CREATE_TOKEN
});

export const createTokenClose = ()=> ({
  type: MODAL_CLOSE_CREATE_TOKEN
});