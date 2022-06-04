import './categories.style.scss';
import Category from './../category/Category';
const Categories = ({ categories }) => {
  const subTitle = 'Shop Now';

  return (
    <div className="categories__container">
      {categories.map(category => (
        <Category key={category.id} subTitle={subTitle} category={category} />
      ))}
    </div>
  );
};

export default Categories;
