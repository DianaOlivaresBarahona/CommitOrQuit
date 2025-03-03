import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import "../stylesheet/productDetail.css";

import { Heart } from "lucide-react";
import { useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import AddCartBtn from "./AddCartBtn";

const ProductDetail = () => {
  const { id } = useParams();
  const { allProducts, favorites, toggleFavorite, error, isLoading } = useSearch(); // ✅ Get full product list
  const { addToCart } = useCart();

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  if (error) return <div>Failed to load product</div>;
  if (isLoading) return <div>Loading product...</div>;

  const product = allProducts?.find((p) => p.id === parseInt(id)); // Find product by ID

  if (!product) return <div>Product not found</div>;

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <>
      <div className="product-detail-card">
        <img
          className="product-detail-img"
          src={product.image}
          alt={product.title}
          width="200"
        />
        <div className="product-detail-info">
          <div className="product-info">
            <h2 className="title">{product.title}</h2>
            <div className="ratings">
              <p>⭐ {product.rating.rate}</p>
              <p>{product.rating.count} reviews</p>{" "}
            </div>{" "}
            <p>{product.description}</p>
            <p className="price">€ {product.price} </p>
          </div>
          <div className="product-detail-buttons">
            {" "}

             <AddCartBtn onClick={() => addToCart(product)} />
            <button
                className={`favorite-button-2 ${isFavorite ? "filled" : ""}`}
                onClick={(e) => {
                  e.preventDefault(); 
                  toggleFavorite(product);
                }}
                > 
                <Heart size={24} color={isFavorite ? "black" : "grey"} fill={isFavorite ? "black" : "none"} />
              </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
