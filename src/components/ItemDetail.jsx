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
  const { addToCart } = useContext(CartContext);
  if (!product) {
    // Si product es null, puedes mostrar un mensaje de carga o realizar alguna acción alternativa
    return <div>Loading...</div>;
  }
  const [count, setCount] = useState(0);

  return (
    <div className="card-product">
      <div className="card-product">
        <Card maxW="sm">
          <CardBody className="card-body">
            <Image
              src={product.imagen}
              alt="Imagen del producto"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" className="text-content">
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
          <CardFooter className="card-footer">
            <ButtonGroup spacing="2">
              <ItemCount stock={product.stock} count={count} setCount={setCount} />
            </ButtonGroup>
          </CardFooter>
          <div className="button-container">
            <Button onClick={() => addToCart(product.nombre, count, product.precio)}>
              Add to Cart
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
