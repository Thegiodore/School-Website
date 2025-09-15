import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Admission.css";

const Admission = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="admission-title">Admission</h1>

        {/* Enrollment Period */}
        <div className="admission-card">
          <h4 className="section-title">Enrollment Period</h4>
          <p style={{textAlign: "center" }}>
            Enrollment for S.Y. 2025 – 2026 will officially start on{" "}
            <strong>April 21, 2025</strong>.
          </p>
        </div>

        {/* College Section */}
        <div className="admission-card">
          <h3 className="section-title">College Freshmen & Transferees</h3>

          <h5 className="subsection-title">Enrollment Procedures</h5>
          <ol>
            <li>Secure an admission form from the Registrar’s Office or online portal.</li>
            <li>Submit all required documents for evaluation.</li>
            <li>Take the entrance exam (if applicable).</li>
            <li>Proceed with interview and counseling session.</li>
            <li>Pay the necessary fees at the Cashier’s Office.</li>
            <li>Claim your official registration form and class schedule.</li>
          </ol>

          <h5 className="subsection-title">Requirements</h5>
          <div className="requirements">
            <h6>For Non-Theory University Students (Transferees):</h6>
            <ul>
              <li>Honorable Dismissal / Transfer Credential</li>
              <li>Transcript of Records (TOR) or Certified True Copy of Grades</li>
              <li>Certificate of Good Moral Character</li>
              <li>2x2 ID pictures (2 pcs.)</li>
              <li>PSA Birth Certificate</li>
            </ul>

            <h6>For Theory University Students (Freshmen):</h6>
            <ul>
              <li>Form 138 (Report Card)</li>
              <li>Certificate of Good Moral Character</li>
              <li>2x2 ID pictures (2 pcs.)</li>
              <li>PSA Birth Certificate</li>
            </ul>
          </div>
        </div>

        {/* Basic Education Section */}
        <div className="admission-card">
          <h3 className="section-title">Basic Education</h3>

          <h5 className="subsection-title">Enrollment Procedures</h5>
          <ol>
            <li>Get an enrollment form from the Registrar’s Office or online portal.</li>
            <li>Submit the required documents for assessment.</li>
            <li>Proceed with interview (if applicable).</li>
            <li>Pay enrollment and miscellaneous fees.</li>
            <li>Claim your student ID and class schedule.</li>
          </ol>

          <h5 className="subsection-title">Requirements</h5>
          <ul>
            <li>Form 138 (Report Card)</li>
            <li>Certificate of Good Moral Character</li>
            <li>2x2 ID pictures (2 pcs.)</li>
            <li>PSA Birth Certificate</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admission;
