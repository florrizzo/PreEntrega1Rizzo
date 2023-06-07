import { BrowserRouter, Routes,Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
