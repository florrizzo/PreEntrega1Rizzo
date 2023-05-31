import data from "../data.json";
import ItemList from "./ItemList";
const ItemListContainer = () => {  
  return (
    <div>
      <ItemList products={data}/>
    </div>
  );
};

export default ItemListContainer;
