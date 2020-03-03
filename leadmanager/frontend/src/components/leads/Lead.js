import React from "react";
import { formatDate } from "../../helpers";

// action

// prop types
import PropTypes from "prop-types";

const Lead = ({ name, message, email, createdAt, id, delLead }) => (
  <div className="col-md-6">
    <div className="lead">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-10 col-sm-6">
              <h5 className="card-title mt-3 text-uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                {name}
              </h5>
            </div>
            <div className="col-md-2 col-sm">
              <svg
                className="edit-icon"
                onClick={() => console.log("edit lead...")}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <svg
                className="delete-icon"
                onClick={() => delLead(id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text lead">
            {message.length === 0 ? "No Message" : message}
          </p>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer text-nowrap">
              <cite title="Source Title">
                Created At:{formatDate(createdAt)}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

Lead.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  delLead: PropTypes.func.isRequired
};

export default Lead;
