import React, { useContext, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/cartContext";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showOrderId, setShowOrderId] = useState(false); // Estado para controlar la visibilidad del número de orden
  const { cart } = useContext(CartContext);

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      cart,
    };
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      setShowOrderId(true); // Mostrar el número de orden después de enviar el formulario
    });
  };

  return (
    <div>
      <FormControl>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Nombre completo</FormLabel>
          <Input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormHelperText>
            Completa tus datos para realizar la compra.
          </FormHelperText>
          <Button type="submit" colorScheme="blue" mt="4">
            Enviar compra
          </Button>
        </form>
      </FormControl>

      {showOrderId && (
        <p>Se envió tu compra con el número de orden: {orderId}</p>
      )}
    </div>
  );
};

export default Form;
