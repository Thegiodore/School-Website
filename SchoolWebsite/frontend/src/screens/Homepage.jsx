import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className="hero-section"> {/*for video*/}
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/TheoryUniversityVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay">
          <h1 className="homepage-title">Welcome to Theory University!</h1>
          <p className="homepage-text">
            At Theory University, we are committed to excellence in education,
            research, and community service. Our goal is to empower students
            with the knowledge and skills they need to succeed in a rapidly
            changing world. Explore our programs, stay updated with the latest
            news, and discover what makes our campus a vibrant place to learn
            and grow.
          </p>
        </div>
      </div>

      <div className="homepage container mt-4">
        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Academic Programs</h2>
          <p>
            Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.
          </p>

          <div className="programs-container">
            <div className="program-card">
              <div className="program-image">
                <img src="/basiceducation.jpg" alt="Basic Education" />
              </div>
              <h3 className="academic-programs">BASIC EDUCATION</h3>
              <a href="/basic-education" className="program-link">
                Explore Programs →
              </a>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/college.jpg" alt="College" />
              </div>
              <h3 className="academic-programs">COLLEGE</h3>
              <a href="/college" className="program-link">
                Explore Programs →
              </a>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/graduateschool.jpg" alt="Graduate School" />
              </div>
              <h3 className="academic-programs">GRADUATE SCHOOL</h3>
              <a href="/graduate-school" className="program-link">
                Explore Programs →
              </a>
            </div>
          </div>
        </section>

        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Campus Life</h2>
          <p>
            At Theory University, student life is vibrant and full of
            opportunities. From clubs and organizations to sports and cultural
            events, our campus is a thriving community where students grow not
            only academically but also personally.
          </p>
        </section>

        {/*for carousel*/}
          <div id="campusCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/sports.jpg"
                  className="d-block w-100 carousel-img"
                  alt="Sports"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Sports</h5>
                  <p>Dynamic athletics programs where students compete and thrive.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/facilities.jpg"
                  className="d-block w-100 carousel-img"
                  alt="Campus Facilities"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Facilities</h5>
                    <p>Modern libraries, labs, and student centers for better learning.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="/outreach.jpg"
                  className="d-block w-100 carousel-img"
                  alt="Outreach Programs"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Outreach Programs</h5>
                    <p>Meaningful initiatives like tree planting and community service that build social responsibility.</p>
                </div>
              </div>
            </div>

          {/*for controls*/}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#campusCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#campusCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

        <section className="homepage-section">
          <h2 className="homepage-sub-titles">News & Events</h2>
          <p>
            Stay updated with the latest news, academic achievements, and
            exciting events happening across our university. Theory University
            is always buzzing with activity!
          </p>
        </section>

        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Contact Us</h2>
          <p>
            Do you want to know more about admissions, programs, or campus
            tours? Reach out to our admissions office and let us help you start
            your Theory University journey.
          </p>
          <div className="d-flex justify-content-center mt-4">
              <Link to="/contact" className="btn btn-primary btn-md rounded-pill">
                Contact Us Now!
              </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
