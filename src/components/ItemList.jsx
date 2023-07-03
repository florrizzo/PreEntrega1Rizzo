import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              nombre={product.nombre}
              categoria={product.categoria}
              stock={product.stock}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default ItemList;
