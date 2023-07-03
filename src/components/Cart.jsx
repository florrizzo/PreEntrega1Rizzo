import { useState } from "react";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Form from "./Form";

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const { cart } = useContext(CartContext);

  if (cart.length == 0) {
    return (
      <div>
        <p>No tenés ningún producto en el carrito</p>
      </div>
    );
  }

  return (
    <div>
      <h2>CART</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>{item.quantity}</span>
          </li>
        ))}
      </ul>

      <Form />
    </div>
  );
};

export default Cart;
