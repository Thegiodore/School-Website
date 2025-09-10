import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const College = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="program-category">College</h1>
        <p>
            Our College programs equip students with the knowledge and skills needed to succeed in their chosen fields. 
            Through innovative teaching, hands-on learning, and real-world experiences, 
            we shape graduates who are ready to lead and make an impact.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default College;