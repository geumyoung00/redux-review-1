import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { uiActions } from './store/uiSlice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification/Notification';
import { updateCart, fetchCart } from './store/cart-actions';

function App() {
  const isOpenCart = useSelector((state) => state.ui.isOpen);
  const notification = useSelector((state) => state.ui.notification);
  const cartList = useSelector((state) => state.manageCart.items);
  const isAddOrRemove = useSelector((state) => state.manageCart.isAddOrRemove);

  const dispatch = useDispatch();

  // 상태값이 업데이트 될 때만 실행된다.
  useEffect(() => {
    console.log('isAddOrRemove : ', isAddOrRemove);
    if (!isAddOrRemove) return;

    dispatch(updateCart(cartList));
  }, [dispatch, cartList, isAddOrRemove]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <>
      {/* 나중에 상태값으로 업데이트 될 때만 보여주기 */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isOpenCart ? <Cart /> : null}
        <Products />
      </Layout>
    </>
  );
}

export default App;
