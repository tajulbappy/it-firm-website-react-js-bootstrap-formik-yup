// @ts-nocheck
import React, { useContext } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import sliderImage1 from "../../assets/is-images/sliding-img/slide1.jpg";
import sliderImage2 from "../../assets/is-images/sliding-img/slide2.jpg";
import sliderImage3 from "../../assets/is-images/sliding-img/slide3.jpg";
import smallImg from "../../assets/is-images/sliding-img/small-banner.jpg";
// import { FaArrowRight } from "react-icons/fa6";
import { ProductContext } from "../../services/ProductContext";
import BrandingSms from "../../components/BRANDINGSMS/BrandingSms";
// import small-banner from "../../assets/is-images/smaller-banner.png";

// import { FaServer } from "react-icons/fa";

const Home = () => {
  const { allProducts, brnadIcons } = useContext(ProductContext);
  let serverHddCategory = "Server-HDD";
  let serverRamCategory = "Server-RAM";
  let usedPrinterCategory = "Used-Printer";
  let laserPrinterParts = "LP-Parts";

  return (
    <div className="home-page">
      {/* Company Branding Message-start */}

      <BrandingSms />
      {/* Company Branding Message-end */}

      {/*  Carousel/Sliding Section-start */}
      <Carousel className="mt-0 pt-0">
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 h-100 carousel-img"
            src={sliderImage3}
            alt="First-slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 h-100 carousel-img"
            src={sliderImage2}
            alt="Second-slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 h-100 carousel-img"
            src={sliderImage1}
            alt="Third-slide"
          />
        </Carousel.Item>
      </Carousel>
      {/*  Carousel/Sliding Section-end */}

      <div className="py- bg-light">
       
            
            <img className="img-fluid w-100" src={smallImg} alt="banner-image" />
          
      </div>

      {/* Server Accessories/Spare parts start*/}
      <section className="server-accessories">
        <Container>
          <div className="d-flex flex-column text-primary text-light bg-info py-2 my-5">
            <h3 className="text-center  mb-1">Server Accessories</h3>
            <p className="text-center mt-0">
              Get Your Desired Parts from Server Spare Parts!
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
              if (
                serverHddCategory === category ||
                serverRamCategory === category
              ) {
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
      {/* Server Spare parts end*/}

      {/* Printer Accessories start*/}
      <section className="printer-accessories">
        <Container>
          <div className="d-flex flex-column bg-info py-2 my-5 text-light">
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

      {/* Featured Products start OR USED Printer */}
      <section className="feature-product">
        <Container>
          <div className="d-flex flex-column bg-info py-2 my-5 text-light">
            <h3 className="text-center  mb-1">Featured Products</h3>
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
      {/* Featured Products OR USED Printer end*/}

      {/* Our Brands start*/}
      <section className="brand-icon py-4 bg-light">
        <div className="text-center" id="text-color">
          <h3 className="">Our Brands</h3>
          <p>
            We work with a wide range of leading brands, from everyday consumer
            products to advanced IT solutions.
          </p>
        </div>

        <Container id="b-color">
          <Carousel interval={3000}>
            <Carousel.Item>
              <div className="d-flex justify-content-start align-items-center gap-4 flex-wrap">
                {brnadIcons.map(({ id, icon }) => (
                  <img
                    id="brand-icons"
                    key={id}
                    src={icon}
                    className="img-fluid"
                    alt="icons"
                  />
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* Our Brands end*/}
    </div>
  );
};

export default Home;
