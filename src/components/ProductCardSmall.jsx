/* import React from "react";
import useProducts from "../context/UseProducts";
import "../stylesheet/productCardSmall.css";

const ProductCardSmall = () => {
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
        </div>
      ))}
    </div>
  );
};

export default ProductCardSmall;
 */

import React from "react";
import useProducts from "../context/UseProducts";
import { useSearch } from "../context/SearchContext"; // ✅ Importera sökkontext
import "../stylesheet/productCardSmall.css";

const ProductCardSmall = () => {
  const { data, error, isLoading } = useProducts();
  const { searchItem } = useSearch(); // ✅ Hämta söktext från Context

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // ✅ Filtrera produkterna innan de renderas
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="product-card-small-group">
      {filteredProducts.map((product) => (
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
        </div>
      ))}
    </div>
  );
};

export default ProductCardSmall;
