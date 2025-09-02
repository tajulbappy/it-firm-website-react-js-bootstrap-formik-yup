// @ts-nocheck
import React from "react";
import "./blogStyles.css";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import AboutImg from "../../assets/is-images/banner11.webp";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog-page mb-5">
      <header className="height-75">
        

        <Container className="container h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">Blogs</h1>
          <p className="text-center w-75 mb-5 text-warning">
            Welcome to
            <span className="mx-1 text-uppercase fw-semibold">
              Innovative Solutions
            </span>
            your trusted partner for comprehensive IT support and services. With
            a commitment to excellence and a passion for technology, we
            specialize in delivering tailored solutions to meet the unique needs
            of businesses small, medium and enterprise.
          </p>
        </Container>
      </header>

      <Container className=" my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <p className=" text-justify">
              <span className="text-uppercase fw-semibold text-success">
                Innovative Solutions
              </span>
              , we understand that in today's fast-paced digital landscape,
              reliable IT infrastructure is essential for success. That's why
              our team of experienced professionals is dedicated to providing
              proactive support, strategic guidance, and innovative solutions to
              keep your business running smoothly and securely.
            </p>
            <p className="mb-5">
              As a leading master managed service provider, we specialize in
              delivering comprehensive services to other managed service
              providers, who then offer them to their clients. Our strong vendor
              relationships with IBM, DELL, HP, and Apple ensure that we provide
              cutting-edge business services, giving our clients peace of mind.
            </p>
          </div>
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex mt-3">
            <img
              src={AboutImg}
              alt="aboutImg"
              className="img-fluid w-100 h-100 "
            />
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default Blog;
