import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { dataReducer } from "./reducers/data";
import { modalsReducer } from "./reducers/modals";

const rootReducer = combineReducers({
  data: dataReducer,
  modals: modalsReducer
});

const persistConfig = {
  key: "tokens",
  storage,
  whitelist: [],
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk), composeEnhancers())
  );

  return { store, persistor: persistStore(store) };
};
