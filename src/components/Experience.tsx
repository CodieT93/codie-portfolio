import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Development Instructor",
    company: "Equinim College of Technology",
    location: "Perth, WA",
    period: "September 2024 – Present",
    description: [
      "Teach advanced JavaScript and frontend development, guiding students to proficiency in modern web practices through interactive, hands-on projects.",
      "Design lesson plans covering JavaScript, React.js, and CSS frameworks, progressing from foundational to advanced topics like state management.",
      "Lead coding sessions on real-world applications, fostering practical skills in project setup, API integration, and responsive design.",
      "Mentor students individually, providing tailored debugging support and Git workflow training to prepare them for collaborative environments.",
      "Assess progress through code reviews and project evaluations, offering constructive feedback to enhance technical and professional growth."
    ]
  },
  {
    title: "React Native Developer",
    company: "Education Technology Firm",
    location: "Remote, Perth, WA",
    period: "January 2024 – Present",
    description: [
      "Contribute to StudentSync, a React Native mobile app enhancing student engagement with features like real-time chat and resource sharing.",
      "Develop and optimize chat functionality using Firebase, ensuring seamless, reliable communication between users.",
      "Collaborate with designers to translate wireframes into adaptive mobile interfaces, integrating push notifications via Firebase Cloud Messaging.",
      "Perform performance testing and optimizations, such as data caching, to improve responsiveness under varying conditions.",
      "Work with backend teams to define API endpoints, ensuring robust app-server integration during code reviews and development cycles."
    ]
  },
  {
    title: "Junior Full Stack Developer",
    company: "Various Clients (Pet Supplies, Mining, Logistics, Hospitality)",
    location: "Perth, WA",
    period: "June 2019 – December 2021",
    description: [
      "Delivered tailored web applications and websites, including a pet boarding portal (React.js) and logistics dashboard (Django), meeting diverse client needs.",
      "Designed intuitive frontends and managed backend logic with Django or Node.js, integrating APIs like payment gateways and mapping services.",
      "Conducted thorough testing and provided post-deployment support, resolving issues and incorporating client feedback to enhance functionality."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="experience section-padding" id="experience">
      <div className="container">
        <h2 className="text-gradient">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <h4>{exp.company}</h4>
                    <div className="meta-info">
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i> {exp.location}
                      </span>
                      <span className="period">
                        <i className="far fa-calendar-alt"></i> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="experience-details">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 