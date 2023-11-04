import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, name, image, price } = props.data;
  const { addToCart, cartItems, setCartItems, removeFromCart } =
    useContext(ShopContext);
  let cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
      </div>
      <div>
        <p>Rs.{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
