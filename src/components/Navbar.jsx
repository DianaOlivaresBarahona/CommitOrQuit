import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/navbar.css";
import SearchField from "./searchfield";
import FavoriteButton from "./FavoriteButton";

const Navbar = ({ showFavorite, setShowFavorite }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <nav className="Navbar">
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <i data-lucide="menu"></i>
      </button>

      <div className="logo">
        <Link to="/" className="logo-text">KALEIDO</Link>
      </div>

      <SearchField />

      <FavoriteButton
        showFavorite={showFavorite}
        setShowFavorite={setShowFavorite}
      />

      <div className={`menu-content ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setMenuOpen(false)}>
          ✖
        </button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>PROFILE</Link></li>
          <hr />
          <li><Link to="/all" onClick={() => setMenuOpen(false)}>ALL</Link></li>
          <li><Link to="/clothing" onClick={() => setMenuOpen(false)}>CLOTHING</Link></li>
          <li><Link to="/jewelry" onClick={() => setMenuOpen(false)}>JEWELRY</Link></li>
          <li><Link to="/electronics" onClick={() => setMenuOpen(false)}>ELECTRONICS</Link></li>
          <hr />
          <li><Link to="/settings" onClick={() => setMenuOpen(false)}>SETTINGS</Link></li>
          <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
          <li><Link to="/terms" onClick={() => setMenuOpen(false)}>TERMS & CONDITIONS</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
