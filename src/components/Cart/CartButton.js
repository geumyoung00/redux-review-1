import { useDispatch, useSelector } from 'react-redux';
import { openCartActions } from '../../store/openCartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const openCartHandler = () => { 
    dispatch(openCartActions.open());
  }
  
  // 1. product item이 담긴 배열 items를 가져온다.
  const cartItems = useSelector((state) => state.manageCart.items);

  // 2. items 객체의 quantity 값만 합산한다. (reduce로)
  const totalQuantity = cartItems.reduce((prev, current) => {
    return prev + current.quantity
  }, 0);

return (
    <button className={classes.button} onClick={openCartHandler} >
      <span>🛒</span>
      {/* 3. badge에 연결해준다. */}
    <span className={classes.badge}>{ totalQuantity }</span>
    </button>
  );
};

export default CartButton;
