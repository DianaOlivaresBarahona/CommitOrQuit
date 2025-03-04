import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaHeart } from "react-icons/fa";
import "../stylesheet/favoriteButton.css";
import { Heart } from "lucide-react";

const FavoriteButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFavoritePage = location.pathname === "/favorite";

  const handleClick = () => {
    if (!isFavoritePage) {
      navigate("/favorite");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`favoriteBtn ${isFavoritePage ? "filled" : "empty"}`}
      disabled={false}
    >
      <FaHeart
        className={isFavoritePage ? "heart-filled" : "heart-empty"}
        size={18}
      />
    </button>
  );
};

export default FavoriteButton;
