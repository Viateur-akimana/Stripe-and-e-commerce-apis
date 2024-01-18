import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_products, getTotalCartAmount, removeFromCart } = useContext(shopContext);
  return (
    <div className="cartItems">
      <div className="main-cartItems">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartFormat cartItems main-cartItems ">
                <img src={e.image} className="cart_icon" alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_button-quantity">
                  {CartItems[e.id]}
                </button>
                <p>${e.new_price * CartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  className="remove_icon"
                  onClick={() => {
                    removeFromCart();
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <h1>Total cart</h1>
        <div className="totalCartItem">
          <div className="cartTotal-items">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="total-items-cart">
            <p>SHipping fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total-items-cart">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <button>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cartItem-promocode">
          <p>If you have promo code, enter it here</p>
          <div className="cartItems-promocode-box">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
