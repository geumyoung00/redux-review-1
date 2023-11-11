import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  
  const addHandler = () => { 
    dispatch(cartActions.add(props.item));
  };
  const removeHandler = () => {
    dispatch(cartActions.remove(props.item.id));
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>
          {title} <span>x {quantity}</span>
        </h3>
        <div className={classes.price}>
          ₩ {total.toLocaleString()}
          <span className={classes.itemprice}>
            (₩{price.toLocaleString()}/개당)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}></div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
