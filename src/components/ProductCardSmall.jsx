import React from "react";
import useProducts from "../context/UseProducts";
import "../stylesheet/productCardSmall.css";

const ProductCardSmall = ({ addToCart }) => {
  const { data, error, isLoading } = useProducts();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="product-card-small-group">
      {data.map((product) => (
        <div key={product.id} className="product-card-small">
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
        </div>
      ))}
    </div>
  );
};

export default ProductCardSmall;
