import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/home";
import Users from "./components/users";
import Contact from "./components/contact";
import Notfound from "./components/error";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import Register from "./components/register";

const App = (
  <Provider store={configureStore()}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
