import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import login from "../reducers/login.reducer";

const middleware = [thunk];

export default function configureStore() {
  return createStore(
    combineReducers({
      login
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
