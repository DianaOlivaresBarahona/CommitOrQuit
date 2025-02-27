import React from "react";
import "../stylesheet/FilterButtons.css";
import { useEffect } from "react";

const FilterButtons = () => {
    useEffect(() => {
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }, []);

    return (
        <div className="filter-buttons">
            <button className="all-button">All</button>
            <button className="jewelry-button">Jewelry</button>
            <button className="electronics-button">Electronics</button>
            <button className="mens-clothing-button">Men's Clothing</button>
            <button className="womens-clothing-button">Women's Clothing</button>
            <button className="filter-button">
                <i data-lucide="filter"></i>
            </button>
        </div>
    );

};

export default FilterButtons;
