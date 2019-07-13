import React from "react";
import LandingPage from "../pages/landing.page";
import { Provider } from "react-redux";
import configureStore from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";

const App = (
  <Provider store={configureStore()}>
    <Router>
      <LandingPage />
    </Router>
  </Provider>
);

export default App;
