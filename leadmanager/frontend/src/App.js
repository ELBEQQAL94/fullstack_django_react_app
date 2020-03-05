import React from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { alertOptions } from "./alertOptions";
import { Provider } from "react-redux";
import store from "./redux/store";

// Routers Component
import Routes from "./Routes";

import "./styles/style.css";

const App = () => <Routes />;

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("app")
);
