import React from "react";
import "./index.css";
import LandingPage from "./components/landing";
import { Provider } from "react-redux";
import configureStore from "./store/store";

const App = (
  <Provider store={configureStore()}>
    <LandingPage />
  </Provider>
);

export default App;
