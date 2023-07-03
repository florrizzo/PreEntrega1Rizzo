import React, { useContext } from "react";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/cartContext";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { cart } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      email,
      cart
    };
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };
  const ordersCollection = collection(db, "orden");

  return (
    <div>
        <FormControl>
            <form onSubmit={handleSubmit}>
            <FormLabel>Nombre completo</FormLabel>
            <Input type='text' onChange={(e) => setName(e.target.value)}/>
            <FormLabel>Email</FormLabel>
            <Input type='email' onChange={(e) => setEmail(e.target.value)}/>
            <FormHelperText>Completa tus datos para realizar la compra.</FormHelperText>
            </form>
        </FormControl>
      
      <p>Orden: {orderId}</p>
    </div>
  );
};
export default Form;
