import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {
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
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.imagen}
          alt="Imagen del producto"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.nombre}</Heading>
          <Text>Detalles: {product.descripcion}</Text>
          <Text>Categoria: {product.categoria}</Text>
          <Text color="blue.400" fontSize="2xl">
            Stock: {product.stock}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            Precio: ${product.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <ItemCount stock={product.stock} count={count} setCount={setCount} />
        </ButtonGroup>
      </CardFooter>
      <div className="button-container">
        <Button
          onClick={() => addToCart(product.nombre, count, product.precio)}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ItemDetail;
