import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartList = useSelector((state) => state.manageCart.items);

  return (
    <Card className={classes.cart}>
      <h2>장바구니</h2>
      <ul>
        {cartList.map((item) => <CartItem key={item.id} item={{id:item.id, title: item.title, quantity: item.quantity, price:item.price, total:item.price * item.quantity}} />
        )}
      </ul>
    </Card>
  );
};

export default Cart;
