import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from '../redux-slices/uiSlice';
import userSliceReducer from '../redux-slices/userSlice';

export const store = configureStore({
  reducer: { ui: uiSliceReducer, user: userSliceReducer },
});
