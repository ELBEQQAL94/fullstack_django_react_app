import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

// Components
import Spinner from "../spinner/Spinner";

// prop types
import PropTypes from "prop-types";

// actions
import { registerUser } from "../../redux/actions/auth";
import { createMessage } from "../../redux/actions/messages";

// connect component with redux
import { connect } from "react-redux";

const RegisterForm = ({
  registerUser,
  isAuthenticated,
  isLoading,
  createMessage
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const { username, email, password } = data;

    if (password !== data.confirm_password) {
      createMessage({
        passwordNoMatch: "Should match the passwords!"
      });
    } else {
      registerUser({ username, email, password });
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="type username..."
          ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="example@example.com"
          ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="*******"
          ref={register}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="confirm_password"
          placeholder="repeat your password"
          ref={register}
        />
      </div>

      <button type="submit" className="btn btn-info btn-block">
        {isLoading ? <Spinner /> : "Register"}
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, { registerUser, createMessage })(
  RegisterForm
);
