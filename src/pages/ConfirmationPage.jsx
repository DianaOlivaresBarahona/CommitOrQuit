import React from "react";
import "../stylesheet/confirmationPage.css";
import "../stylesheet/buttonText.css";
import { BsBagCheck } from "react-icons/bs";
import Input from "../components/Input";
import ButtonText from "../components/ButtonText";

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <main className="content">
        <div className="thank-you">
          <h2>Order confirmation</h2>
          <span className="icon">
            <BsBagCheck />
          </span>
          <h3>Thank you!</h3>
          <p>
            A confirmation has been sent to your email.
            <br />
            Since you're here, join our list for discounts!
          </p>
        </div>
        <div className="subscribe">
          <Input
            className="inputField"
            type="email"
            placeholder="Email Address"
          />
          <ButtonText className="buttonText">Yes, sign me up!</ButtonText>
        </div>
      </main>
    </div>
  );
};

export default ConfirmationPage;
