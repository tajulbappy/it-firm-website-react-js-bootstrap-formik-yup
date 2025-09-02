import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./ContactStyles.css";
import WhyChooseSection from "../../components/WHYCHOOSEIS/WhyChooseSection ";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have at least 2 characters")
        .required(),
      email: yup.string().required(),
      phone: yup
        .string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .min(11, "Phone number must be at least 11 digits")
        .max(15, "Phone number can't exceed 15 digits")
        .required("Phone is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      const formData = {
        access_key: "82ff29b1-f7f3-4e07-a722-02be52564a09", // Replace with your Web3Forms access key
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Your message has been sent successfully!");
          resetForm();
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  // console.error(formik.errors)

  return (
    <div className="contact-page mb-5">
      <header className="height-75">
        <div className="pt-5">
          <h1 className="text-center pt-5 text-warning">Get In Touch</h1>
        </div>
        {/* <Container>
          <h1 className="text-center">Get In Touch</h1>
          <p className="text-center mb-5 fs-5">
            ''Professionalism and Integrity''
            <br /> We do what we say and do it well! We believe that 'customer
            satisfaction and trust will always be our key for success!'
          </p>
        </Container> */}
      </header>

      <div className="fw-light bg-success py-5 row px-1 mx-0">
        {/* Email */}
        <div className="col-lg-4 col-md-12 d-flex align-items-center mb-3 mb-lg-0">
          <MdOutlineMailOutline className="display-5 text-danger p-2 me-3 bg-light rounded-pill flex-shrink-0" />
          <a
            className="text-dark text-decoration-none"
            href="mailto:info.sales@innovativesolutions-bd.com"
          >
            <span className="fs-4 fw-semibold text-wrap">
              info.sales@innovativesolutions-bd.com
            </span>
          </a>
        </div>
        {/* Phone */}

        <div className="col-lg-3 col-md-12 d-flex align-items-center mb-3 mb-lg-0">
          <FiPhoneCall className="display-5 text-danger p-2 me-3 bg-light rounded-pill flex-shrink-0" />
          <div className="d-flex flex-column">
            <a
              className="text-dark text-decoration-none"
              href="https://wa.me/+8801716093650"
              target="_blank"
            >
              <span className="fs-4 fw-semibold">+880 1716093650</span>
            </a>
            <a
              className="text-dark text-decoration-none"
              href="tel:+8809677601075"
            >
              <span className="fs-4 fw-semibold">+880 9677601075</span>
            </a>
          </div>
        </div>
        {/* Address */}
        <div className="col-lg-5 col-md-12 d-flex align-items-center">
          <SlLocationPin className="display-5 text-danger p-2 me-3 bg-light rounded-pill flex-shrink-0" />
          <a
            className="text-dark text-decoration-none"
            href="https://www.google.com/maps/place/Innovative+Solutions/data=!4m7!3m6!1s0x3755c150d12beeef:0x26433f8d1c56a603!8m2!3d23.800594!4d90.35958!16s%2Fg%2F11fkq1y6p1!19sChIJ7-4r0VDBVTcRA6ZWHI0_QyY?authuser=0&hl=en&rclk=1"
            target="_blank"
          >
            <span className="fs-4 fw-semibold text-wrap">
              Floor-7A, 951 East Monipur, Mirpur 02, Dhaka 1216
            </span>
          </a>
        </div>
      </div>

      <p className="display-5 bg-light py-5 text-center">
        Just write a message to us for any services{" "}
      </p>

      <Container className="my-5  bg-light">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form onSubmit={formik.handleSubmit} id="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                {formik.touched.name && formik.errors.name && (
                  <Form.Text className="text-danger">
                    {formik.errors.name}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <Form.Text className="text-danger">
                    {formik.errors.email}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter mobile number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <Form.Text className="text-danger">
                    {formik.errors.phone}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={7}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <Form.Text className="text-danger">
                    {formik.errors.message}
                  </Form.Text>
                )}
              </Form.Group>

              <button type="submit" className="btn btn-outline-success">
                Submit Form
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      <WhyChooseSection />
    </div>
  );
};

export default Contact;
