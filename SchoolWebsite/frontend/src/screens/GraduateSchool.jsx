import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/ProgramCategory.css";

const GraduateSchool = () => {
  const programGroups = [
    {
      school: "School of Business and Accountancy",
      icon: "bi-briefcase",
      programs: [
        "Master of Business Administration",
        "Doctor of Business Administration",
        "Green MBA in Leadership for a Sustainable Economy",
        "Master in Public Administration",
        "Master of Science in Accountancy",
      ],
    },
    {
      school: "School of Arts and Sciences",
      icon: "bi-palette",
      programs: [
        "Master of Arts in Communication",
        "Master of Arts in Guidance Counselling",
        "Master of Science in Psychology",
        "Doctor of Philosophy in Psychology",
        "Master in Digital Marketing Communication",
      ],
    },
    {
      school: "School of Education",
      icon: "bi-journal-bookmark",
      programs: [
        "Master of Arts",
        "Master of Arts in Education",
        "Doctor of Philosophy in Education Management",
      ],
    },
    {
      school: "School of Nursing and Allied Medical Sciences",
      icon: "bi-heart-pulse",
      programs: [
        "PhD in Nursing Education",
        "Master of Science in Nursing",
        "Master of Science in Health Services Administration",
        "Master of Arts in Nursing",
        "Master of Science in Radiologic Technology",
      ],
    },
    {
      school: "School of Engineering and Architecture",
      icon: "bi-tools",
      programs: [
        "Master in Engineering Program",
        "Master of Science in Engineering Management",
        "Master of Science in Electronics and Communications Engineering",
        "Doctor of Technology",
      ],
    },
    {
      school: "School of Computing",
      icon: "bi-laptop",
      programs: [
        "Master in Information Technology",
        "Professional Science Master's in Cybersecurity",
      ],
    },
    {
      school: "School of Hospitality and Tourism Management",
      icon: "bi-cup-hot",
      programs: [
        "Master of Science in Hospitality and Tourism Management",
        "Doctor of Business Administration (Hospitality and Tourism Management)",
      ],
    },
  ];

  // Administration & Staff (Deans per school)
  const staff = [
    {
      role: "Dean - School of Business and Accountancy",
      name: "Dr. Maria Santos",
      email: "msantos@university.edu",
    },
    {
      role: "Dean - School of Arts and Sciences",
      name: "Dr. Juan Dela Cruz",
      email: "jdelacruz@university.edu",
    },
    {
      role: "Dean - School of Education",
      name: "Dr. Ana Reyes",
      email: "areyes@university.edu",
    },
    {
      role: "Dean - School of Nursing and Allied Medical Sciences",
      name: "Dr. Carlos Gomez",
      email: "cgomez@university.edu",
    },
    {
      role: "Dean - School of Engineering and Architecture",
      name: "Dr. Lucia Fernandez",
      email: "lfernandez@university.edu",
    },
    {
      role: "Dean - School of Computing",
      name: "Dr. Roberto Cruz",
      email: "rcruz@university.edu",
    },
    {
      role: "Dean - School of Hospitality and Tourism Management",
      name: "Dr. Elena Mendoza",
      email: "emendoza@university.edu",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="program-category text-center">Graduate School</h1>
        <p className="text-center mb-3">
          Our Graduate School offers advanced programs that foster research, leadership, and innovation.
          Designed for professionals and scholars, we provide opportunities to deepen expertise,
          pursue groundbreaking studies, and contribute to global progress.
        </p>

        {/* Program Offerings */}
        <h2 className="section-title text-center mb-3">Program Offerings</h2>
        {programGroups.map((group, index) => (
          <div key={index} className="mb-3">
            <h3 className="section-subtitle text-center mb-4">{group.school}</h3>
            <div className="row justify-content-center">
              {group.programs.map((program, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card program-card h-100 shadow-sm d-flex flex-column align-items-center p-3">
                    <i className={`bi ${group.icon} program-icon`}></i>
                    <h6 className="card-title mt-2">{program}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Administration & Staff */}
        <h2 className="section-title text-center mb-4">Administration & Staff</h2>
        <div className="row justify-content-center">
          {staff.map((member, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card staff-card h-100 shadow-sm text-center p-3">
                <p className="staff-role">{member.role}</p>
                <h6 className="staff-name">{member.name}</h6>
                <p className="staff-email">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraduateSchool;
