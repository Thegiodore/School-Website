import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="homepage container mt-4">
        <h1 className="homepage-title">Welcome to Theory University!</h1>
        <p className="homepage-text">
          At Theory University, we are committed to excellence in education, research, and community service. 
  Our goal is to empower students with the knowledge and skills they need to succeed in a rapidly changing world. 
  Explore our programs, stay updated with the latest news, and discover what makes our campus a vibrant place to learn and grow.
        </p>

 {/* Placeholder content to test scrolling */}
        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Academic Programs</h2>
          <p>
            Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation. Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.Theory University is a prestigious institution that prides itself on
            providing world-class education. Our commitment is to nurture
            students into becoming leaders of tomorrow through academic
            excellence, research, and innovation.
          </p>
        </section>

        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Our Programs</h2>
          <p>
            We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society. We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.We offer a wide variety of programs ranging from Engineering,
            Computer Science, Business Administration, Liberal Arts, and
            Medicine. Each program is designed to meet the evolving demands of
            society.
          </p>
        </section>

        <section className="homepage-section">
          <h2 className="homepage-sub-titles">Campus Life</h2>
          <p>
            At Theory University, student life is vibrant and full of
            opportunities. From clubs and organizations to sports and cultural
            events, our campus is a thriving community where students grow not
            only academically but also personally. At Theory University, student life is vibrant and full of
            opportunities. From clubs and organizations to sports and cultural
            events, our campus is a thriving community where students grow not
            only academically but also personally.At Theory University, student life is vibrant and full of
            opportunities. From clubs and organizations to sports and cultural
            events, our campus is a thriving community where students grow not
            only academically but also personally.At Theory University, student life is vibrant and full of
            opportunities. From clubs and organizations to sports and cultural
            events, our campus is a thriving community where students grow not
            only academically but also personally.
          </p>
        </section>

        {/* Add more sections for scrolling effect */}
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
        </section>


      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
