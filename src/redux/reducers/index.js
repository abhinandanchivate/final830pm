import { combineReducers } from "redux";
import authReducer from "./authReducers";
import alertReducer from "./alertReducer";
import profileReducer from "./profileReducer";
const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  profileReducer,
});

export default rootReducer;
