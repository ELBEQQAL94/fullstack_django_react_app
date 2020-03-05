import axios from "axios";

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../types";
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

  // I'am HERE...

  // GET USER info
  axios.get("api/auth/user", config);
};
