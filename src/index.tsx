import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "antd/dist/antd.css";
import "./index.css";

import configureStore from "./store";

import { AppRouter } from "./AppRouter";

const { persistor, store } = configureStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
