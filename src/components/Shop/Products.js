import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <ul>
        <ProductItem
          id={114820}
          title="🍅"
          price={4000}
          description="유기농 완숙 토마토 1kg"
        />
        <ProductItem
          id={286908}
          title="🥝"
          price={5000}
          description="실속형 고당도 키위 400g"
        />
        <ProductItem
          id={94837}
          title="🥔"
          price={1000}
          description="국내산 햇감자"
        />
      </ul>
    </section>
  );
};

export default Products;
