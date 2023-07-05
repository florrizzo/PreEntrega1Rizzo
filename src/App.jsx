import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./context/cartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

const NotFound = () => {
  return <h2>Ruta no encontrada</h2>;
};

export default App;
