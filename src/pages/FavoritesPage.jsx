import React, { useEffect } from "react";

const FavoritesPage = ({ setShowFavorite }) => {
  useEffect(() => {
    setShowFavorite(true);
    return () => setShowFavorite(false);
  }, [setShowFavorite]);

  return (
    <div className="favoritesPage">
      <h1>Favorites</h1>
    </div>
  );
};

export default FavoritesPage;
