import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slice/starWarsSlice";
import filmReducer from "./slice/filmSlice";
import rootReducer from "./rootRecuer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
