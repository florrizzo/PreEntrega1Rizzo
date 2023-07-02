import { useState } from 'react'
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const { cart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando información")
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

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <button>Enviar información</button>
    </form>
  </div>
  )
}

export default Cart
