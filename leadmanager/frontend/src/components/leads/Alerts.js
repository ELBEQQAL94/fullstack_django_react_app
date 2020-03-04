import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

// connect with redux
import { connect } from "react-redux";

// prop types
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name[0]}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email[0]}`);
      }
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }

      if (message.addLead) {
        alert.success(message.addLead);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
