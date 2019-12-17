import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
