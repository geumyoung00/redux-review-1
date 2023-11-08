import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification/Notification';

function App() {
  const isOpenCart = useSelector((state) => state.ui.isOpen);
  const notification = useSelector((state)=> state.ui.notification);
  
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
