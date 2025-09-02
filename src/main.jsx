// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { ProductContext } from "./services/ProductContext";
import allProducts from "./assets/Data/AllProducts";
import allServices, { serverRelatedServices } from "./assets/Data/PopularService";

import brnadIcons from "../src/assets/Data/BrandIcons";
import relatedProducts from "./assets/Data/RelatedProducts";
import { printerError } from "./assets/Data/AllProducts";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext.Provider
    value={{
      allProducts,
      allServices,
      serverRelatedServices,
      brnadIcons,
      relatedProducts,
      printerError,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext.Provider>
);
