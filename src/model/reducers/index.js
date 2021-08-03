import { combineReducers } from "redux";
import ReminderReducer from "./reminder";

export default combineReducers({
  reminder: ReminderReducer,
});
