import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'cart',
  initialState: { isOpen: false },
  reducers: {
    open(state) { 
      state.isOpen = !state.isOpen
    },
    
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
