import React, { createContext } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const {totalCount, setTotalCount} = useContext(CartContext)

  return (
    <div>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{totalCount}</span>
    </div>
  );
};

export default CartWidget;
