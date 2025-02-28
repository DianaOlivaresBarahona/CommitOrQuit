import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/shoppingCart.css";

const ShoppingCartPage = ({ setShowCart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowCart(true);
    return () => setShowCart(false);
  }, [setShowCart]);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cartPage">
        <h1>Shopping bag</h1>
        <button className="checkout-button" onClick={goToCheckout}>
          Go to Checkout
        </button>
      </div>
    </>
  );
};

export default ShoppingCartPage;
