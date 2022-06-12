import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { getCollectionsAndDocuments } from '../utils/firebase/firebase.utils';

// setting what we want to access from another components.
export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionsAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
