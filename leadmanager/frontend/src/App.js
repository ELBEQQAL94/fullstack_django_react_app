import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/layout/Header";
import Leads from "./components/leads/Leads";
import "./styles/style.css";

const App = () => (
  <>
    <Header />
    <Leads />
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
