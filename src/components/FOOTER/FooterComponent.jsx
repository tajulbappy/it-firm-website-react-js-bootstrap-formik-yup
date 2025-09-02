// @ts-nocheck
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import developer from "../../assets/is-images/developer.jpg";
//icons
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <footer>
        <hr />
        <div className="container mb-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <Link to="/contact">
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  type="button"
                  className="mb-5 mb-md-4 ms-sm-4"
                  id="btn-normal"
                >
                  Get In Touch
                </button>
              </Link>
              <ul className="footer-social-icons list-unstyled d-flex justify-content-evenly">
                <Link
                  to="https://www.facebook.com/bdserverparts/"
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#552a2e"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="https://www.linkedin.com/" target="_blank">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#552a2e"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </li>
                </Link>
                <Link to="https://x.com/" target="_blank">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#552a2e"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </li>
                </Link>

                <Link to="https://www.youtube.com/" target="_blank">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#552a2e"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul
                    className="footer-navigation list-unstyled mb-0"
                    id="text-color"
                  >
                    <li className="text-uppercase fw-semibold ">
                      <Link
                        to="/"
                        className="text-uppercase fw-semibold text-decoration-none"
                        id="text-color"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="text-uppercase fw-semibold">
                      <Link
                        to="/"
                        className="text-decoration-none"
                        id="text-color"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Solutions
                      </Link>
                    </li>

                    <li className="text-uppercase fw-semibold">
                      <Link
                        to="/blog"
                        className="text-decoration-none"
                        id="text-color"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="text-uppercase fw-semibold">
                      <Link
                        to="/contact"
                        className="nav-link"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="text-uppercase fw-semibold">
                      <Link
                        to="/about"
                        className="nav-link"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7" id="office-location">
                  <div>
                    <h5 className="fw-semibold ">Corporate Office</h5>
                    <a
                      href="https://www.google.com/maps/place/Innovative+Solutions/data=!4m7!3m6!1s0x3755c150d12beeef:0x26433f8d1c56a603!8m2!3d23.800594!4d90.35958!16s%2Fg%2F11fkq1y6p1!19sChIJ7-4r0VDBVTcRA6ZWHI0_QyY?authuser=0&hl=en&rclk=1"
                      target="_blank"
                      className="m-0 fw-medium"
                      id="text-color"
                    >
                      <SlLocationPin className="me-2" id="icon-size" />
                      951 East Monipur, Mirpur 02, Dhaka 1216
                    </a>
                    <br />
                    <a
                      href="tel:+8801716093650"
                      className="m-0 fw-medium"
                      id="text-color"
                    >
                      <FiPhoneCall className="me-2" id="icon-size" />
                      (+88) 09677-601075 & (+88) 01716093650
                    </a>
                    <br />
                    <a
                      className="m-0 fw-medium"
                      href="https://wa.me/+8801716093650"
                      target="_blank"
                      id="text-color"
                    >
                      <FaWhatsapp className="me-2" id="icon-size" />
                      (+88) 01716093650
                    </a>
                    <br />
                    <a
                      className="m-0 fw-medium"
                      href="mailto:info@innovativesolutions-bd.com"
                      id="text-color"
                    >
                      <MdOutlineMailOutline className="me-2" id="icon-size" />
                      info.sales@innovativesolutions-bd.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bgbody-tertiary">
          <Container className="d-lg-flex align-items-center justify-content-between">
            <p className="p-3 m-0 text-center text-muted " id="text-color">
              © 2025 Innovative Solutions | All rights reserved
            </p>
            <p className="p-3 m-0 text-center text-muted" id="text-color">
              <i>
                <span>Developed By </span>
                <img
                  className="img-fluid rounded-pill"
                  src={developer}
                  alt="developer-logo"
                  id="developer-logo"
                />
              </i>
            </p>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
