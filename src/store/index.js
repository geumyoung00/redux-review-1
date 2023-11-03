import { configureStore } from '@reduxjs/toolkit';
import openCartReducer from './openCartSlice';
import manageCartReducer from './manageCartSlice';

const store = configureStore({
  reducer: {
    openCart: openCartReducer,
    manageCart : manageCartReducer
  }
})

export default store;