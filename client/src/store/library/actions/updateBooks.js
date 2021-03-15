import * as CONST from ".../constants";

export default (products) => ({
  type: CONST.UPDATE_PRODUCTS,
  payload: products,
});
