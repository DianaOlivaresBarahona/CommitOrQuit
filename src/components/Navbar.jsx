import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Navbar.css";
import SearchField from "./SearchField";
import FavoriteButton from "./FavoriteButton";
import ButtonText from "./ButtonText";

const Navbar = ({ showFavorite, setShowFavorite }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <nav className="Navbar">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <i data-lucide="menu"></i>
        </button>

        <div className="logo">
          <Link to="/" className="logo-text">
            KALEIDO
          </Link>
        </div>

        <div className="buttons-right">
          <ButtonText
            onClick={() => setSearchOpen(!searchOpen)}
            value=""
            icon="search"
          />
          <FavoriteButton
            showFavorite={showFavorite}
            setShowFavorite={setShowFavorite}
          />
        </div>

        <div className={`menu-content ${menuOpen ? "open" : ""}`}>
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            ✖
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                PROFILE
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/settings" onClick={() => setMenuOpen(false)}>
                SETTINGS
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={() => setMenuOpen(false)}>
                TERMS & CONDITIONS
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`search-wrapper ${searchOpen ? "visible" : "hidden"}`}>
        <SearchField />
      </div>
    </>
  );
};

export default Navbar;
