import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email_address: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    {/* need to know ano yung exact endpoint */}
    try { 
      const response = await fetch("http://127.0.0.1:8000/contact/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus(data.detail);
        setFormData({
          first_name: "",
          last_name: "",
          contact_number: "",
          email_address: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatus(errorData.detail || "Error submitting form.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="contact-title text-center mb-4">Contact Us</h1>
        <h4 className="contact-subtitle">
          Got Questions and Inquiries?
        </h4>
        <p className="contact-subtext">
          Communicate with us by filling out the form below:
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="contact_number"
                className="form-control"
                placeholder="Contact Number (Optional)"
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email_address"
                className="form-control"
                placeholder="Email"
                value={formData.email_address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              Submit Form
            </button>
          </div>
        </form>

        {status && <p className="text-center mt-3">{status}</p>}

        <h4 className="contact-subtitle">
          How to get here?
        </h4>
        <img src="/TheoryUnivMap.jpg" alt="University Location Map" className="contact-map" />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
