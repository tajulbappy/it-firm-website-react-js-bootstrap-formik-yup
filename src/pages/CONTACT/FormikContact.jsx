import React from "react";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

const FormikContact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = {
        access_key: "041eef1f-4652-49d5-bd79-ae2aa7bcfeb0", // Replace with your Web3Forms access key
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
          alert("Your message has been sent successfully!");
          resetForm();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div>
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
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
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
          <Form.Text>
            We'll never share your phone number with anyone else.
          </Form.Text>
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
        </Form.Group>

        <button type="submit" className="btn btn-outline-success">
          Submit Form
        </button>
      </Form>
    </div>
  );
};

export default FormikContact;
