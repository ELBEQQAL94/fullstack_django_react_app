import axios from "axios";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../types";
import { handleErrors } from "./errors";

// check TOKEN and load USER
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  // get token from the state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Conent-Type": "application/json"
    }
  };

  // If TOKEN add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  // GET USER info
  axios
    .get("api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(handleErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// LOGIN USER
export const loginUser = data => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Body request
  const body = JSON.stringify(data);

  axios
    .post("api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(handleErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
