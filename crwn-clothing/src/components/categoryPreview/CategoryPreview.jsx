import ProductCard from '../productCard/ProductCard';
import { Link } from 'react-router-dom';
import './categoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category__preview__container category__content">
      <h2>
        <Link className="title category__name" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map(product => (
          <div key={product.id} id={product.id} className="id__container">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
