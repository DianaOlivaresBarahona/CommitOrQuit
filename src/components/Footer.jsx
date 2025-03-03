import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "../stylesheet/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#">About us</a>
        <a href="#">Career</a>
        <a href="#">KALEIDO partner</a>
      </div>

      <div className="footer-center">© KALEIDO 2025. All rights reserved.</div>

      <div className="footer-right">
        <p>Follow us</p>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
