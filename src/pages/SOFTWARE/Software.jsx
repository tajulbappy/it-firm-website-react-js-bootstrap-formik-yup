// @ts-nocheck
import React from "react";
import "../SOFTWARE/SoftwareStyles.css";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import { Container } from "react-bootstrap";
//image
import education from "../../assets/is-images/software/edu3.avif";
import account from "../../assets/is-images/software/acc1.webp";
import inventory from "../../assets/is-images/software/inventory1.webp";
import hr from "../../assets/is-images/software/hr1.jpg";
import attendance from "../../assets/is-images/software/attendance2.jpg";
import pos from "../../assets/is-images/software/pos1.jpg";
import order from "../../assets/is-images/software/order1.jpg";

const Software = () => {
  return (
    <div className="software-page pb-5">
      {/*Header Section */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Software Solutions</h1>
          <p className="text-center w-75 mb-5">
            We provide advanced software solutions and expert database support.
            As a fast-growing software company offering customized software and
            consulting services to improve efficiency and support growth.
          </p>
        </Container>
      </header>

      <Container className="my-5">
        <h4
          className="w-100 bg-info h-25 text-uppercase text-center p-2 mb-4 fs-3"
          id="text-color"
        >
          The Solutions We Offer
        </h4>

        {/* Education management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Education Management System
            </h5>
            <p>
              <ul className=" text-justify lh-2">
                <li>Admission Management </li>
                <li>Student Information Management</li>
                <li>Teacher and Other Staff Information Management </li>
                <li>Accounts, Hall and Dining Management</li>

                <li>Unit, Division, Class, Group, Section Management</li>
                <li>Subject & Topic Management</li>
                <li> Fees Collection and Other Income Management </li>
                <li>Expense and Voucher Management</li>
                <li>Student Attendance Management</li>
                <li>Exam, Result / Assessment Management</li>
                <li>Teacher and Other Staff Salary Management</li>
                <li>Class Routine / Schedule Management</li>
                <li>Library Management</li>
              </ul>
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={education} alt="aboutImg" className="img-fluid w-100" />
          </div>
        </div>
        <hr />
        {/* Accounts management systems */}
        <div className="row">
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={account} alt="aboutImg" className="img-fluid w-100" />
          </div>

          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Accounting Management System
            </h5>
            <p className=" text-justify lh-2">
              Revolutionize your financial processes with our Accounting
              Management System. Streamline operations, gain real-time insights,
              and ensure security and compliance. Scalable and user-friendly,
              it's the key to efficient financial management for businesses of
              all sizes.
            </p>
          </div>
        </div>
        <hr />
        {/* Inventory management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Inventory Management System
            </h5>
            <p className=" text-justify lh-2">
              Efficiently manage your inventory with our Inventory Management
              System. Simplify tracking, reduce stockouts and enhance overall
              control. A user-friendly solution for businesses of all sizes,
              ensuring accuracy and optimizing inventory processes. Take charge
              of your stock with our comprehensive and scalable system.
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={inventory} alt="aboutImg" className="img-fluid w-100" />
          </div>
        </div>
        <hr />
        {/* HR management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={hr} alt="aboutImg" className="img-fluid" />
          </div>

          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Human Resources Management System
            </h5>
            <p className=" text-justify lh-2">
              Transform HR processes with our Human Resources Management System.
              Streamline employee management, automate tasks and enhance HR
              efficiency. A user-friendly, scalable solution designed for
              businesses of any size. Elevate your workforce management with our
              comprehensive platform, ensuring optimal HR performance.
            </p>
          </div>
        </div>
        <hr />
        {/* Attendance management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Attendance Management System
            </h5>
            <p className=" text-justify lh-2">
              Effortlessly track attendance with our Attendance Management
              System. Streamline record-keeping, automate tracking and enhance
              employee punctuality. A user-friendly solution designed to
              optimize attendance processes, ensuring accuracy and saving time.
              Elevate your workforce management with our comprehensive and
              scalable system.
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={attendance} alt="aboutImg" className="img-fluid w-100" />
          </div>
        </div>

        <hr />
        {/* POS management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={pos} alt="aboutImg" className="img-fluid" />
          </div>

          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Point of Sale(POS) System
            </h5>
            <p className=" text-justify lh-2">
              Revolutionize your business transactions with our Point of Sale
              (POS) System. Seamlessly manage sales, inventory and customer
              interactions. A user-friendly, scalable solution designed for
              retail success. Elevate your customer experience and optimize
              operations with our cutting-edge POS system.
            </p>
          </div>
        </div>
        <hr />
        {/* Order management systems */}
        <div className="row mb-5">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-start  text-uppercase fs-5 mb-3 py-2 ps-3  bg-info"
              id="text-color"
            >
              Order Management System
            </h5>
            <p className=" text-justify lh-2">
              Optimize your business operations with our Order Management
              System. From order creation to fulfillment, streamline processes
              and enhance customer satisfaction. A robust, user-friendly
              solution designed to scale with your growing business needs. Take
              control of your orders and elevate your efficiency today.
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={order} alt="aboutImg" className="img-fluid w-100" />
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default Software;
