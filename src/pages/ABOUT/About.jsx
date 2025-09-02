// @ts-nocheck
import React from "react";
import "./AboutStyles.css";
import AboutImg from "../../assets/is-images/banner11.webp";
import AboutImg1 from "../../assets/is-images/banner12.2.jpg";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-page mb-5">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light ">
          <h1 className="text-center fw-semibold">About Us</h1>
          <p className="text-center w-75 mb-5">
            Welcome to
            <span className="mx-1 text-uppercase fw-semibold text-success">
              Innovative Solutions
            </span>
            your trusted partner for comprehensive IT support and services. With
            a commitment to excellence and a passion for technology, we
            specialize in delivering tailored solutions to meet the unique needs
            of businesses small, medium and enterprise.
          </p>
        </div>
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

      <Container className="my-5">
        <div className="row pt-5">
          <div className="col-lg-6 justify-content-center  d-flex d-lg-flex">
            <img
              src={AboutImg1}
              alt="aboutImg"
              className="img-fluid  h-100 w-100"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
            <p className=" text-justify mb-4">
              <h5
                className="mb-4 text-uppercase fw-semibold text-center text-decoration-underline"
                id="text-color"
              >
                Vission & Mission
              </h5>
              To pioneer innovative solutions that empower businesses and
              individuals to thrive in the digital age. We strive to be a
              catalyst for positive change, leveraging cutting-edge technology
              to create seamless experiences and drive sustainable growth.
              Through our unwavering commitment to excellence, integrity, and
              collaboration, we aim to be the partner of choice for
              organizations seeking to unlock their full potential in an
              ever-evolving technological landscape
            </p>
            <p className="mb-5">
              <span className="text-uppercase fw-semibold text-success">
                Innovative Solutions
              </span>
              , our mission is to harness the power of technology to simplify
              complexity, empower people, and create value for our clients and
              communities. We are dedicated to delivering innovative solutions
              that exceed expectations, enhance productivity, and drive digital
              transformation. Through a relentless focus on customer success,
              continuous learning, and ethical business practices, we aim to be
              the trusted partner of choice, enabling organizations to thrive in
              a rapidly changing world.
            </p>
          </div>
        </div>
      </Container>

      <WhyChooseSection />
    </div>
  );
};

export default About;
