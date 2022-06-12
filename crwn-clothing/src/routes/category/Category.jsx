import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';

const Category = ({ categories }) => {
  const { category } = useParams();
  const products = categories[category];
  return (
    <div className="category__content">
      <h2 className="category-title category__name">
        {category.toUpperCase()}
      </h2>
      <div className="category__container">
        {products &&
          products.map(product => (
            <div key={product.id} className="id__container" id={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
