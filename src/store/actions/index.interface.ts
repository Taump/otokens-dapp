import { ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import Obyte from "obyte/lib";

export interface ThunkActionWithArguments
  extends ActionCreator<ThunkAction<void, {}, Obyte.Client, AnyAction>> {}
