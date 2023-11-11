import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpen: false,
    notification: { status: 'pending', title: 'peding', message: 'peding...' }
  },
  reducers: {
    open(state) { 
      state.isOpen = !state.isOpen
    },
    notification(state, action) { 
      const applyApi = async () => { 
        const res = await fetch('https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(action.payload),
        });

        if (!res.ok) {throw new Error('Failed to send data')}
        
        const items = await res.json();

        state.notification = {status : 'success' , title: 'Success', message: 'Compleate!'}
        
        // state.notification.status = { ...state.notification, status: 'success!' }
        // state.notification.title = 'success...';
        // state.notification.message = 'Compleate!'
      }

      try {
        applyApi()
      } catch (error) {
         // error 발생
        console.error(error.message);
      }
    }
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;