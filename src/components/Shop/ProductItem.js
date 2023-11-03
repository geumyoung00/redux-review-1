import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { manageCartActions } from '../../store/manageCartSlice'

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(manageCartActions.add(props));
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₩ {price.toLocaleString()}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
