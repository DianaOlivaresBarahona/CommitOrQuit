import React from "react";
import "../stylesheet/filterButtons.css";
import { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import ButtonText from "../components/ButtonText";

const FilterButtons = () => {
  const { category, setCategory } = useSearch();

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="filter-buttons">
      <ButtonText
        className={`all-button ${category === "All" ? "active" : ""}`}
        onClick={() => setCategory("All")}
        value="All"
      />
      <ButtonText
        className={`jewelry-button ${category === "jewelery" ? "active" : ""}`}
        onClick={() => setCategory("jewelery")}
        value="Jewelry"
      />
      <ButtonText
        className={`electronics-button ${
          category === "electronics" ? "active" : ""
        }`}
        onClick={() => setCategory("electronics")}
        value="Electronics"
      />
      <ButtonText
        className={`mens-clothing-button ${
          category === "men's clothing" ? "active" : ""
        }`}
        onClick={() => setCategory("men's clothing")}
        value="Men's Clothing"
      />
      <ButtonText
        className={`womens-clothing-button ${
          category === "women's clothing" ? "active" : ""
        }`}
        onClick={() => setCategory("women's clothing")}
        value="Women's Clothing"
      />
    </div>
  );
};

export default FilterButtons;
