import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Admission.css";

const Admission = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="admission-title">Admission</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Admission;
