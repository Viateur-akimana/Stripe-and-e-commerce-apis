import React, { createContext } from "react";
import all_products from "../components/Assets/all_product";

export const shopContext = createContext(null);

const ShopContext = (props) => {
  const contextValue = { all_products };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContext;
