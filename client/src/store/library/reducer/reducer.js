import * as CONST from "../constants";
import initialState from "./initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.UPDATE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case CONST.UPDATE_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CONST.UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload,
      };
    default:
      return state;
  }
};
