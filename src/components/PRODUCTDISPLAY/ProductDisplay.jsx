// @ts-nocheck
import React from "react";
import stat_icon from "../../assets/is-images/star_icon.png";
import stat_dull_icon from "../../assets/is-images/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const { productTitle, productBrand, productImage, category, productPrice } =
    product;
  return (
    <div className="d-flex gap-5">
      <div className="display-left d-flex gap-4">
        <div className="product-img-list d-flex flex-column gap-3">
          <img
            className="img-fluid border border-info  py-2"
            src={productImage}
            alt="product-image"
          />
          <img
            className="img-fluid border border-info py-2"
            src={productImage}
            alt="product-image"
          />
          <img
            className="img-fluid border border-info py-2"
            src={productImage}
            alt="product-image"
          />
          <img
            className="img-fluid border border-info py-2"
            src={productImage}
            alt="product-image"
          />
        </div>
        <div className="product-img-main">
          <img
            className="img-fluid border border-info py-4 rounded"
            src={productImage}
            alt="product-image"
          />
        </div>
      </div>
      <div className="display-right d-flex flex-column">
        <h1 className="fs-3 fw-semibold">{productTitle}</h1>

        <div className="right-star pb-3">
          <img src={stat_icon} alt="starIcon" />
          <img src={stat_icon} alt="starIcon" />
          <img src={stat_icon} alt="starIcon" />
          <img src={stat_icon} alt="starIcon" />
          <img src={stat_dull_icon} alt="starIcon" />
          <p>122</p>
        </div>

        <div className="pb-1">
          <span className="fw-semibold">Category :</span> {category}
        </div>
        <div className="pb-1">
          <span className="fw-semibold">Brand :</span> {productBrand}
        </div>
        <div className="product-description">
          <p>
            <span className="fw-semibold">Product Description : </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quae nulla atque esse minima praesentium, necessitatibus tempore!
            Explicabo, consequuntur voluptas qui odit perferendis quasi?
            Laudantium nemo totam deserunt ipsa et?
          </p>
        </div>
              <div className="fs-4 fw-semibold price text-muted mt-5">
                Status : {productPrice}</div>
      </div>
    </div>
  );
};

export default ProductDisplay;
