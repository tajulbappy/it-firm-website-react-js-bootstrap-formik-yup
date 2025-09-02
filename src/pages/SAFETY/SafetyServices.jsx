// @ts-nocheck
import React from "react";
import "./SafetyServicesStyles.css";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import { Container } from "react-bootstrap";
//images
import fireImg from "../../assets/is-images/safety-icon/fire8.avif";
import sma from "../../assets/is-images/safety-icon/sma.webp";
import electricImg1 from "../../assets/is-images/safety-icon/electrical2.avif";
import electricImg2 from "../../assets/is-images/safety-icon/electrical3.webp";
import structuralImg1 from "../../assets/is-images/safety-icon/structural1.webp";
import structuralImg2 from "../../assets/is-images/safety-icon/structural2.jpg";
import fireImg1 from "../../assets/is-images/safety-icon/fire6.avif";
import fireImg2 from "../../assets/is-images/safety-icon/fire9.avif";


const SafetyServices = () => {
  return (
    <div className="safety-page mb-5">
      {/* Safety header pages */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Fire Safety & Consultancy</h1>
          <p className="text-center w-75 mb-5">
            We are committed to providing a safe and healthy workplace and to
            conduct safe work practices for all of our employees & valuable
            customers, We strive to deliver a total solution, tailored to the
            individual customer, and to provide the customer with an
            exceptionally high level of service every time.
          </p>
        </Container>
      </header>

      {/* section-1 */}
      <Container className="my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h5
              className="text-center text-justify text-capitalize fw-semibold mb-3 p-2 bg-info"
              id="text-color"
            >
              OUR SAFETY MANAGEMENT APPROACH
            </h5>
            <p className="mb-5">
              <span className="fw-semibold fs-5">W</span>e adopt a collaborative
              approach working with the client, interested stakeholders and the
              building design teams to define a clear brief, which sets out the
              aims and objectives of the project and a program and budget that
              is site specific and realistic. Our approach is to achieve the
              best balance of quality, cost, function, efficiency,
              maintainability and project delivery. We implement a
              'zero-defects' policy and agree benchmark site installations and
              samples for quality to ensure the client gets the best possible
              project outcome. Our mission is to provide safety and secured life
              for everyone.
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img src={sma} alt="aboutImg" className="img-fluid w-100 h-75 " />
          </div>
        </div>
        <h4
          className="w-100 bg-warning h-25 text-uppercase text-center p-2 mb-4 fw-semibold"
          id="text-color"
        >
          Our Services
        </h4>
        <div className="row">
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img
              src={fireImg}
              alt="aboutImg"
              className="img-fluid w-100 h-75 "
            />
          </div>

          <div className="col-lg-6 d-flex flex-column pt-4">
            <h5
              className="mb-3 ms-3 text-uppercase fw-semibold  bg-info p-1 "
              id="text-color"
            >
              Fire Safety Services
            </h5>
            <p>
              <ul className=" text-justify lh-2">
                <li>Safety Consultancy</li>
                <li>Fire Safety Pre-Plan Design</li>
                <li>Emergency Evacuation Plan </li>
                <li>
                  Drawing, Design, Calculation & Documentation of FADS & SUPS
                </li>
                <li>
                  Supply & Installation of FADS & SUPS (Hydrant & Sprinkler)
                </li>
                <li>Supply & Installation of Fire Door & Accessories</li>
                <li>Fireproofing of Steel Structure</li>
                <li>Supply & Installation of Fire Rated Gypsum Board </li>
                <li>Supply & Installation of Fire Extinguishers</li>
              </ul>
            </p>
          </div>
        </div>

        <h5
          className="mb-4 ms-3 text-center text-uppercase fw-semibold  bg-info py-2 "
          id="text-color"
        >
          Safety Services Working Gallery
        </h5>
        <div className="row border border-5 border-secondary m-2 pb-4">
          <h6 className="mt-1 mb-0 text-info text-center fw-semibold fs-5">
            Electrical Working Gallery:
          </h6>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img
              src={electricImg1}
              alt="aboutImg"
              className="img-fluid w-100 border border-secondary border-3"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column pt-4">
            <img
              src={electricImg2}
              alt="aboutImg"
              className="img-fluid w-100  border border-secondary border-3"
            />
          </div>
        </div>

        <div className="row border border-5 border-secondary m-2 pb-4">
          <h6 className="mt-1 mb-0 text-info text-center fw-semibold fs-5">
            Structural Working Gallery:
          </h6>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img
              src={structuralImg1}
              alt="aboutImg"
              className="img-fluid w-100 h-100  border border-secondary border-3"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column pt-4">
            <img
              src={structuralImg2}
              alt="aboutImg"
              className="img-fluid w-100 h-100 border border-secondary border-3"
            />
          </div>
        </div>

        <div className="row border border-5 border-secondary m-2 pb-4">
          <h6 className="mt-1 mb-0 text-info text-center fw-semibold fs-5">
            Fire Working Gallery:
          </h6>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
            <img
              src={fireImg1}
              alt="aboutImg"
              className="img-fluid w-100 h-100 border border-secondary border-3"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column pt-4">
            <img
              src={fireImg2}
              alt="aboutImg"
              className="img-fluid w-100 h-100 border border-secondary border-3"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 justify-content-center  d-flex flex-column d-lg-flex pt-4">
            <h5
              className="mb-3 ms-3 text-uppercase fw-semibold  bg-info p-1 "
              id="text-color"
            >
              Electrical Safety Services
            </h5>

            <ul className=" text-justify lh-2">
              <li>Electrical Safety Consultancy</li>
              <li>Electrical Layout Design (ELD)</li>
              <li>Electrical Single Line Diagram (SLD) </li>
              <li>Electrical Load Table/Schedule</li>
              <li>Electrical Load Management System</li>
              <li>Lightning Protection System (LPS) Design</li>
              <li>Earthing Resistance (ER) Test Report</li>
              <li>Insulation Resistance (IR) Test Report </li>
              <li>Thermography Scanning Test Report</li>
            </ul>
          </div>

          <div className="col-lg-6 d-flex flex-column pt-4">
            <h5
              className="mb-3 ms-3 text-uppercase fw-semibold  bg-info p-1 "
              id="text-color"
            >
              Structural Safety Services
            </h5>
            <ul className=" text-justify lh-2">
              <li>Structural Safety Consultancy</li>
              <li>Structural & Architectural Drawing</li>
              <li>DEA & Retrofitting </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* why choose Innovative Solutions */}
      <WhyChooseSection />
    </div>
  );
};

export default SafetyServices;
