import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "./stylesheet/navbar.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useState } from "react";
import CartButton from "./components/CartButton";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage showCart={showCart} setShowCart={setShowCart} />
          }
        />
      </Routes>
      <CartButton showCart={showCart} setShowCart={setShowCart} />
      <Footer />
    </>
  );
};

export default App;
