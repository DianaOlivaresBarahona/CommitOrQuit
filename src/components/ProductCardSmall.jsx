import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ Importera sökkontext
import "../stylesheet/productCardSmall.css";

const ProductCardSmall = () => {
  const { filteredProducts, error, isLoading } = useSearch(); // Använder filtrerade produkter

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="product-card-small-group">
      {filteredProducts.map(
        (
          product // Nu använder vi de redan filtrerade produkterna
        ) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card-small"
          >
            <div className="product-small-img">
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
                width="100"
              />
            </div>

            <h2>{product.title}</h2>
            <p>{product.price} €</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default ProductCardSmall;
