// @ts-nocheck
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../services/ProductContext";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../PRINTER/LaserPrinterPartsStyles.css";
//icons
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";
import { FaBuysellads } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const LaserPrinterParts = () => {
  const { allProducts } = useContext(ProductContext);
  let laserPrinterParts = "LP-Parts";

  return (
    <div className="printer-parts-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Laser Printer Parts</h1>
          <p className="text-center w-75 mb-5">
            we are proud to be one of the leading providers of professional
            printer parts services in Bangladesh. With a strong reputation for
            reliability, expertise, and fast response times, we serve
            businesses, offices, schools and individuals across the country
          </p>
        </Container>
      </header>
      {/*Header Section end */}

      <Container className="my-5">
        <div className="bg-warning px-2 py-2 mb-4 rounded">
          <h4 className="text-uppercase fw-semibold pt-1" id="text-color">
            Laser Printer Parts for Sale
          </h4>
        </div>

        <div className="mb-5">
          <div className="pt-2 fs-5">
            <p className=" text-justify lh-2">
              Keep your printer running at peak performance with our wide range
              of genuine and compatible{" "}
              <span className="fw-semibold">laser printer parts</span>. Whether
              you're a home user, small business, or corporate office, we supply
              quality parts for all major brands including{" "}
              <span className="fw-semibold">
                HP, Canon, Brother, Samsung, and Ricoh
              </span>
              .
            </p>

            {/* ---------- */}
            <div className="row my-5">
              <div className="col-lg-12 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info ps-2 py-2 rounded"
                  id="text-color bg-color"
                >
                  <TiPrinter className="fs-2 mx-2" />
                  Available Printer Parts
                </h5>
                <ul className="list-unstyled pt-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">Fuser Assembly Units</span> –
                    Ensure proper toner bonding with OEM and compatible fusers.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">Maintenance Kits</span> –
                    Complete kits including rollers, transfer belts, and fusers.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">
                      Pickup Rollers / Tray Rollers
                    </span>{" "}
                    – Eliminate paper jams with fresh rollers.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">Separation Pads</span> –
                    Improve paper feeding reliability.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">
                      Transfer Belts / Transfer Kits{" "}
                    </span>
                    – For clear and consistent printing quality.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">Toner Hopper Units </span> –
                    Replacement toner hoppers for advanced models.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">
                      Formatter Boards / Logic Boards
                    </span>
                    – For fixing startup and printing errors.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">Power Supply Units </span>–
                    Solve no-power or intermittent power issues.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">
                      Laser Scanner Assemblies
                    </span>
                    – Restore sharp, accurate printing performance.
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    <span className="fw-semibold">
                      Duplex Units / Paper Feed Assemblies
                    </span>
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
                  Why Buy from Us?
                </h5>
                <ul className="list-unstyled py-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Genuine & High-Quality Compatible Parts
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Affordable Prices
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Technical Support Available
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Fast Delivery Across Bangladesh
                  </li>
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    Bulk Orders Welcome
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 d-flex flex-column  pt-4">
                <h5
                  className="text-uppercase bg-info ps-3 py-2 rounded"
                  id="text-color"
                >
                  <TbTruckDelivery className="fs-2 mx-2" />
                  Shipping & Delivery
                </h5>
                <ul className="list-unstyled py-2">
                  <li>
                    <FaRegHandPointRight className="me-2 text-info" />
                    We deliver laser printer parts anywhere in Bangladesh.
                    Same-day delivery available in Dhaka city (conditions
                    apply).
                  </li>
                </ul>
              </div>
            </div>

            {/* -------- */}
          </div>
        </div>
      </Container>

      {/* Printer Accessories start*/}
      <section className="printer-accessories">
        <Container>
          <div className="d-flex flex-column text-light text-primary bg-info py-3">
            <h3 className="text-center  mb-1">Laser Printer Accessories</h3>
            <p className="text-center mt-0">
              Get Your Desired Parts from Printer Accessories!
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
              if (laserPrinterParts === category) {
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
      {/* Printer Accessories end*/}

      <WhyChooseSection />
    </div>
  );
};

export default LaserPrinterParts;
