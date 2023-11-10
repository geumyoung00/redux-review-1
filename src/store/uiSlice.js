import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpen: false,
    notification: { status: 'pending', title: '', message: '' }
  },
  reducers: {
    open(state) { 
      state.isOpen = !state.isOpen
    },
    notification(state, action) { 
      try {
        const applyApi = async () => { 
          const res = await fetch('https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(state.notification),
          });
          if (!res.ok) {throw new Error('Failed to send data')}
          console.log('res : ', res);

          state.notification.status = 'success';
          state.notification.title = 'success...';
          state.notification.message = 'Compleate!'
          
          const cartItems = await res.json();
          console.log('cartItems : ', cartItems);
        }
        applyApi()
      } catch (error) {
         // error 발생
        state.status = 'error';

        state.title = 'error...';
        state.message = error.message;
      }
    }
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;