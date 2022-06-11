import { createContext, useState } from 'react';

export const CartContext = createContext({
  visible: null,
});

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState({ visible: false });
  const value = { cartState, setCartState };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
