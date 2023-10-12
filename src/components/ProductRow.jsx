import React from "react";

function ProductRow ({product}) {
    return (
        <tbody>
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
      </tbody>
    )
}

export default ProductRow;