import React, { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
      </header>
      <main>
        <nav className="tabs">
          <button
            className={`tab ${activeTab === "about" ? "active" : ""}`}
            onClick={() => handleTabChange("about")}
          >
            About
          </button>
          <button
            className={`tab ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => handleTabChange("experience")}
          >
            Experience
          </button>
          <button
            className={`tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </button>
          <button
            className={`tab ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => handleTabChange("skills")}
          >
            Skills
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabChange("projects")}
          >
            Projects
          </button>
        </nav>
        {activeTab === "about" && (
          <section>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              gravida non mauris eget dapibus. Vestibulum auctor lacus vel
              sapien feugiat, nec placerat erat pulvinar.
            </p>
          </section>
        )}
        {activeTab === "experience" && (
          <section>
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>Job Title</h3>
                <p>Company Name, Location</p>
                <p>Start Date - End Date</p>
                <ul>
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                </ul>
              </li>
            </ul>
          </section>
        )}
        {activeTab === "education" && (
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                <h3>University Name</h3>
                <p>Degree, Major</p>

                <h3>Project Name</h3>
                <p>Description of the project.</p>
                <p>
                  <a href="https://project-url.com">Project URL</a>
                </p>
              </li>
            </ul>
          </section>
        )}
      </main>
      <footer>
        <div className="contact-info">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <p className="footer-text">your-email@example.com</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          <p className="footer-text">(123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
