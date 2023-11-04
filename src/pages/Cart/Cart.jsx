import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Products } from "../../Products";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] != 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
    </div>
  );
};
