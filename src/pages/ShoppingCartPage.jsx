import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../stylesheet/shoppingCart.css";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../stylesheet/buttonText.css";
import ButtonText from "../components/ButtonText";

const ShoppingCartPage = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    setShowCart(true);
    return () => setShowCart(false);
  }, [setShowCart]);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const goToCheckout = () => {
    navigate("/checkout", { state: { cart, total: calculateTotal() } });
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
                <div className="product-cart-info">
                  <div className="product-cart-description">
                    <h3 className="productTitleCart">{item.title}</h3>
                    <p>{item.price} €</p>
                  </div>
                  <div className="cart-actions">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <FaPlus />
                    </button>
                    <MdDeleteForever
                      className="deleteBtn"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-price">
            <h3>Total: {calculateTotal()} €</h3>
          </div>

          <ButtonText className="buttonText" onClick={goToCheckout}>
            Go To Checkout
          </ButtonText>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
