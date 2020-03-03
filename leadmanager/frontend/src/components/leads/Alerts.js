import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

// connect with redux
import { connect } from "react-redux";

// prop types
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name[0]}`);
      } else {
        alert.error(`Email: ${error.msg.email[0]}`);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
