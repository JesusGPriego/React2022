import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = ({ categories }) => {
  const { category } = useParams();
  const products = categories[category];

  return (
    <div className="category__content">
      <CategoryTitle className="category__name">
        {category.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <div key={product.id} className="id__container" id={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </CategoryContainer>
    </div>
  );
};

export default Category;
