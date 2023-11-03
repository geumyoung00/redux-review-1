import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const openCartHandler = () => { 
    dispatch(cartActions.open());
  }

  return (
    <button className={classes.button} onClick={openCartHandler} >
      <span>🛒</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
