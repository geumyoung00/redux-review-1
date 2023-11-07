import { configureStore } from '@reduxjs/toolkit';
import openCartReducer from './uiSlice';
import manageCartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    openCart: openCartReducer,
    manageCart : manageCartReducer
  }
})

export default store;