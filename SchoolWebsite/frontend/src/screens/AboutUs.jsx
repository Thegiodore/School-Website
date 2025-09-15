import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="container mt-3 about-container">
        <h1 className="about-title">About Theory University</h1>
        <p className="about-description">
          Theory University is a prestigious institution dedicated to academic
          excellence, innovation, and community service. Guided by its mission
          and vision, the university strives to prepare students to thrive in a
          rapidly changing global society.
        </p>

        {/* Mission and Vision */}
        <section className="about-section row">
          <div className="col-md-6">
            <h2 className="about-subtitle">Our Mission</h2>
            <p>
              To provide transformative education that fosters intellectual
              growth, nurtures character, and equips students with skills to
              serve and lead in their chosen fields.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="about-subtitle">Our Vision</h2>
            <p>
              To be a leading global university recognized for academic
              excellence, innovative research, and a strong commitment to
              societal progress.
            </p>
          </div>
        </section>

        {/* Strategic Themes */}
        <section className="about-section">
          <h2 className="about-subtitle">Strategic Themes</h2>
          <ul className="themes-list">
            <li>Innovation in Teaching and Research</li>
            <li>Global Competence and Partnerships</li>
            <li>Sustainability and Social Responsibility</li>
            <li>Student-Centered Growth and Development</li>
          </ul>
        </section>

        {/* Core Values */}
        <section className="about-section">
          <h2 className="about-subtitle">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-box">
              <i className="bi bi-shield-fill fa-2x"></i>
              <div>Integrity</div>
            </div>
            <div className="value-box">
              <i className="bi bi-award-fill fa-2x"></i> 
              <div>Excellence</div>
            </div>
            <div className="value-box">
              <i className="bi bi-people-fill fa-2x"></i> 
              <div>Collaboration</div>
            </div>
            <div className="value-box">
              <i className="bi bi-heart-fill fa-2x"></i> 
              <div>Service</div>
            </div>
            <div className="value-box">
              <i className="bi bi-lightbulb-fill fa-2x"></i> 
              <div>Innovation</div>
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section className="about-section quality-policy">
          <h2 className="about-subtitle">Quality Policy</h2>
          <p>
            “At Theory University, there is an unwavering commitment to
            excellence in education, research, and community service. The
            institution continually strives to uphold the highest standards of
            quality and integrity, ensuring that every student, faculty member,
            and partner experiences a culture of growth and innovation. Guided
            by core values and driven by the pursuit of continuous improvement,
            Theory University stands as a beacon of academic distinction and
            social responsibility.”
          </p>
          <p className="policy-signature">— University President</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
