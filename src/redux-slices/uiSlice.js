import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: { messageBoxIsOpen: false },
  reducers: {
    showMessageBox: (state) => {
      state.messageBoxIsOpen = true;
    },
    hideMessageBox: (state) => {
      state.messageBoxIsOpen = false;
    },
  },
});

export const { showMessageBox, hideMessageBox } = uiSlice.actions;

export const selectMessageBox = (state) => state.ui.messageBoxIsOpen;

export default uiSlice.reducer;
