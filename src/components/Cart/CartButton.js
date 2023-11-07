import { useDispatch } from 'react-redux';
import { openCartActions } from '../../store/openCartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const openCartHandler = () => { 
    dispatch(openCartActions.open());
  }
  
  return (
    <button className={classes.button} onClick={openCartHandler} >
      <span>🛒</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
