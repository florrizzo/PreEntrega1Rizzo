import { useState } from "react";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Form from "./Form";
import { Card, CardBody, Container, Box } from "@chakra-ui/react";

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const { cart } = useContext(CartContext);

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
          <h2>Carrito:</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span> - <span>{item.cantidad}</span> -{" "}
                <span>Subtotal: ${item.precio * item.cantidad}</span>{" "}
                <span>
                  <button>Eliminar</button>
                </span>
              </li>
            ))}
          </ul>
          <h2>Total: ${total}</h2> {/* Mostrar el total */}
        </CardBody>
      </Card>

      <Box mt={4}>
        <Form />
      </Box>
    </Container>
  );
};

export default Cart;
