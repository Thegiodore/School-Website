import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="about-title">About Us</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
