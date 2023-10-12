import React from "react";

function SearchBar({ searchTerm, showOnlyInStock, onSearchChange, onCheckboxChange }) {
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    onSearchChange(newSearchTerm);
  };

  const handleCheckboxChange = () => {
    const newShowOnlyInStock = !showOnlyInStock;
    onCheckboxChange(newShowOnlyInStock);
  };

  return (
    <div className="SearchBar">
      <label>Search</label>
      <input className="bar" type="text" value={searchTerm} onChange={handleSearchChange} />
      <label>
        <input
          type="checkbox"
          checked={showOnlyInStock}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
