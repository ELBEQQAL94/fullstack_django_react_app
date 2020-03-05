import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import Header from "./components/layout/Header";
import Alerts from "./components/leads/Alerts";
// import Footer from './components/Footer';

// Private Routes
import Home from "./views/Home";
import AddLead from "./views/AddLead";

// Public Routes
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";

import NotFound from "./views/NotFound";

const Routers = () => (
  <Router>
    <Header />
    <Alerts />
    <Switch>
      <PublicRoutes
        restricted={true}
        component={Register}
        path="/register"
        exact
      />
      <PublicRoutes restricted={true} component={Login} path="/login" exact />
      <PrivateRoutes component={Home} path="/" exact />
      <PrivateRoutes component={AddLead} path="/add-lead" />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routers;
