import React from "react";
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Theory University. All rights reserved.</p>
        <p className="footer-links">
          <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/admission">Admission</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;