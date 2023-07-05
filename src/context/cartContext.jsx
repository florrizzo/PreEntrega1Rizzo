import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const addToCart = (product, quantity, precio) => {
    const newItem = { name: product, cantidad: quantity, precio: precio };
    setCart((prevCart) => [...prevCart, newItem]);
    setTotalCount((prevTotalCount) => prevTotalCount + quantity);
  };

  const deleteFromCart = (name) => {
    const productIndex = cart.findIndex((item) => item.name === name);

    if (productIndex !== -1) {
      const updatedCart = cart.filter((_, index) => index !== productIndex);
      setCart(updatedCart);
      setTotalCount(
        (prevTotalCount) => prevTotalCount - cart[productIndex].cantidad
      );
    }
  };

  const contextValues = {
    cart,
    setCart,
    totalCount,
    setTotalCount,
    addToCart,
    deleteFromCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
