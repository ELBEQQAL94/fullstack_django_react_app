import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Alerts from "./components/leads/Alerts";
// import Footer from './components/Footer';
import Home from "./views/Home";
import AddLead from "./views/AddLead";

import NotFound from "./views/NotFound";

const Routers = () => (
  <Router>
    <Header />
    <Alerts />
    <Switch>
      <Route restricted={false} component={Home} path="/" exact />
      <Route restricted={false} component={AddLead} path="/add-lead" />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routers;
