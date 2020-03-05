import React from "react";
import { Link } from "react-router-dom";

// Component
import CustomLink from "./CustomLink";

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Leads Managers
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <CustomLink activeOnlyWhenExact to="/" label="Leads" />
            </li>
            <li className="nav-item">
              <CustomLink to="/add-lead" label="Add Lead" />
            </li>
            <li className="nav-item">
              <CustomLink to="/register" label="Register" />
            </li>
            <li className="nav-item">
              <CustomLink to="/login" label="Login" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
