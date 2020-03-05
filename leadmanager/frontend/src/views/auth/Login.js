import React from "react";
import { Link } from "react-router-dom";

// Components
import LoginForm from "../../components/auth_form/LoginForm";

const Login = () => (
  <section className="auth">
    <div className="container">
      <h1>Log In</h1>
      <Link className="register-or-login" to="/register">
        Create new account?
      </Link>
      <LoginForm />
    </div>
  </section>
);

export default Login;
