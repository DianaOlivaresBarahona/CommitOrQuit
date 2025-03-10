import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./stylesheet/Navbar.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useState } from "react";
import CartButton from "./components/CartButton";
import { SearchProvider } from "./context/SearchContext";
import FavoritesPage from "./pages/FavoritesPage";
import Auth from "./components/Auth";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <CartProvider>
      <SearchProvider>
        <ScrollToTop />
        <div className="app-container">
          {" "}
          {/* Viktigt: ny wrapper med flex layout */}
          <Header
            showFavorite={showFavorite}
            setShowFavorite={setShowFavorite}
          />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/favorite"
                element={<FavoritesPage setShowFavorite={setShowFavorite} />}
              />
              <Route
                path="/cart"
                element={
                  <ShoppingCartPage
                    showCart={showCart}
                    setShowCart={setShowCart}
                  />
                }
              />
              <Route path="/login" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
          </main>
          <CartButton showCart={showCart} setShowCart={setShowCart} />
          <Footer />
        </div>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;
