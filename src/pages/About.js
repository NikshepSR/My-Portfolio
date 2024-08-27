import React, { useState } from "react";
import "../styles/About.css";
import certificationImageAuMds from "../assets/AuMds-Certifiacte.jpg";
import certificationImageNandiToyota from "../assets/NandiToyota-Certificate.png";
import tapacademy from "../assets/Tap-Certificate.jpg";
import SlideInWrapper from "../components/SlideInWrapper";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [showCertificate, setShowCertificate] = useState(null); // Change to null to handle multiple certificates

  const toggleCertificate = (certificate) => {
    setShowCertificate(showCertificate === certificate ? null : certificate);
  };

  return (
    <SlideInWrapper>
      <div className="about">
        <h1>Get To Know Me</h1>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`tab-button ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`tab-button ${
              activeTab === "certifications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
          <button
            className={`tab-button ${
              activeTab === "extracurriculars" ? "active" : ""
            }`}
            onClick={() => setActiveTab("extracurriculars")}
          >
            Extracurriculars
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "skills" && (
            <section className="skills">
              <div className="skill-box">
                <h2>Front-End Development</h2>
                <p>React, JavaScript, HTML, CSS, Wordpress</p>
              </div>
              <div className="skill-box">
                <h2>Back-End Development</h2>
                <p>Python</p>
              </div>
              <div className="skill-box">
                <h2>Data Base</h2>
                <p>My SQL</p>
              </div>
              <div className="skill-box">
                <h2>Version Control</h2>
                <p>Git, GitHub</p>
              </div>
            </section>
          )}

          {activeTab === "experience" && (
            <section className="experience">
              <div
                className="experience-box"
                onClick={() => toggleCertificate("AuMds")}
              >
                <h3>Internship at AuMds (Au Multidimensional Solutions)</h3>
                <p>Front-End Developer InternDuration: 3 Months</p>
              </div>
              <div
                className="experience-box"
                onClick={() => toggleCertificate("NandiToyota")}
              >
                <h3>Nandi Toyota</h3>
                <p>
                  Troubleshooting and Project Management Engine Dismantling and
                  Assembly of a 4 stroke diesel engine
                </p>
              </div>
            </section>
          )}

          {activeTab === "education" && (
            <section className="education">
              <div className="skill-box">
                <h2>Schooling</h2>
                <p>
                  Narayana Group of Schools <br></br>Secured 10/10 CGPA in 10nth
                </p>
              </div>
              <div className="skill-box">
                <h2>College</h2>
                <p>
                  Narayana Group of Schools <br></br>PCMC<br></br> Secured 60%
                  in 12th
                </p>
              </div>
              <div className="skill-box">
                <h2>Engineering</h2>
                <p>
                  The Oxford College Of Engineering <br></br>Automobile
                  Engineering<br></br> Secured 7.6/10 CGPA
                </p>
              </div>
            </section>
          )}
          {activeTab === "certifications" && (
            <section className="certifications">
              <div
                className="experience-box"
                onClick={() => toggleCertificate("Tap")}
              >
                <h3>TAP ACADEMY</h3>
                <p>Full Stack Development</p>
              </div>
              <div
                className="experience-box"
                onClick={() => toggleCertificate("")}
              >
                <h3>Skill Vertex</h3>
                <p>Python</p>
              </div>
            </section>
          )}

          {activeTab === "extracurriculars" && (
            <section className="extracurriculars">
              <div className="skill-box">
                <h2>Passion for Vehicles</h2>
                <p>
                  My love for vehicles, especially cars and bikes, drives me to
                  constantly learn more about them. I enjoy working on my bike
                  from time to time, tweaking and maintaining it to keep it in
                  top condition.
                </p>
              </div>
              <div className="skill-box">
                <h2>Travel & Adventure</h2>
                <p>
                  Traveling and bike rides are my go-to activities for
                  relaxation and exploration. The thrill of the open road and
                  discovering new places fuels my adventurous spirit.
                </p>
              </div>
              <div className="skill-box">
                <h2>Continuous Learning</h2>
                <p>
                  I am always eager to learn new things, whether it's mastering
                  new software or exploring different fields. This curiosity
                  keeps me motivated and constantly growing.
                </p>
              </div>
              <div className="skill-box">
                <h2>Social Work</h2>
                <p>
                  I actively contribute to society as a social worker,
                  participating in various community service initiatives to make
                  a positive impact.
                </p>
              </div>
            </section>
          )}
        </div>

        {showCertificate === "AuMds" && (
          <div
            className="certificate-overlay"
            onClick={() => toggleCertificate("AuMds")}
          >
            <div className="certificate-modal">
              <img
                src={certificationImageAuMds}
                alt="Internship Certificate - AuMds"
                className="certificate-img"
              />
            </div>
          </div>
        )}

        {showCertificate === "NandiToyota" && (
          <div
            className="certificate-overlay"
            onClick={() => toggleCertificate("NandiToyota")}
          >
            <div className="certificate-modal">
              <img
                src={certificationImageNandiToyota}
                alt="Internship Certificate - Nandi Toyota"
                className="certificate-img"
              />
            </div>
          </div>
        )}
        {showCertificate === "Tap" && (
          <div
            className="certificate-overlay"
            onClick={() => toggleCertificate("Tap")}
          >
            <div className="certificate-modal">
              <img
                src={tapacademy}
                alt="Certificate - Tap Academy"
                className="certificate-img"
              />
            </div>
          </div>
        )}
      </div>
    </SlideInWrapper>
  );
};

export default About;
