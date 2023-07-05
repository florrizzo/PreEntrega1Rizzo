import React, { useState } from "react";

const ItemCount = ({ stock, count, setCount }) => {
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const isIncrementDisabled = count >= stock;
  const isDecrementDisabled = count <= 0;

  return (
    <>
      <div className="item-count-container">
        <button onClick={decrement} disabled={isDecrementDisabled}>
          -
        </button>
        <p>{count}</p>
        <button onClick={increment} disabled={isIncrementDisabled}>
          +
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default ItemCount;
