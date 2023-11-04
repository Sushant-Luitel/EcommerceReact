import React from "react";
import { Products } from "../../Products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = ({ image }) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Painless Stitches</h1>
      </div>
      <div className="products">
        {Products.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};
