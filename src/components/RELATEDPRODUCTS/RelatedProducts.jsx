// @ts-nocheck
import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import Item from "../ITEM/Item";

const RelatedProducts = () => {
  const { relatedProducts } = useContext(ProductContext);
  // console.log(relatedProducts)
  return (
    <section className="related-products py-5 d-flex flex-column ">
      <p className="text-decoration-underline fs-3 fw-semibold py-3">Related products</p>
      <div className="related-products-item d-flex gap-3  py-4 ">
        {relatedProducts.map((product) => {
          return (
            <Item key={product.id} product={product}/>
          )
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
