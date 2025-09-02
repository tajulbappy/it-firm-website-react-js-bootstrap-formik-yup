// @ts-nocheck
import React from "react";

import breadcrum_arrow from "../../assets/is-images/breadcrum_arrow.png";

const BreadCramb = ({ product }) => {
  const { productTitle, category } = product;
  // console.log(category)

  return (
    <>
      <div className="d-flex  align-items-center text-capitalize my-5 fw-semibold">
        Home <img className="px-1" src={breadcrum_arrow} alt="arrow" />
        Shop <img className="px-1" src={breadcrum_arrow} alt="arrow" />
        {category}
        <img className="px-1" src={breadcrum_arrow} alt="arrow" />
        {productTitle}
      </div>
    </>
  );
};

export default BreadCramb;
