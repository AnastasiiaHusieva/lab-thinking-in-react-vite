import React from "react";
import jsonData from "./../data.json";

function ProductTable({ searchTerm }) {
  const filteredProducts = jsonData.filter((product) => {
    const nameIncludesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return nameIncludesSearchTerm;
  });

  return (
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
  );
}

export default ProductTable;

