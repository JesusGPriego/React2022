import { createContext, useState, useEffect } from 'react';

import shopData from '../shopData.json';

// setting what we want to access from another components.
export const ProductsContext = createContext({
  products: null,
  //   setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const value = { products, setProducts };
  //   console.log(products);
  //   useEffect(() => {
  //     setProducts(shopData);
  //   }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
