import { createStore } from "redux";
import rootReducer from "./rootReducer";

export * from "./library";

export default createStore(rootReducer);
