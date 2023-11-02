import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { isOpen: false },
  reducers: {
    isOpen(state) { 
      state.isOpen = !state.isOpen;
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
