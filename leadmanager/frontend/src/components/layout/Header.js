import React from "react";
import { Link } from "react-router-dom";

// Component
import CustomLink from "./CustomLink";

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" href="/">
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <CustomLink activeOnlyWhenExact to="/" label="Home" />
            </li>
            <li className="nav-item">
              <CustomLink to="/add-lead" label="Add Lead" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
