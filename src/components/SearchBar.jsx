import React, { useState } from "react";
import jsonData from "./../data.json";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = () => {
    setShowOnlyInStock(!showOnlyInStock); // Toggle checkbox state
  };

  const filteredProducts = jsonData.filter((product) => {
    const nameIncludesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (showOnlyInStock) {
      return nameIncludesSearchTerm && product.inStock;
    }
    return nameIncludesSearchTerm;
  });

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
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBar;
