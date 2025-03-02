import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./stylesheet/navbar.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useState } from "react";
import CartButton from "./components/CartButton";
import { SearchProvider } from "./context/SearchContext";
import FavoritesPage from "./pages/FavoritesPage";
import Auth from "./components/Auth";
import Profile from "./pages/Profile";
import FilterButtons from "./components/FilterButtons";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <>
      <SearchProvider>
        <ScrollToTop />
        <Header showFavorite={showFavorite} setShowFavorite={setShowFavorite} />
        <FilterButtons />

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
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>

        <CartButton showCart={showCart} setShowCart={setShowCart} />
        <Footer />
      </SearchProvider>
    </>
  );
};

export default App;
