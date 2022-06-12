import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // check if item is already in the list.
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  // if it does, increase quantity by 1,
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return the array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCartItem = (cartItems, productToDecrease) => {
  return cartItems.map(item =>
    item.id === productToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(item => item.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = itemToAdd => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const decreaseItemFromCart = itemToDecrease => {
    setCartItems(decreaseCartItem(cartItems, itemToDecrease));
  };
  const removeItemFromCart = itemToRemove => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    decreaseItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
