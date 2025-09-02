// @ts-nocheck
import React, { useContext } from "react";
import { ProductContext } from "../../services/ProductContext";
import { Card, Container } from "react-bootstrap";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import "../WEBDEV/WebDevStyles.css";
import reactDev from "../../assets/is-images/web-img/reactdev1.webp";
import ecommerce from "../../assets/is-images/web-img/ecommerce.jpg";
import education from "../../assets/is-images/web-img/education.jpg";
import restaurant from "../../assets/is-images/web-img/restaurant.jpg";
import technology from "../../assets/is-images/web-img/itFirm.jpg";

// tech icons
import htmlIcon from "../../assets/is-images/web-img/html.png";
import cssIcon from "../../assets/is-images/web-img/css.png";
import jsIcon from "../../assets/is-images/web-img/js.webp";
import reactIcon from "../../assets/is-images/web-img/react-original.svg";
import tailwindIcon from "../../assets/is-images/web-img/tailwindcss.svg";
import bootstrapIcon from "../../assets/is-images/web-img/bootstrap.png";
import sassIcon from "../../assets/is-images/web-img/sass.svg";
import tsIcon from "../../assets/is-images/web-img/ts.png";
import gitIcon from "../../assets/is-images/web-img/git.png";
import githubIcon from "../../assets/is-images/web-img/github.jpg";

const WebDev = () => {
  const { allProducts } = useContext(ProductContext);

  let webDevelopmentCategory = "Web-development";

  return (
    <div className="website-page pb-5">
      {/*Header Section start */}
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Web Design & Development</h1>
          <p className="text-center w-75 mb-5 pb-5">
            A well-designed website can effectively support business purposes.
          </p>
        </div>
      </header>
      {/*Header Section end */}

      <Container>
        <div className="row my-5">
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <h3 className=" fw-semibold bg-info ps-2 py-2 mb-4 rounded text-danger">
              Web Design and Development
            </h3>
            <p>
              Web design and development is a vital component of any modern
              business's online presence. A well-crafted, responsive and
              user-friendly website not only boosts brand visibility but also
              helps attract, engage and retain potential customers. By focusing
              on intuitive UI/UX design, mobile optimization, fast performance,
              and SEO best practices, businesses can establish credibility,
              increase conversions and stay ahead in today's digital landscape.
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-column  pt-4">
            <img src={reactDev} alt="aboutImg" className="img-fluid w-100" />
          </div>
        </div>
        <div className="bg-info py-2 rounded">
          <div className="text-center py-5">
            <h2 className="pb-3 display-5 text-danger">
              Web Development Services
            </h2>
            <p className="fs-5 px-2 text-light">
              Our web development services are built to grow your business. We
              create modern, high-performing and mobile-friendly websites that
              are easy to use and designed to drive results. With a focus on
              SEO, speed and scalability, we help you build a strong online
              presence that attracts and converts customers.
            </p>
          </div>
        </div>
      </Container>

      {/* website services-end*/}
      <section className="website-service pt-0 mt-0">
        <Container className="pb-4 mt-0 pt-0">
          <div className="row pb-5 mb-5">
            {allProducts.map((product) => {
              const { id, productTitle, productImage, productDesc, category } =
                product;
              // console.log(product.productTitle);
              if (webDevelopmentCategory === category) {
                return (
                  <div key={id} className="col-lg-6 d-flex g-5">
                    <Card
                      id="border-color"
                      className="bg-light w-100 rounded-5 text-center"
                    >
                      <Card.Body>
                        <Card.Title className="pb-4 fw-semibold text-primary fs-4">
                          <Card.Img
                            className="fluid-img p-2"
                            id="service-img"
                            src={productImage}
                            alt="server-img"
                          />
                          <span>{productTitle}</span>
                        </Card.Title>
                        <Card.Subtitle className="mb-5 fw-normal">
                          <p className="text-start">{productDesc}</p>
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          {/* website services-end*/}

          {/* some projects */}
          <div className="m-0 p-0  py-4">
            <h3 className="text-center p-5 bg-secondary display-5 fw-normal text-warning mb-5">
              Our Project Highlights
            </h3>

            <div className="row">
              <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
                <div>
                  <h5 className="text-info text-center">
                    E-Commerce Platform
                  </h5>
                  <img
                    src={ecommerce}
                    alt="aboutImg"
                    className="img-fluid w-100"
                  />
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column pt-4">
                <div>
                  <h5 className="text-info text-center">
                    Educational Website
                  </h5>
                  <img
                    src={education}
                    alt="aboutImg"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 justify-content-center  d-flex d-lg-flex pt-4">
                <div>
                  <h5 className="text-info text-center">
                    IT Services Company Website
                  </h5>
                  <img
                    src={technology}
                    alt="aboutImg"
                    className="img-fluid w-100"
                  />
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column pt-4">
                <div>
                  <h5 className="text-info text-center">
                    Digital Restaurant Menu & Booking Platform
                  </h5>
                  <img
                    src={restaurant}
                    alt="aboutImg"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  Technology */}
          <div className="bg-light border p-5 my-5">
            <h3 className="text-center text-info pb-5">Modern Technologies</h3>
            <div className="d-lg-flex justify-content-center align-items-center gap-4">
              <img
                src={htmlIcon}
                alt="html-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img
                src={cssIcon}
                alt="css-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img
                src={jsIcon}
                alt="js-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img src={reactIcon} alt="react-icon" className="img-fluid" />
              <img
                src={tsIcon}
                alt="ts-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img
                src={tailwindIcon}
                alt="tailwind-icon"
                className="img-fluid"
              />
              <img
                src={bootstrapIcon}
                alt="bootstrap-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img src={sassIcon} alt="react-icon" className="img-fluid" />

              <img
                src={gitIcon}
                alt="git-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
              <img
                src={githubIcon}
                alt="github-icon"
                className="img-fluid"
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseSection />
    </div>
  );
};

export default WebDev;
