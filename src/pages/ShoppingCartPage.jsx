import React, { useEffect } from "react";
import "../stylesheet/shoppingCart.css";

const ShoppingCartPage = ({ setShowCart }) => {
  useEffect(() => {
    setShowCart(true);
    return () => setShowCart(false);
  }, [setShowCart]);

  return (
    <>
      <div className="cartPage">
        <h1>Shopping bag</h1>
      </div>
    </>
  );
};

export default ShoppingCartPage;
