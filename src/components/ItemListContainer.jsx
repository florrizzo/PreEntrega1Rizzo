import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const itemCollection = collection(db, "productos");

      try {
        const snapshot = await getDocs(itemCollection);
        const products = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { category } = useParams();
  const filteredProducts = category
    ? products.filter((product) => product.categoria.toLowerCase() === category)
    : products;

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;
