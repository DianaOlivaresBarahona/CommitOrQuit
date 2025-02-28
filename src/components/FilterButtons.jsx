import React from "react";
import "../stylesheet/FilterButtons.css";
import { useEffect } from "react";
import { useSearch } from "../context/SearchContext"; 

const FilterButtons = () => {
    const { category, setCategory } = useSearch(); 

    useEffect(() => {
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }, []);

      return (
        <div className="filter-buttons">
          <button
            className={`all-button ${category === "All" ? "active" : ""}`}
            onClick={() => setCategory("All")}
          >
            All
          </button>
          <button
            className={`jewelry-button ${category === "jewelery" ? "active" : ""}`}
            onClick={() => setCategory("jewelery")}
          >
            Jewelry
          </button>
          <button
            className={`electronics-button ${category === "electronics" ? "active" : ""}`}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>
          <button
            className={`mens-clothing-button ${category === "men's clothing" ? "active" : ""}`}
            onClick={() => setCategory("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={`womens-clothing-button ${category === "women's clothing" ? "active" : ""}`}
            onClick={() => setCategory("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>
      );
    };
    
    export default FilterButtons;
