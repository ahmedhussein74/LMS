import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../toolkit/loginSlice";
import signupReducer from "../toolkit/signupSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});
