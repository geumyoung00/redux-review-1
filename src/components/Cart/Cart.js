import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>장바구니</h2>
      <ul>
        <CartItem
          item={{ title: '🥝', quantity: 3, total: 3000, price: 1000 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
