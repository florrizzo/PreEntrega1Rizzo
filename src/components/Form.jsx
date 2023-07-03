import React, { useContext, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/cartContext";
import { FormControl, Input, FormLabel, FormHelperText } from "@chakra-ui/react";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showOrderId, setShowOrderId] = useState(false); // Estado para controlar la visibilidad del número de orden
  const { cart } = useContext(CartContext);

  const db = getFirestore();

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
  const ordersCollection = collection(db, "orden");

  return (
    <div>
      <FormControl>
        <form onSubmit={handleSubmit}>
          <FormLabel>Nombre completo</FormLabel>
          <Input type="text" required onChange={(e) => setName(e.target.value)} />
          <FormLabel>Email</FormLabel>
          <Input type="email" required onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>
            Completa tus datos para realizar la compra.
          </FormHelperText>
          <input type="submit" value="Enviar compra" className="btn-submit" />
        </form>
      </FormControl>

      {showOrderId && <p>Se envió tu compra con el número de orden: {orderId}</p>}
    </div>
  );
};

export default Form;
