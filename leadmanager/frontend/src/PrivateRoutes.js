import React from "react";
import { Route, Redirect } from "react-router-dom";

// connect components with redux
import { connect } from "react-redux";

// prop types
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) {
          return <p className="lead">Loading...</p>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
