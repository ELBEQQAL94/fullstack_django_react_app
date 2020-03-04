import axios from "axios";

import { createMessage } from "./messages";
import { handleErrors } from "./errors";
import { GET_LEADS, ADD_LEAD, DELETE_LEAD, GET_ERRORS } from "../types";

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(handleErrors(err.response.data, err.response.status))
    );
};

export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead added successfully!" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(handleErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead deleted successfully!" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err =>
      dispatch(handleErrors(err.response.data, err.response.status))
    );
};
