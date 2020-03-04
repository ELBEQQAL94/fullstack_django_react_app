import { combineReducers } from "redux";
import leads from "./leadsReducer";
import errors from "./errorsReducer";
import messages from "./messagesReducer";

export default combineReducers({
  leads,
  errors,
  messages
});
