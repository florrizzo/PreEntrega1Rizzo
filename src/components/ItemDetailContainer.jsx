import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const filter = data.filter((product) => product.id == id)
  return (
    <ItemDetail product={filter}/>
  )
}

export default ItemDetailContainer
