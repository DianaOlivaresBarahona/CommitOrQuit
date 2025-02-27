import React from "react";
import { useNavigate, useLocation } from "react-router";
import { BsBag } from "react-icons/bs";
import "../stylesheet/cartButton.css";

const CartButton = ({ showCart, setShowCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/cart") return null;

  return (
    <button
      onClick={() => {
        navigate("/cart");
        setShowCart(true);
      }}
      className="cartBtn"
    >
      <BsBag size={24} />
    </button>
  );
};

export default CartButton;
