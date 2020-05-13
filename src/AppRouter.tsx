import React from "react";
import { Router, Route } from "react-router-dom";

import { MainPage } from "./pages";
import history from "./history";

export const AppRouter: React.FC = () => (
  <Router history={history}>
    <Route path="/" component={MainPage} exact />
  </Router>
);
