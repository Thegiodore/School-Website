import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="contact-title">Contact Us</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
