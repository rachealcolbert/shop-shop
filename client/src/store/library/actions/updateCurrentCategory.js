import * as CONST from ".../constants";

export default (categories) => ({
  type: CONST.UPDATE_CATEGORIES,
  payload: categories,
});
