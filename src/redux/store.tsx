// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice.tsx';
import formReducer from './formSlice.tsx';
export const store = configureStore({
  reducer: {
    product: productReducer,
    form: formReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
