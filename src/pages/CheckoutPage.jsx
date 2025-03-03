import React from "react";
import "../stylesheet/checkoutPage.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || [];
  const total = location.state?.total || "0.00";

  const handleSubmitOrder = () => {
    navigate("/confirmation");
  };

  return (
    <div className="checkout-page">
      <h1>Check and submit your order</h1>

      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <h4>{item.title}</h4>
            <p>Price: {item.price} €</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
        <p className="checkout-total">Total Amount: {total} €</p>
      </div>

      <div className="checkout-section">
        <div className="checkout-row">
          <i data-lucide="calendar"></i>
          <div>
            <p>Expected delivery</p>
            <p>Thu 27/02 - Fri 28/02</p>
            <p>Free</p>
            <p>
              Express delivery is unfortunately not available for this order.
            </p>
          </div>
        </div>

        <div className="checkout-row">
          <i data-lucide="truck"></i>
          <div>
            <p>Package will be sent to</p>
            <p>Patron Pehr's väg 10, 141 35 Huddinge</p>
            <a href="#">Change</a>
          </div>
        </div>

        <div className="checkout-row">
          <i data-lucide="credit-card"></i>
          <div>
            <p>Selected payment method</p>
            <p>Klarna</p>
            <a href="#">Change</a>
          </div>
        </div>
      </div>

      <button className="checkout-button" onClick={handleSubmitOrder}>
        {" "}
        Submit order{" "}
      </button>

      <p className="checkout-terms">
        By placing this order, you agree to our{" "}
        <a href="#">terms and conditions</a>.
      </p>
    </div>
  );
};

export default CheckoutPage;
