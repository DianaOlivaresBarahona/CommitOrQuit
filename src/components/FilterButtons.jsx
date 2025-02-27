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
            <button className="men-apparel-button">Men's Apparel</button>
            <button className="women-apparel-button">Women's Apparel</button>
            <button className="filter-button">
                <i data-lucide="filter"></i>
            </button>
        </div>
    );

};

export default FilterButtons;
