import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const BasicEducation = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="program-category text-center">Basic Education</h1>
        <p className="text-center mb-3">
          Our Basic Education program lays the foundation for lifelong learning.
          From preschool to senior high school, we nurture curiosity, discipline,
          and character to prepare students for academic excellence and personal growth.
        </p>

        {/* Program Offerings */}
        <h2 className="section-title text-center mb-4">Program Offerings</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card program-card h-100 shadow-sm text-center">
              <img
                src="/elementary.jpg"
                className="card-img-top program-img"
                alt="Elementary"
              />
              <div className="card-body">
                <h5 className="card-title">Laboratory Elementary School</h5>
                <p className="card-text">
                  A nurturing environment for young learners to build
                  fundamental skills and values.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card program-card h-100 shadow-sm text-center">
              <img
                src="/juniorhigh.jpg"
                className="card-img-top program-img"
                alt="Junior High"
              />
              <div className="card-body">
                <h5 className="card-title">Junior High School</h5>
                <p className="card-text">
                  Guiding students through adolescence with strong academics,
                  discipline, and leadership training.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card program-card h-100 shadow-sm text-center">
              <img
                src="/seniorhigh.jpg"
                className="card-img-top program-img"
                alt="Senior High"
              />
              <div className="card-body">
                <h5 className="card-title">Senior High School</h5>
                <p className="card-text">
                  Preparing students for college and career pathways with diverse
                  academic strands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Administration & Staff */}
        <h2 className="section-title text-center mb-4">Administration & Staff</h2>
        <div className="row text-center">
          {[
            { role: "Principal", name: "Dr. Maria Santos", email: "msantos@theoryuniv.edu" },
            { role: "Vice Principal", name: "Mr. John Cruz", email: "jcruz@theoryuniv.edu" },
            { role: "Head Teacher", name: "Ms. Angela Reyes", email: "areyes@theoryuniv.edu" },
            { role: "Coordinator", name: "Mr. Carlo Dela Cruz", email: "cdelacruz@theoryuniv.edu" },
            { role: "Guidance Counselor", name: "Ms. Liza Ramos", email: "lramos@theoryuniv.edu" },
            { role: "Registrar", name: "Mr. Paulo Garcia", email: "pgarcia@theoryuniv.edu" },
            { role: "Admin Officer", name: "Ms. Karen Villanueva", email: "kvillanueva@theoryuniv.edu" },
            { role: "Finance Officer", name: "Mr. Miguel Lopez", email: "mlopez@theoryuniv.edu" },
            { role: "IT Specialist", name: "Mr. Patrick Tan", email: "ptan@theoryuniv.edu" },
            { role: "Librarian", name: "Ms. Sofia Mendoza", email: "smendoza@theoryuniv.edu" },
            { role: "School Nurse", name: "Ms. Clara Bautista", email: "cbautista@theoryuniv.edu" },
            { role: "Facilities Manager", name: "Mr. Ramon Ortega", email: "rortega@theoryuniv.edu" },
          ].map((staff, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="staff-card p-3 shadow-sm h-100">
                <p className="staff-role">{staff.role}</p>
                <h6 className="staff-name">{staff.name}</h6>
                <p className="staff-email">{staff.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicEducation;
