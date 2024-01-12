import { configureStore } from "@reduxjs/toolkit";
import { userInfoReducer } from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: userInfoReducer
  },
});
