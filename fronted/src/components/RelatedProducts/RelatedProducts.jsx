import React, { useEffect, useState } from "react";
import "./relatedProducts.css";
import Item from "../Item/Item";

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch("localhost:3000/relatedProducts")
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  });
  return (
    <div className="relatedProducts">
      <h1>Related products</h1>
      <hr />
      <div className="relatedProducts-items">
        {relatedProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
