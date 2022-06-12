import CategoryPreview from '../../components/categoryPreview/CategoryPreview';

const CategoriesPreview = ({ categories }) => {
  return (
    <div>
      {Object.keys(categories).map(title => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
