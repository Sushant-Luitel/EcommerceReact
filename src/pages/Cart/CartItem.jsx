import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
export const CartItem = (props) => {
  const { id, name, image, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={image} alt="" />

      <div className="description">
        <p>{name}</p>
        <p>{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(event) => {
              updateCartItemCount(Number(event.target.value), id);
            }}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
