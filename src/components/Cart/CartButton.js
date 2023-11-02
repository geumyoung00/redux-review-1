import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const oepnCartHandler = () => { 
    dispatch(cartActions.isOpen());
  }

  return (
    <button className={classes.button} onClick={oepnCartHandler} >
      <span>🛒</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
