import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const College = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="program-category text-center">College</h1>
        <p className="text-center mb-3">
          Our College programs equip students with the knowledge and skills needed to succeed in their chosen fields. 
          Through innovative teaching, hands-on learning, and real-world experiences, 
          we shape graduates who are ready to lead and make an impact.
        </p>

        {/* Program Offerings */}
        <h2 className="section-title text-center mb-4">Program Offerings</h2>
        <div className="row justify-content-center">
          {[
            { title: "School of Business and Accountancy", img: "/business.jpg", desc: "Developing future leaders and professionals in business, finance, and accountancy." },
            { title: "School of Engineering and Architecture", img: "/engineering.jpg", desc: "Innovative programs in engineering and architecture, shaping builders of tomorrow." },
            { title: "School of Arts and Sciences", img: "/artsci.jpg", desc: "Cultivating creativity, critical thinking, and a passion for knowledge across disciplines." },
            { title: "School of Education", img: "/education.jpg", desc: "Preparing future educators with the skills to inspire and shape young minds." },
            { title: "School of Hospitality and Tourism Management", img: "/hospitality.jpg", desc: "Training professionals in hospitality and tourism with global standards." },
            { title: "School of Nursing and Allied Medical Services", img: "/nursing.jpg", desc: "Equipping students with medical expertise and compassionate healthcare practice." },
            { title: "School of Computing", img: "/computing.jpg", desc: "Building tech innovators through programs in computer science and IT." },
            { title: "College of Criminal Justice Education and Forensics", img: "/criminaljustice.jpg", desc: "Developing professionals in law enforcement, criminology, and forensic sciences." },
          ].map((program, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card program-card h-100 shadow-sm text-center">
                <img
                  src={program.img}
                  className="card-img-top program-img"
                  alt={program.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{program.title}</h5>
                  <p className="card-text">{program.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Administration & Staff */}
        <h2 className="section-title text-center mb-4">Administration & Staff</h2>
        <div className="row text-center">
          {[
            { role: "Dean", name: "Dr. Alfredo Ramos", email: "aramos@theoryuniv.edu" },
            { role: "Associate Dean", name: "Dr. Cecilia Martinez", email: "cmartinez@theoryuniv.edu" },
            { role: "Program Chair - Business", name: "Prof. Daniel Cruz", email: "dcruz@theoryuniv.edu" },
            { role: "Program Chair - Engineering", name: "Engr. Sofia Villanueva", email: "svillanueva@theoryuniv.edu" },
            { role: "Program Chair - Arts & Sciences", name: "Dr. Marco Gutierrez", email: "mgutierrez@theoryuniv.edu" },
            { role: "Program Chair - Education", name: "Prof. Elena Dela Rosa", email: "edelarosa@theoryuniv.edu" },
            { role: "Program Chair - Hospitality", name: "Chef Raul Bautista", email: "rbautista@theoryuniv.edu" },
            { role: "Program Chair - Nursing", name: "Dr. Patricia Lim", email: "plim@theoryuniv.edu" },
            { role: "Program Chair - Computing", name: "Prof. Kevin Tan", email: "ktan@theoryuniv.edu" },
            { role: "Program Chair - Criminal Justice", name: "Atty. Regina Morales", email: "rmorales@theoryuniv.edu" },
            { role: "Registrar", name: "Mr. Jose Enriquez", email: "jenriquez@theoryuniv.edu" },
            { role: "Admin Officer", name: "Ms. Clarisse Yu", email: "cyu@theoryuniv.edu" },
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

export default College;
