import React from "react";
import "../stylesheet/filterBar.css";  

const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="filter-bar">
      <h2>Filtrera efter kategori</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Alla kategorier</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
