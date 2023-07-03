import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {  
  const [products, setProducts] = useState([])
  useEffect(() => {
      const db =  getFirestore()
      const itemCollection = collection(db, "productos")
      getDocs(itemCollection).then((snapshot) => {
          const products = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
          setProducts(products)
      })
  }, [])
  const {category} = useParams();
  const filter = products.filter((house) => house.categoria.toLowerCase() === category)

  return (
    <div>
      {category? <ItemList products={filter}/>: <ItemList products={products}/> }
    </div>
  );
};

export default ItemListContainer;
