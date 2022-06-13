import ProductCard from '../productCard/ProductCard';
import { Link } from 'react-router-dom';
import {
  Container,
  Category,
  Preview,
  Title,
} from './categoryPreview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <Container className="category__content">
      <h2>
        <Title className=" category__name" to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map(product => (
          <div key={product.id} id={product.id} className="id__container">
            <ProductCard product={product} />
          </div>
        ))}
      </Preview>
    </Container>
  );
};

export default CategoryPreview;
