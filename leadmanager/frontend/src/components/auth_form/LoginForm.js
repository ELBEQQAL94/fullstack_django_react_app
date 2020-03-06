import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

// action
import { loginUser } from "../../redux/actions/auth";

// connect component with redux
import { connect } from "react-redux";

const LoginForm = ({ loginUser, isAuthenticated }) => {
  const { register, handleSubmit, reset } = useForm();
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
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
