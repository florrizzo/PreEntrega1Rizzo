import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Form from "./Form";
import {
  Card,
  CardBody,
  Container,
  Box,
  Button,
  Divider,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container maxW="80%" mt={8}>
        <p>No tienes ningún producto en el carrito</p>
      </Container>
    );
  }

  // Calcular el total de la compra
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.cantidad * item.precio,
    0
  );

  return (
    <Container maxW="80%" mt={8}>
      <Card>
        <CardBody>
          <Stack mt="6" spacing="3" className="text-content">
            <Heading size="md">Tu Carrito</Heading>
            {cart.map((item, index) => (
              <React.Fragment key={index}>
                <Text>
                  <span>{item.name}</span> - <span>{item.cantidad}</span> -{" "}
                  <span>Subtotal: ${item.precio * item.cantidad}</span>{" "}
                  <span>
                    <Button onClick={() => deleteFromCart(item.name)}>
                      Eliminar
                    </Button>
                  </span>
                </Text>
              </React.Fragment>
            ))}
            <Text>Total: ${total.toFixed(2)}</Text>
          </Stack>
        </CardBody>
      </Card>

      <Box mt={4}>
        <Divider />
        <Form />
      </Box>
    </Container>
  );
};

export default Cart;
