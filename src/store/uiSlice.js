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
      console.log(action);
      try {
        const applyApi = async () => { 
          const res = await fetch('https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(action.payload),
          });
          console.log('res : ', res.ok);

          if (!res.ok) {throw new Error('Failed to send data')}
          console.log('res : ', res);

          // state.notification.status = {...state.notification, status : 'success!'}
          // state.notification.title = 'success...';
          // state.notification.message = 'Compleate!'
          
          const itemsState = await res.json();
          console.log('itemsState : ', itemsState);
        }
        applyApi()
      } catch (error) {
         // error 발생
        state.notification.status = 'error';
      }
    }
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;