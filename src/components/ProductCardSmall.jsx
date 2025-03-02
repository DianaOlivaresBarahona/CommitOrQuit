import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import "../stylesheet/productCardSmall.css";
import { Heart } from "lucide-react";
import { useEffect } from "react";

const ProductCardSmall = ({ product }) => {
  const { filteredProducts, favorites, toggleFavorite, error, isLoading } = useSearch();

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const productsToShow = product ? [product] : filteredProducts;

  return (
    <div className="product-card-small-group">
      {productsToShow.map((product) => {
        const isFavorite = favorites.some((fav) => fav.id === product.id);

        return (
          <div key={product.id} className="product-card-small">
            <div className="product-small-img">
              
              <button
                className={`favorite-button ${isFavorite ? "filled" : ""}`}
                onClick={(e) => {
                  e.preventDefault(); 
                  toggleFavorite(product);
                }}
                >
                <Heart size={24} color={isFavorite ? "black" : "grey"} fill={isFavorite ? "black" : "none"} />
              </button>
      
              <Link to={`/product/${product.id}`}>
                <img className="product-img" src={product.image} alt={product.title} width="100" />
              </Link>
            </div>
      
            <h2>{product.title}</h2>
            <p>{product.price} €</p>
      
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardSmall;
