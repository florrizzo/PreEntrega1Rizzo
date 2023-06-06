import React from "react";
import { Container } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ products }) => {
  console.log(products)
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {products.map((products) => {
          return (
            <Item
              key={products.id}
              id={products.id}
              nombre={products.nombre}
              categoria={products.categoria}
              stock={products.stock}
            />
          );
        })}
      </Container>
    </>
  );
};

export default ItemList;
