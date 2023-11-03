import { createSlice } from '@reduxjs/toolkit';

const openCartSlice = createSlice({
  name: 'cart',
  initialState: { isOpen: false },
  reducers: {
    open(state) { 
      state.isOpen = !state.isOpen
    }
  }
})

export const openCartActions = openCartSlice.actions;
export default openCartSlice.reducer;
