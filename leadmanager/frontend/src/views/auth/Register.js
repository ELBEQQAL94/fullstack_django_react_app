import React from "react";
import { Link } from "react-router-dom";

// Components
import RegisterForm from "../../components/auth_form/RegisterForm";

const Register = () => (
  <section className="auth">
    <div className="container">
      <h1>Register</h1>
      <Link className="register-or-login" to="/login">
        Have already an account?
      </Link>
      <RegisterForm />
    </div>
  </section>
);

export default Register;
