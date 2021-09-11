import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, activeEmail: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    addDataActiveEmail: (state, action) => {
      state.activeEmail = action.payload;
    },
    removeDataActiveEmail: (state, action) => {
      state.activeEmail = null;
    },
  },
});

export const { login, logout, addDataActiveEmail, removeDataActiveEmail } =
  userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectActiveEmailData = (state) => state.user.activeEmail;

export default userSlice.reducer;
