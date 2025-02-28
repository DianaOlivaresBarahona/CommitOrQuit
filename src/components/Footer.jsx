import "./Footer.css";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Importera ikonerna

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">About us</a>
        <a href="#">Career</a>
        <a href="#">KALEIDO partner</a>
        <p>Follow us</p>
        <div className="social-icons"> {/* Ny div för ikoner */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
      <p className="footer-copy">&copy; KALEIDO 2025. Alla rättigheter förbehållna.</p>
    </footer>
  );
};

export default Footer;
