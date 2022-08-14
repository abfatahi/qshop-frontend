import { combineReducers } from "redux";
import { sidebarSlice } from "./sidebar";

export const reducer = combineReducers({
  sidebar: sidebarSlice.reducer,
});
