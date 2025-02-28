import React from "react";
import useProducts from "../context/UseProducts";
import "../stylesheet/ProductCardLarge.css";

const ProductCardLarge = () => {
  const { data, error, isLoading } = useProducts();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="product-card-large-group">
      {data.map((product) => (
        <div key={product.id} className="product-card-large">
          {" "}
          <div className="product-large-img">
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
              width="100"
            />
          </div>
          <h2>{product.title}</h2>
          <div className="ratings">
            <p>⭐ {product.rating.rate}</p>
            <p>{product.rating.count} reviews</p>{" "}
          </div>{" "}
          <p>{product.description}</p>
          <p>€ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCardLarge;
