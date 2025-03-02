import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import ProductCardSmall from "../components/ProductCardSmall";

const FavoritesPage = ({ setShowFavorite }) => {
  const { favorites } = useSearch();

  useEffect(() => {
    setShowFavorite(true);
    return () => setShowFavorite(false);
  }, [setShowFavorite]);

  return (
    <div className="favoritesPage">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="product-card-small-group">
          {favorites.map((product) => (
            <ProductCardSmall key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
