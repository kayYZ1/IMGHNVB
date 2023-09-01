import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import fileReducer from "../slices/fileSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
});
