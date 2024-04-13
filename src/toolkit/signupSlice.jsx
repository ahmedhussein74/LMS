import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    toggleSignup: (state) => {
      return {
        ...state,
        active: !state.active,
      };
    },
  },
});

export const { toggleSignup } = signupSlice.actions;

export default signupSlice.reducer;
