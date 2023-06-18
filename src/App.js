import React, { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "./assets/photo.png";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header>
        <h1>Srinivasu Chinta</h1>
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
            className={`tab ${activeTab === "hobbies" ? "active" : ""}`}
            onClick={() => handleTabChange("hobbies")}
          >
            Hobbies
          </button>
        </nav>
        {activeTab === "about" && (
          <section>
            <h2>About Me</h2>
            <img className="profile-photo" width={200} src={profilePhoto}></img>
            <div>
              <ul className="about-me-list">
                <li>
                  <span>
                    Experienced and skilful Software Engineering Lead with 12
                    years of valuable experience in designing, developing and
                    managing software applications that are meeting crucial
                    needs of our customers.
                  </span>
                </li>
                <li>
                  <span>
                    Out of my complete experience, my last six years are in
                    engineering healthcare solutions which are very high on
                    usage with great loads. I have reputation for designing high
                    performance and scaling software systems. Bringing forth a
                    motivated attitude and the ability to establish strong and
                    productive relationships with all stakeholders.
                  </span>
                </li>
                <li>
                  <span>
                    Experience with Docker, Kubernetes, Scala, .NET, React,
                    Elasticsearch, Postgres(AWS hosted), Kafka. We highly used
                    AWS services(S3, OpenSearch, EC2, EKS, Rout53, MSK),
                    Jenkins, GitHub Actions, PagerDuty, Datadog, Splunk.
                  </span>
                </li>
                <li>
                  <span>
                    Experience with designing and developing data intensive
                    applications.
                  </span>
                </li>
              </ul>
            </div>
          </section>
        )}
        {activeTab === "experience" && (
          <section>
            <ul>
              <li>
                <h2>Senior Lead, Software engineering</h2>
                <p>Optum, Hyderabad</p>
                <p>MARCH 2021 — PRESENT</p>
                <ul className="about-me-list">
                  <li>
                    <span>
                      I am responsible for designing and developing health care
                      applications that help members live healthier lives.
                    </span>
                  </li>
                  <li>
                    <span>
                      I have designed various solutions, which are very high on
                      usage, using{" "}
                      <b>
                        Docker, Kubernetes, Scala, Java, React, Play,
                        Elasticsearch, Postgres(AWS hosted), Kafka. We highly
                        used AWS services(S3, OpenSearch, EC2, EKS, Rout53, MSK)
                        to eliminate infra maintenance and cost efficiency.
                      </b>
                    </span>
                  </li>
                  <li>
                    <span>
                      We have adopted to a very good monitoring and alerting
                      strategies using PagerDuty, Datadog, Splunk.
                    </span>
                  </li>
                  <li>
                    <span>
                      I am well versed with microservices architecture and
                      corrected our system to split the ownership of the
                      services. I am skilful on devop strategies.
                    </span>
                  </li>
                  <li>
                    <span>
                      I have adopted CI/CD tools like Jenkins, Ansible with
                      releases as often as every week.
                    </span>
                  </li>
                  <li>
                    <span>
                      I have been greatly leading two wonderful working on a
                      highly used healthcare product.
                    </span>
                  </li>
                  <li>
                    <span>
                      I did persuade both of my teams to take challenges and
                      stand the reputation as productive tech savvy teams. I
                      have been part of discussions to solve complex technology
                      problems like Play framework upgrades of around 17
                      microservices, elastic search upgrade and performance
                      improvements.
                    </span>
                  </li>
                  <li>
                    <span>
                      I have organically grown as manager of the teams from
                      being team member of the team. I have taken challenge of
                      remedy a team when it was in deep trouble by the time I
                      join the team.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <h2>Lead software engineering</h2>
                <p>Optum, Hyderabad</p>
                <p>MARCH 2017 — 2020</p>
                <ul className="about-me-list">
                  <li>
                    <span>Lead a team where I had grown as an engineer</span>
                  </li>
                  <li>
                    <span>
                      I gained trust from my team and designed and implemented a
                      health care solution which helps NHS UK. It was
                      implemented in .NET WPF and content management system
                      using <b>Redis, RabbitMQ, KnockoutJS and .NET MVC</b>. We
                      changed the windows application to depend on a rest web
                      service.
                    </span>
                  </li>
                  <li>
                    <span>
                      Have designed and implemented an enhancement to a search
                      solution using Scala, Play, Elasticsearch, postgres(aws
                      hosted), Kafka, docker, K8S and aws services(S3,
                      OpenSearch, EC2, EKS, Rout53).
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <h2>Senior software engineer</h2>
                <p>Optum, Hyderabad</p>
                <p>MARCH 2016 — 2017</p>
                <ul className="about-me-list">
                  <li>
                    <span>
                      I joined Optum as senior software engineer in a end user
                      facing software development team.
                    </span>
                  </li>
                  <li>
                    <span>
                      It’s implemented using Microsoft tech stack. It consists
                      of user facing{" "}
                      <b>
                        WPF app, Web Api services, ETLs using SSIS, content
                        management web app using .NET MVC.
                      </b>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <h2>Software engineer</h2>
                <p>ADP, Hyderabad</p>
                <p>MARCH 2012 — 2016</p>
                <ul className="about-me-list">
                  <li>
                    <span>
                      I worked as software engineer, primarily started as
                      SharePoint developer and later implemented many tactical
                      solutions using .NET for the organization that helped our
                      leadership to take informed decisions.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <h2>Associate Software engineer</h2>
                <p>Virtusa, Hyderabad</p>
                <p>MARCH 2010 — 2012</p>
                <ul className="about-me-list">
                  <li>
                    <span>
                      I was selected in campus interviews in my 3rd year of
                      engineering in to Virtusa. I started my career by writing
                      solutions using .NET and SharePoint 2010.
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      I have written few sandbox solutions that are reusable and
                      easy to deploy in any SharePoint site collection.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        )}
        {activeTab === "education" && (
          <section>
            <ul>
              <li>
                <h2>B.Tech </h2>
                <p>SRKR engineering college, Bhimavaram</p>
                <p>JUNE 2005 — MARCH 2009</p>
                <ul className="about-me-list">
                  <li>
                    <span>
                      I graduated with 78%. I was good at my academics. I have
                      scored 95% in my intermediate with good eamcet rank.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <h2>Courses </h2>
                <p>Machine learning, Stanford online</p>
                <p>AUGUST 2018</p>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "skills" && (
          <section>
            <ul className="about-me-list">
              <li>
                <span>Application design</span>
              </li>
              <li>
                <span>System design</span>
              </li>
              <li>
                <span>Managing People</span>
              </li>
              <li>
                <span>Cloud Computing</span>
              </li>
              <li>
                <span>Microsoft technology stack</span>
              </li>
              <li>
                <span>Scala and Play framework</span>
              </li>
              <li>
                <span>Web application development</span>
              </li>
              <li>
                <span>React</span>
              </li>
              <li>
                <span>React Native</span>
              </li>
              <li>
                <span>DevOps</span>
              </li>
            </ul>
          </section>
        )}

{activeTab === "hobbies" && (
          <section>
            <ul className="about-me-list">
              <li>
                <span>Swimming</span>
              </li>
              <li>
                <span>Painting</span>
              </li>
              <li>
                <span>Reading</span>
              </li>
              <li>
                <span>Studying sociology</span>
              </li>
              
            </ul>
          </section>
        )}
      </main>
      <footer>
        <div className="contact-info">
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <p className="footer-text">srinivaswavy@gmail.com</p>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          <p className="footer-text">(091) 9963065094</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
