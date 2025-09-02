// @ts-nocheck
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
const BrandingSms = () => {
  return (
    <div className="text-center py-2 m-0 fs-5 fw-semibold bg-success text-warning">
      
        <marquee direction="left" className="text-capitalize fw-semibold">
          <span className="pe-2">
            Smart solutions for a technology world || A Reliable Product House
            || Best Quality !!! || Better Price !!!
          </span>||
          <span> contact us:
            <FaPhoneVolume className="ms-3 me-1 fs-6" /> 09677-601075
            <FaPhoneVolume className="ms-4 me-1 fs-6" /> 01716-093650
          </span>
        </marquee>
     
    </div>
  );
}

export default BrandingSms
