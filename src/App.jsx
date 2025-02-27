import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./stylesheet/navbar.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useState } from "react";
import CartButton from "./components/CartButton";
import Auth from "./components/Auth";  
import Profile from "./pages/Profile"; 
import FilterButtons from "./components/FilterButtons";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Header />
      <FilterButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage showCart={showCart} setShowCart={setShowCart} />
          }
        />
        <Route path="/login" element={<Auth />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
      <CartButton showCart={showCart} setShowCart={setShowCart} />
      <Footer />
        </>
  );
};

export default App;
