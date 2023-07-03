import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const addToCart = (product, quantity, precio) => {
    const newItem = { name: product, cantidad: quantity, precio: precio };
    setCart([...cart, newItem]);
    setTotalCount(totalCount + quantity);
  };

  const contextValues = {
    cart,
    setCart,
    totalCount,
    setTotalCount,
    addToCart,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
