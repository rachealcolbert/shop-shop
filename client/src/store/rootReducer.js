import { combineReducers } from "redux";
import { libraryReducer as library } from "./library";

export default combineReducers({
  library,
});
