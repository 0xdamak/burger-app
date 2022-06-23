import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
