import React from "react";
import ProductRow from "./ProductRow"

function ProductTable({filteredProducts}) {
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
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
  );
}

export default ProductTable;

