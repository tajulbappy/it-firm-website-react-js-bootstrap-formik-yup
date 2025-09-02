import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, productTitle, productImage, productPrice } = product;
  return (
    <div className="item border border-info fw-semibold text-center p-3">
      <Link to={`/product/${id}`}>
        <img
          className="img-fluid"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          src={productImage}
          alt="productImage"
        />
      </Link>

      <p>{productTitle}</p>
      <div className="py-3">{productPrice}</div>
    </div>
  );
};

export default Item;
