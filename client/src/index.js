import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"; //applyMiddleware : apply redux thunk as middleware
import thunk from "redux-thunk";
import Reducers from "./reducers/index";

const store = createStore(Reducers, compose(applyMiddleware(thunk))); //thunk handles async operations wrt redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
