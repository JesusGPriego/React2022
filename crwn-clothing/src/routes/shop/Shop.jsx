import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { CategoriesContext } from '../../contexts/Categories';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categoryPreview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);

  const handleClick = e => {
    e.preventDefault();
    if (e.target.tagName.toLowerCase() === 'button') {
      addItem(e);
    }
  };

  const addItem = e => {
    const currentId = Number(e.target.parentNode.closest('.id__container').id);
    const clickedItemCategory = e.target.parentNode
      .closest('.category__content')
      .querySelector('.category__name')
      .innerHTML.toLowerCase();

    const currentCategory = categories[clickedItemCategory];
    const currentItem = currentCategory.find(
      product => product.id === currentId
    );

    addItemToCart(currentItem);
  };

  return (
    <div onClick={handleClick}>
      <Routes>
        <Route index element={<CategoriesPreview categories={categories} />} />
        <Route
          path=":category"
          element={<Category categories={categories} />}
        />
      </Routes>
    </div>
  );
};

export default Shop;
