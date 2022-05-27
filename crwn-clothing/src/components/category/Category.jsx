import './category.style.scss';
const Category = ({ category: { title, subTitle, imageUrl } }) => (
  <div className="category__container">
    <div
      className="background__image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="category__body__container">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  </div>
);
export default Category;
