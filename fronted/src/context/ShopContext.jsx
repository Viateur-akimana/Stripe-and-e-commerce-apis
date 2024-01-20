import React, { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:3000/all_products")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("Auth-token")) {
      fetch("localhost:3000/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("Auth-token")) {
      fetch("localhost:3000/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItems += cartItems[item];
      }
    }
    return totalCartItems;
  };

  const contextValue = {
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
