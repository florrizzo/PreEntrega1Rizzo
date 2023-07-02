import React from "react";
import ItemCount from "./ItemCount";
import {
  Center,
  Card,
  CardBody,
  Text,
  Stack,
  Image,
  Button,
  Divider,
  CardFooter,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const [count, setCount] = useState(0);
  return (
    <div className="card-product">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product[0].nombre}</Heading>
            <Text>Detalles: {product[0].descripcion}</Text>
            <Text>Categoria: {product[0].categoria}</Text>
            <Text color="blue.600" fontSize="2xl">
              Stock: {product[0].stock}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2"></ButtonGroup>
          <ItemCount stock={product[0].stock} count={count} setCount={setCount} />
          <Button onClick={() => addToCart(product[0].nombre, count)}>Add to Cart</Button>

        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;