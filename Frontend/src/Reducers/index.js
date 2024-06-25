import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import classSpaceReducer from "./ClassSpaceReducer";
import classReducer from "./ClassReducer";

export const reducers = combineReducers({
  authReducer,

  classSpaceReducer,
  classData: classReducer,
  classReducer,
});
