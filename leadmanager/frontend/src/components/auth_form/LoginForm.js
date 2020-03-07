import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

// Components
import Spinner from "../spinner/Spinner";

// prop types
import PropTypes from "prop-types";

// action
import { loginUser } from "../../redux/actions/auth";

// connect component with redux
import { connect } from "react-redux";

const LoginForm = ({ loginUser, isAuthenticated, isLoading }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data);
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
          type="password"
          className="form-control"
          name="password"
          placeholder="*******"
          ref={register}
        />
      </div>

      <button type="submit" className="btn btn-info btn-block">
        {isLoading ? <Spinner /> : "Login"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
