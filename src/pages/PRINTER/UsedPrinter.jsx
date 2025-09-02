// @ts-nocheck
import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../PRINTER/UsedPrinterStyles.css";
//icons
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import { FaBuysellads } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const UsedPrinter = () => {
  const { allProducts } = useContext(ProductContext);
  let usedPrinterCategory = "Used-Printer";

  return (
    <div className="used-printer-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Used Laser Printer</h1>
          <p className="text-center w-75 mb-5">
            A wide selection of span in excellent condition, fully tested and
            serviced by our expert technicians. Perfect for home, office, and
            commercial use, our refurbished printers deliver reliable
            performance at a fraction of the original price.
          </p>
        </div>
      </header>
      {/*Header Section end */}

      <Container className="my-5">
        
        <div className="bg-warning px-2 py-2 mb-4 rounded">
          <h4 className="text-uppercase fw-semibold pt-1" id="text-color">
            Used Laser Printers for Sale – Quality You Can Trust
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2">
              Looking for a{" "}
              <span className="fw-semibold">
                cost-effective printing solution
              </span>
              ? We offer a wide selection of used laser printers in excellent
              condition, fully tested and serviced by our expert technicians.
              Perfect for{" "}
              <span className="fw-semibold">
                home, office, and commercial use
              </span>
              , our refurbished printers deliver reliable performance at a
              fraction of the original price.
            </p>

            {/* ---------- */}
            <div className="row my-5">
              <div className="col-lg-6 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info ps-2 py-2 rounded"
                  id="text-color"
                >
                  <TiPrinter className="fs-2 mx-2" />
                  Available Brands & Models
                </h5>
                <ul className="list-unstyled pt-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    HP | Canon | Brother | Samsung
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Monochrome & Color Laser Printers
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Single Function & All-in-One Models
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Network & Wireless Printers Available
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info  ps-3 py-2 rounded"
                  id="text-color"
                >
                  <FaRegHandshake className="fs-2 mx-2" />
                  What You Get
                </h5>
                <ul className="list-unstyled py-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Professionally cleaned and tested units
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Replaced or serviced rollers, fuser, and maintenance parts
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Ready-to-use with toner cartridge installed
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Power cable and basic setup guide included
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    30-day warranty (optional extended warranty available)
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------- */}

            <div className="row mb-5">
              <div className="col-lg-6 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info ps-3 py-2 rounded"
                  id="text-color"
                >
                  <FaBuysellads className="fs-3 mx-2" />
                  Why Buy Used from Us?
                </h5>
                <ul className="list-unstyled py-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Affordable Prices – Save up to 70% vs new printers
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Reliable Performance – Each unit quality checked
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Technical Support – Setup and maintenance assistance
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Bulk Purchase Options – Ideal for offices, schools, and
                    shops
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info ps-3 py-2 rounded"
                  id="text-color"
                >
                  <TbTruckDelivery className="fs-2 mx-2" />
                  Delivery & Setup
                </h5>
                <ul className="list-unstyled py-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Delivery available across Bangladesh
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    On-site installation support in Dhaka (optional)
                  </li>
                </ul>
              </div>
            </div>

            {/* -------- */}
          </div>
        </div>
      </Container>

      {/* Featured Products start OR USED Printer */}
      <section className="feature-product">
        <Container>
          <div className="d-flex flex-column  text-light bg-info py-3">
            <h3 className="text-center mb-1">
              Featured Products
            </h3>
            <p className="text-center mt-0">
              Get Your Desired Product from Featured Products!
            </p>
          </div>
          <div className="row py-3">
            {allProducts.map((product) => {
              const {
                id,
                productTitle,
                productImage,
                productBrand,
                category,
                productPrice,
              } = product;
              // console.log(product.productTitle);
              if (usedPrinterCategory === category) {
                return (
                  <div key={id} className="col-lg-3 d-flex g-4">
                    <Card className="w-100 scale-hover-effect">
                      <Card.Img
                        variant="top"
                        src={productImage}
                        alt="hddImage"
                        className="h-50 mt-2"
                      />
                      <hr className="m-0" />

                      <Card.Body>
                        <Card.Title className="pb-2 pt-0 mt-0 text-center fs-6">
                          {productTitle}
                        </Card.Title>
                        <Card.Text className="m-0">
                          Category: {category}
                        </Card.Text>
                        <Card.Text className="m-0">
                          Brand: {productBrand}
                        </Card.Text>
                        <Card.Text className="pb-2 text-info">
                          Check Price: {productPrice}
                        </Card.Text>
                        {/* <Link
                          to={`/product/${id}`}
                          className="text-decoration-none"
                        >
                          <button
                            id="btn-normal"
                            onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            More Details
                          </button>
                        </Link> */}
                      </Card.Body>
                    </Card>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </Container>
      </section>
      {/* Featured Products end*/}

      <WhyChooseSection />
    </div>
  );
};

export default UsedPrinter;
