import React from "react";
import "./popular.css";
import Item from "../Item/Item";
import data from "../Assets/data";
const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular items for women</h1>
      <div className="popular-items">
        {data.map((item, i) => {
          return (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
