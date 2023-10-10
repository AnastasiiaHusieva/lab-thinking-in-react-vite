import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import Heading from "./Heading";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <Heading />
      <SearchBar />
    </div>
  );
}

export default ProductsPage;