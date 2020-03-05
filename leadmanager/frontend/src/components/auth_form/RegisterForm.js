import React from "react";
import { useForm } from "react-hook-form";

// prop types
// import PropTypes from "prop-types";

// action
//import { addLead } from "../../redux/actions/leads";

// connect component with redux
//import { connect } from "react-redux";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    //reset();
  };
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
        Register
      </button>
    </form>
  );
};

// Form.propTypes = {
//   addLead: PropTypes.func.isRequired
// };

// export default connect(null, { addLead })(Form);
export default RegisterForm;
