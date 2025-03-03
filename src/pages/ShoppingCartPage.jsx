import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../stylesheet/shoppingCart.css";
import { MdDeleteForever } from "react-icons/md";

const ShoppingCartPage = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    setShowCart(true);
    return () => setShowCart(false);
  }, [setShowCart]);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartPage">
      <h1>Shopping bag</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li className="product-card-buy" key={item.id}>
                <img
                  className="product-cart-img"
                  src={item.image}
                  alt={item.title}
                />
                <div className="product-cart-description">
                  {item.title} - {item.price} €
                </div>
                <MdDeleteForever
                  className="deleteBtn"
                  onClick={() => removeFromCart(item.id)}
                />
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear</button>
          <button className="checkout-button" onClick={goToCheckout}>
            Go To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
