import { combineReducers } from "redux";
import { cartSlice } from "./cart";
import { sidebarSlice } from "./sidebar";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["yourCart"],
};

export const reducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  cart: persistReducer(cartPersistConfig, cartSlice.reducer),
});
