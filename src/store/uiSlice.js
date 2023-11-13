import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpen: false,
    notification: null,
  },
  reducers: {
    open(state) {
      state.isOpen = !state.isOpen;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
