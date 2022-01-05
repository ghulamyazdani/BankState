import { combineReducers } from "@reduxjs/toolkit";
import bankReducers from "./bankReducers";
const reducers = combineReducers({
  bank: bankReducers,
});
export default reducers;
