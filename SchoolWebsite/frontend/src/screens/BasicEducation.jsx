import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const BasicEducation = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="program-category">Basic Education</h1>
        <p>
            Our Basic Education program lays the foundation for lifelong learning. 
            From preschool to senior high school, we nurture curiosity, discipline, 
            and character to prepare students for academic excellence and personal growth.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BasicEducation;