import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";

const store = configureStore({
  reducer: { data: rootReducer },
});

export default store;
