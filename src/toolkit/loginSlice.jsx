import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLogin: (state) => {
      return {
        ...state,
        active: !state.active,
      };
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
