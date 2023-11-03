import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {

  const isOpenCart = useSelector((state) => state.openCart.isOpen);

  return (
    <Layout>
      {isOpenCart? <Cart /> : null}
      <Products />
    </Layout>
  );
}

export default App;
