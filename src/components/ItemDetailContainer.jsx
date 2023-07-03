import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "productos", id);

      try {
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProduct(snapshot.data());
        } else {
          console.log("No existe el documento!");
        }
      } catch (error) {
        console.log("Error al obtener el documento:", error);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(product);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
