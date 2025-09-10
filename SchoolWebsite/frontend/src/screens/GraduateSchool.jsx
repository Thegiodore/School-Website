import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const GraduateSchool = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="program-category">Graduate School</h1>
        <p>
            Our Graduate School offers advanced programs that foster research, leadership, and innovation. 
            Designed for professionals and scholars, we provide opportunities to deepen expertise, 
            pursue groundbreaking studies, and contribute to global progress.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default GraduateSchool;