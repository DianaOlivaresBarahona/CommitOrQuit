import React from "react";

const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-bold">Filtrera efter kategori</h2>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mt-2 p-2 border rounded"
      >
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
