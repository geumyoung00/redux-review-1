import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import manageCartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    manageCart: manageCartReducer,
  }
})

export default store;