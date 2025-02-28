import React from "react";
import "../stylesheet/checkoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Check and submit your order</h1>

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

      <button className="checkout-button">Submit order</button>

      <p className="checkout-terms">
        By placing this order, you agree to our{" "}
        <a href="#">terms and conditions</a>.
      </p>
    </div>
  );
};

export default CheckoutPage;
