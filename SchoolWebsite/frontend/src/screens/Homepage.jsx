import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/news/") // adjust endpoint ulit if mali
      .then((res) => res.json())
      .then((data) => {
        setNews(data.slice(0, 3)); // show only first 3
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

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

      {/* ACADEMIC PROGRAMS */}
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

        {/* CAMPUS LIFE */}
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

        {/* NEWS & EVENTS */}
        <section className="homepage-section">
          <h2 className="homepage-sub-titles">News & Events</h2>
          <p>
            Stay updated with the latest news, academic achievements, and
            exciting events happening across our university. Theory University
            is always buzzing with activity!
          </p>

          <div className="row">
            {news.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="news-card h-100 shadow-sm">
                  {article.image && (
                    <img
                      src={`http://127.0.0.1:8000${article.image}`}
                      className="card-img-top"
                      alt={article.title}
                    />
                  )}
                  <div className="news-card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.content.length > 100
                        ? article.content.slice(0, 100) + "..."
                        : article.content}
                    </p>
                  </div>
                  <div className="news-card-footer">
                    <small className="text-muted">
                      {new Date(article.publication_date).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-3 mb-3">
            <Link to="/news" className="btn btn-primary rounded-pill">
              More News →
            </Link>
          </div>

        </section>

        {/* CONTACT */}
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
