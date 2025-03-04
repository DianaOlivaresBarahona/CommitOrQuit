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
    <>
      <h1>Check and submit your order</h1>
      <div className="checkout-page">
        <div className="productCheckout">
          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <h4 className="productName">{item.title}</h4>
                <p className="price">Price: {item.price} €</p>
                <p className="quatity">Quantity: {item.quantity}</p>
              </div>
            ))}
            <p className="checkout-total">Total Amount: {total} €</p>
          </div>
        </div>
        <div className="checkoutNbtn">
          <div className="checkout-section">
            <div className="checkout-row">
              <i data-lucide="calendar"></i>
              <div className="delivery">
                <h4 className="expectedDeliv">Expected delivery</h4>
                <p className="dateDeliv">Thu 27/02 - Fri 28/02</p>
                <p className="freeDeliv">Free</p>
                <p className="messageDeliv">
                  Express delivery is unfortunately not available for this
                  order.
                </p>
              </div>
            </div>

            <div className="checkout-row">
              <i data-lucide="truck"></i>
              <div className="adressDeliv">
                <h4 className="packageTitle">Package will be sent to</h4>
                <p className="adress">Patron Pehr's väg 10, 141 35 Huddinge</p>
                <a className="changeLink" href="#">
                  Change
                </a>
              </div>
            </div>

            <div className="checkout-row">
              <i data-lucide="credit-card"></i>
              <div className="payment">
                <h4 className="paymentTitle">Selected payment method</h4>

                <img
                  className="klarnaIcon"
                  src="../public/Klarna.png"
                  alt="Klarna"
                />

                <a className="changeLink" href="#">
                  Change
                </a>
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
      </div>
    </>
  );
};

export default CheckoutPage;
