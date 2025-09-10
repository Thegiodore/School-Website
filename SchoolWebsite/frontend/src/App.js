import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Admission from "./screens/Admission";
import News from "./screens/News";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import BasicEducation from "./screens/BasicEducation";
import College from "./screens/College";
import GraduateSchool from "./screens/GraduateSchool";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/basic-education" element={<BasicEducation />} />
        <Route path="/college" element={<College />} />
        <Route path="/graduate-school" element={<GraduateSchool />} />
      </Routes>
    </Router>
  );
}

export default App;
