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
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <>
      <Header showFavorite={showFavorite} setShowFavorite={setShowFavorite} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/favorite"
          element={<FavoritesPage setShowFavorite={setShowFavorite} />}
        />
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
