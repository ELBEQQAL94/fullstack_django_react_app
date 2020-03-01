import React from "react";
import { formatDate } from "../../helpers";

const Lead = ({ name, message, email, createdAt }) => (
  <div className="col-md-6">
    <div className="lead">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-uppercase">
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
          <h6 className="card-subtitle mb-2 text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="brown"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>{" "}
            {email}
          </h6>
          <p className="card-text lead">{message}</p>
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

export default Lead;
