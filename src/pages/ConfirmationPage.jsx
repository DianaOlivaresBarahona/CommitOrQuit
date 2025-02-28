import React from "react";
import "../stylesheet/ConfirmationPage.css";
import { BsBagCheck } from "react-icons/bs";



const ConfirmationPage = () => {
    return (
        <div className="confirmation-page">
            <main className="content">
                <h2>Order confirmation</h2>
                <span className="icon">
                    <BsBagCheck />
                </span>
                <div className="thank-you">
                <h3>Thank you!</h3>
                <p>A confirmation has been sen to your email.<br/>Since you're here, join our list for discounts!</p>
                </div>
                <div className="subscribe">
                    <input type="email" placeholder="Email Address" />
                    <button className="subscribe-btn">Yes, sign me up!</button>
                </div>
            </main>
        </div>
    );
};


export default ConfirmationPage;