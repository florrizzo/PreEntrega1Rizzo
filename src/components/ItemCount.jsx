import { useState } from "react";

const ItemCount = ({ stock, count, setCount }) => {
  
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  return (
    <div>
      <button onClick={restar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ItemCount;
