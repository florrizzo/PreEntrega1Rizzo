import { useParams } from "react-router-dom";
import data from "../data.json";
import ItemList from "./ItemList";
const ItemListContainer = () => {  
  const {category} = useParams();
  const filter = data.filter((house) => house.categoria.toLowerCase() === category)

  return (
    <div>
      {category? <ItemList products={filter}/>: <ItemList products={data}/> }
    </div>
  );
};

export default ItemListContainer;
