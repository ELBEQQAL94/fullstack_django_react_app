import { combineReducers } from "redux";
import leads from "./leadsReducer";
import errors from "./errorsReducer";

export default combineReducers({
  leads,
  errors
});
