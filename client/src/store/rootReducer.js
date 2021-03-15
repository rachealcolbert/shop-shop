import { combineReducers } from "redux";
import { libraryReducer as library } from "./settings";

export default combineReducers({
  library,
});
