import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/uiSlice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification/Notification';

function App() {
  const isOpenCart = useSelector((state) => state.ui.isOpen);
  const notification = useSelector((state)=> state.ui.notification);
  const cartList = useSelector((state) => state.manageCart.items);
  
  const dispatch = useDispatch();
  console.log('notification :', notification.status);
  
  // 상태값이 업데이트 될 때만 실행된다.
  useEffect(() => {
    dispatch(uiActions.notification(cartList));
    console.log('cartList : ', cartList)


   }, [dispatch, cartList]);



  return (
    <>
      {/* 나중에 상태값으로 업데이트 될 때만 보여주기 */}
      <Notification
        status={notification.status}
        title={notification.title} 
        message={notification.message} />
      <Layout>
        {isOpenCart? <Cart /> : null}
        <Products />
      </Layout>
    </>
  );
}

export default App;
