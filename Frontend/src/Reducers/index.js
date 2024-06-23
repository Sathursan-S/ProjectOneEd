import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import classSpaceReducer from "./ClassSpaceReducer";

export const reducers = combineReducers({ authReducer, classSpaceReducer });
