import React from "react";
import { useForm } from "react-hook-form";

// prop types
import PropTypes from "prop-types";

// action
import { addLead } from "../../redux/actions/leads";

// connect component with redux
import { connect } from "react-redux";

const Form = ({ addLead }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    addLead(data);
    reset();
  };
  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="type name..."
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
        <textarea
          className="form-control"
          name="message"
          rows="3"
          placeholder="type message..."
          ref={register}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired
};

export default connect(null, { addLead })(Form);
