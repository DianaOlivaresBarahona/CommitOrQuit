import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaHeart } from "react-icons/fa";
import "../stylesheet/favoriteButton.css";

const FavoriteButton = ({ showFavorite, setShowFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isFavoritePage = location.pathname === "/favorite";

  const handleClick = () => {
    if (isFavoritePage && isFavorite) {
      setIsFavorite(false);
      navigate("/");
      if (typeof setShowFavorite === "function") {
        setShowFavorite(false);
      }
    } else if (isFavoritePage) {
    } else {
      setIsFavorite(true);
      navigate("/favorite");
      if (typeof setShowFavorite === "function") {
        setShowFavorite(true);
      }
    }
  };

  useEffect(() => {
    if (isFavoritePage) {
      setIsFavorite(true);
    }
  }, [isFavoritePage]);

  return (
    <button
      onClick={handleClick}
      className={`favoriteBtn ${
        isFavorite || isFavoritePage ? "filled" : "empty"
      }`}
      disabled={false}
    >
      <FaHeart
        className={
          isFavorite || isFavoritePage ? "heart-filled" : "heart-empty"
        }
        size={32}
      />
    </button>
  );
};

export default FavoriteButton;
