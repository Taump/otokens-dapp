import {
  MODAL_CLOSE_ADD_SUPPORT,
  MODAL_OPEN_ADD_SUPPORT,
} from "../../types/modals";

export const addSupportOpen = () => ({
  type: MODAL_OPEN_ADD_SUPPORT,
});

export const addSupportClose = () => ({
  type: MODAL_CLOSE_ADD_SUPPORT,
});
