import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const ContactNumber = () => {
  return (
    <div
      className="text-danger fw-semibold px-2"
      id="hotline"
    >
      <span>
        <FaPhoneVolume className="me-2" />
        HotLine
      </span>
      <div className="d-flex flex-column">
        <span>
          
          09677601075
        </span>
        <span>
      
          01716093650
        </span>
      </div>
    </div>
  );
}

export default ContactNumber
