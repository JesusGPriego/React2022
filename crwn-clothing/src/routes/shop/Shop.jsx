import { useContext } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { CartContext } from '../../contexts/Cart';
import { ProductsContext } from '../../contexts/Product';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);
  const addItemDelegation = e => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'button') {
      const currentId = Number(e.target.parentNode.parentNode.id);
      const currentItem = products.find(product => product.id === currentId);
      addItemToCart(currentItem);
    }
  };

  return (
    <div className="product__container" onClick={addItemDelegation}>
      {products.map(product => {
        return (
          <div key={product.id} id={product.id}>
            <ProductCard product={product} />;
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
