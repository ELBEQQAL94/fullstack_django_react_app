import axios from "axios";

// check Token And Get Response
import { checkTokenAndResponse, getConfig } from "../../helpers";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "../types";
import { handleErrors } from "./errors";

// check TOKEN and load USER
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  // GET USER info
  axios
    .get("api/auth/user", checkTokenAndResponse(getState))
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
  // Body request
  const body = JSON.stringify(data);

  axios
    .post("api/auth/login", body, getConfig())
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

// REGISTER USER
export const registerUser = data => dispatch => {
  // Body request
  const body = JSON.stringify(data);

  axios
    .post("api/auth/register", body, getConfig())
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(handleErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// LOGOUT USER
export const logoutUser = () => (dispatch, getState) => {
  axios
    .post("api/auth/logout", null, checkTokenAndResponse(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(handleErrors(err.response.data, err.response.status));
    });
};
