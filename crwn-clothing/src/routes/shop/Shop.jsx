import { useContext } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { ProductsContext } from '../../contexts/Product';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product__container">
      {
        /*products && */
        products.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })
      }
    </div>
  );
};

export default Shop;
