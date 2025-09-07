import React from "react";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1>Welcome to Theory University!</h1>
        <p>This is the homepage of our school website project.</p>
      </div>
    </div>
  );
};

export default Homepage;
