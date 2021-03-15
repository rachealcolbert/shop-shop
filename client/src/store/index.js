import { createStore } from "redux";
import rootReducer from "./rootReducer";

export * from "./library";

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_?.());
