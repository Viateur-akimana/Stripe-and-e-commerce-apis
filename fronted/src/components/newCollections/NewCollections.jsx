import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("localhost:3000/newCOllection")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  });
  return (
    <div className="collection">
      <h1>New Collection</h1>
      <hr />
      <div className="collections-items">
        {newCollection.map((item, i) => {
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

export default NewCollections;
