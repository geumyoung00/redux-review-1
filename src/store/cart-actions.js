import { cartActions } from './cartSlice';
import { uiActions } from './uiSlice';

// Thunk : 함수, 액션 생성자. 액션을 리턴해주는 함수를 리턴하는 함수.
// Thunk의 리턴되는 함수의 인자로 redux toolkit이 자동으로 dispatch를 부여.

// PUT: update DB
export const updateCart = (cartList) => {
  return async (dispatch) => {
    // fetch 전 상태값을 pending으로
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Penging',
        message: 'Pending...',
      }),
    );

    // PUT 메소드로 fetch
    const sendRequest = async () => {
      const res = await fetch(
        'https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartList),
        },
      );

      if (!res.ok) {
        throw new Error('api 전송 중 실패...');
      }
    };

    // try, catch로 fetch 실행
    try {
      // 전송 성공시 상태값.
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Success!',
        }),
      );
    } catch (error) {
      // error 발생시 상태값
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'PUT error...',
        }),
      );
    }
  };
};

// GET : fetch DB data
export const fetchCart = () => {
  return async (dispatch) => {
    // api 호출하기
    const callApi = async () => {
      const res = await fetch(
        'https://cart-data-cc615-default-rtdb.firebaseio.com/cart.json',
      );

      const getData = await res.json();

      return getData;
    };

    const items = await callApi();

    dispatch(cartActions.fill(items));
  };
};
