import React from "react";
import "../stylesheet/navbar.css";
import SearchField from "./searchfield";
import { useEffect, useState } from "react";

import FavoriteButton from "./FavoriteButton";

const Navbar = ({ showFavorite, setShowFavorite }) => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <nav className="Navbar">
      <button className="menu-button">
        <i data-lucide="menu"></i>
      </button>

      <div className="logo">
        <h1 className="logo-text">KALEIDO</h1>
      </div>

      <SearchField />
      <FavoriteButton
        showFavorite={showFavorite}
        setShowFavorite={setShowFavorite}
      />
    </nav>
  );
};

export default Navbar;
