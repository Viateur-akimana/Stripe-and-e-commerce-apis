import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import "./css/shopCategory.css";
import drop_down_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(shopContext);
  return (
    <div className="shopCategory">
      <img className="shopCategory-banners" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Our of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={drop_down_icon} alt="" />
        </div>
        <div className="shopCategory-products">
          {all_products.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopCategory-loadMore">Explore more</div>
      </div>
    </div>
  );
};

export default ShopCategory;
