// ProductsPage.js
import React, { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import Heading from "./Heading";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const filteredProducts = jsonData.filter((product) => {
    const nameIncludesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (showOnlyInStock) {
      return nameIncludesSearchTerm && product.inStock;
    }
    return nameIncludesSearchTerm;
  });

  return (
    <div>
      <Heading />
      <SearchBar searchTerm={searchTerm} showOnlyInStock={showOnlyInStock} onSearchChange={setSearchTerm} onCheckboxChange={setShowOnlyInStock} />
      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
