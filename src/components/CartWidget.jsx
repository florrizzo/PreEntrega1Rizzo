import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartWidget = () => {
  const { totalCount } = useContext(CartContext);

  return (
    <span>
      <i className="material-symbols-outlined">shopping_cart</i>
      <span>{totalCount}</span>
    </span>
  );
};

export default CartWidget;
