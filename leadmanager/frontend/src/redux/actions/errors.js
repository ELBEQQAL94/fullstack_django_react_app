import { GET_ERRORS } from "../types";

export const handleErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: {
      msg,
      status
    }
  };
};
