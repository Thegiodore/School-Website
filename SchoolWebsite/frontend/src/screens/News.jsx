import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/News.css";

const News = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1 className="news-title">University News</h1>
        <p style={{textAlign: "center" }}>
          Latest updates and announcements from Theory University.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default News;
