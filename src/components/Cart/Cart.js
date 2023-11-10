import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { uiActions } from '../../store/uiSlice';

const Cart = (props) => {
  const cartList = useSelector((state) => state.manageCart.items);

  const dispatch = useDispatch();
  
  // 상태값이 업데이트 될 때만 실행된다.
  useEffect(() => {
    dispatch(uiActions.notification(cartList));
   }, [dispatch, cartList]);

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
