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
      const applyApi = async()=>{try {
        const res = await fetch('https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(state.notification),
        });
        if (!res.ok) { 
          throw new Error('Failed to send data')
        }
        console.log('res : ', res);

        state.staus = 'success';
        state.title = 'success...';
        state.message = 'Compleate!'

        const cartItems = await res.json();
        console.log('cartItems', cartItems);
      } catch (error) {
        state.status = 'error';
        state.title = 'error...';
        state.message = error.message;
        }
      }

      applyApi();
    }
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;