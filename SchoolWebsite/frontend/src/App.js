import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Admission from "./screens/Admission";
import News from "./screens/News";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
