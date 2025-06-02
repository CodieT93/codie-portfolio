import React, { useState } from 'react';

interface SkillCategory {
  title: string;
  points: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  period: string;
  details?: string[];
  logo?: string;
  expandedDetails?: SkillCategory[];
  keySkills?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science (Software Engineering)",
    institution: "Edith Cowan University",
    location: "Perth, WA",
    status: "In Progress",
    period: "2025 - 2028",
    keySkills: [
      "Programming & Software Development",
      "Systems Analysis & Design",
      "Networking & Security",
      "Data Management & Analysis",
      "Project Management",
      "Critical Thinking",
      "Technological Literacy",
      "Ethical Considerations"
    ],
    logo: "/images/logos/ecu-logo.png",
    expandedDetails: [
      {
        title: "Programming & Software Development",
        points: [
          "Proficient in fundamental and advanced programming concepts, including object-oriented programming (C++), data structures, and various programming paradigms",
          "Developed strong problem-solving and analytical skills through complex computer science projects",
          "Gained practical experience in designing and implementing software solutions"
        ]
      },
      {
        title: "Systems Analysis & Design",
        points: [
          "Applied systems thinking and design thinking to interpret and analyze complex computer science problems",
          "Skilled in designing and implementing robust database systems",
          "Understood principles of systems analysis and design for effective computer-based solutions"
        ]
      },
      {
        title: "Networking & Security",
        points: [
          "Acquired foundational knowledge in computer networking principles",
          "Developed an understanding of computer security concepts and their application",
          "Explored advanced topics such as distributed computing and its implications"
        ]
      },
      {
        title: "Data Management & Analysis",
        points: [
          "Learned to effectively manage and process data, including storage and communication",
          "Applied concepts in intelligent systems and data analysis"
        ]
      },
      {
        title: "Project Management & Professionalism",
        points: [
          "Completed coursework in project methods and professionalism, fostering effective project execution",
          "Demonstrated ability to work collaboratively and independently on complex computer science projects",
          "Developed strong communication skills for technical and non-technical audiences"
        ]
      },
      {
        title: "Critical Thinking & Problem Solving",
        points: [
          "Emphasized critical thinking and problem-solving methodologies throughout the curriculum",
          "Anticipated challenges and produced innovative solutions to computer science problems"
        ]
      },
      {
        title: "Technological Literacy & Continuous Learning",
        points: [
          "Adept at finding, evaluating, and utilizing relevant tools and information from diverse sources",
          "Committed to autonomous and ongoing learning to ensure continuous relevance of skills and knowledge in the rapidly evolving field of computer science"
        ]
      },
      {
        title: "Ethical & Societal Considerations",
        points: [
          "Incorporated diverse perspectives, including Aboriginal and Torres Strait Islander perspectives, and accessibility issues when designing computer-based systems"
        ]
      }
    ]
  },
  {
    degree: "Diploma of Information Technology (Backend Web Development)",
    institution: "Equinim College of Technology",
    location: "Perth, WA",
    status: "Graduated",
    period: "2024",
    keySkills: [
      "Server-Side Programming",
      "Database Design",
      "Web Architecture",
      "Cloud Computing",
      "Problem Solving",
      "Information Architecture",
      "Team Collaboration"
    ],
    logo: "/images/logos/equinim-logo.png",
    expandedDetails: [
      {
        title: "Server-Side Programming & Logic",
        points: [
          "Developed proficiency in server-side scripting languages (e.g., Python, PHP, C#, Node.js) for building dynamic web applications",
          "Implemented business logic, data processing, and application functionality on the server",
          "Designed and developed Representational State Transfer (REST) APIs for seamless data exchange between front-end and back-end systems"
        ]
      },
      {
        title: "Database Design & Management",
        points: [
          "Skilled in designing, implementing, and integrating relational (e.g., SQL) and non-relational (e.g., NoSQL) databases with web applications",
          "Managed data persistence, ensuring data integrity, security, and efficient retrieval",
          "Designed database schemas and optimised queries for performance"
        ]
      },
      {
        title: "Web Architecture & Deployment",
        points: [
          "Gained understanding of web application architecture, including client-server interactions and server-side components",
          "Implemented quality assurance processes for websites and web applications",
          "Configured and managed web servers (e.g., Apache, Nginx) and cloud computing services"
        ]
      },
      {
        title: "Cloud Computing Fundamentals",
        points: [
          "Explored principles of cloud environments and services relevant to back-end development",
          "Implemented virtual networks and managed infrastructure within cloud platforms"
        ]
      },
      {
        title: "Problem Solving & Debugging",
        points: [
          "Applied advanced programming and debugging skills to identify and resolve issues in complex back-end systems",
          "Utilised various tools and techniques for monitoring and troubleshooting applications"
        ]
      },
      {
        title: "Website Information Architecture",
        points: [
          "Developed understanding of how to structure website content and data for optimal usability and searchability"
        ]
      },
      {
        title: "Teamwork & Professionalism",
        points: [
          "Collaborated effectively within development teams on real-world projects",
          "Applied intellectual property (IP), ethics, and privacy principles in ICT environments",
          "Managed client problems and contributed to project planning"
        ]
      }
    ]
  },
  {
    degree: "Diploma of Information Technology (Cyber Security & Data Analysis)",
    institution: "Equinim College of Technology",
    location: "Perth, WA",
    status: "Graduated",
    period: "2025",
    keySkills: [
      "Network Security",
      "Cyber Security Fundamentals",
      "Threat Analysis",
      "Incident Response",
      "Security Architecture",
      "Operating System Security",
      "Client Management"
    ],
    logo: "/images/logos/equinim-logo.png",
    expandedDetails: [
      {
        title: "Network Security",
        points: [
          "Installed, configured, and managed complex ICT networks, including routers, switches, and virtual computing environments",
          "Implemented and managed network security measures, including firewalls and intrusion detection systems",
          "Designed, built, and tested secure network servers"
        ]
      },
      {
        title: "Cyber Security Fundamentals & Best Practices",
        points: [
          "Promoted workplace cyber security awareness and best practices",
          "Applied IP, ethics, and privacy policies in ICT environments",
          "Understood legal and ethical issues related to data storage and security"
        ]
      },
      {
        title: "Threat Analysis & Vulnerability Management",
        points: [
          "Gathered, analysed, and interpreted cyber security threat data",
          "Performed security risk assessments to identify vulnerabilities",
          "Protected critical infrastructure for organisations"
        ]
      },
      {
        title: "Incident Response & Disaster Recovery",
        points: [
          "Developed, implemented, and evaluated incident response plans",
          "Reviewed and updated disaster recovery and contingency plans",
          "Gained foundational knowledge in digital forensics for investigation"
        ]
      },
      {
        title: "Security Architecture & Implementation",
        points: [
          "Utilised design methodologies for security architecture",
          "Implemented secure encryption technologies and maintained valid authentication processes",
          "Evaluated and implemented security protection devices and software"
        ]
      },
      {
        title: "Operating System Security",
        points: [
          "Understood vulnerabilities in various operating systems (Windows, Linux) and how to secure them",
          "Managed access controls, malware, and patch management"
        ]
      },
      {
        title: "Client Management & Communication",
        points: [
          "Managed client problems and communicated technical information clearly",
          "Developed skills in leading and facilitating teams within a security context"
        ]
      }
    ]
  },
  {
    degree: "IT Fundamentals Certificate",
    institution: "Google",
    location: "Online",
    status: "Completed",
    period: "2024",
    keySkills: [
      "IT Troubleshooting",
      "Customer Support",
      "System Administration",
      "Python Scripting",
      "AI in IT Support",
      "Cybersecurity Basics"
    ],
    logo: "/images/logos/google-logo.png",
    expandedDetails: [
      {
        title: "IT Troubleshooting & Problem Solving",
        points: [
          "Proficient in diagnosing and resolving common IT issues across various operating systems (Windows, Linux, macOS) and hardware",
          "Developed systematic troubleshooting methodologies, including effective use of documentation and online resources",
          "Skilled in basic networking concepts, including TCP/IP, DNS, and common networking hardware"
        ]
      },
      {
        title: "Customer Support & Communication",
        points: [
          "Provided effective and empathetic customer support, translating technical issues into understandable terms",
          "Developed strong communication skills for remote and in-person IT assistance",
          "Practiced documentation of support interactions and resolutions"
        ]
      },
      {
        title: "System Administration Fundamentals",
        points: [
          "Gained foundational knowledge in system administration tasks, including user management, permissions, and software installation",
          "Understood concepts of cloud computing and basic security principles",
          "Configured and managed hardware components, including peripherals"
        ]
      },
      {
        title: "Scripting & Automation (Python)",
        points: [
          "Acquired foundational programming skills in Python for automating tasks and solving IT problems",
          "Utilized Python for data manipulation and basic scripting applications"
        ]
      },
      {
        title: "Artificial Intelligence (AI) in IT Support",
        points: [
          "Understood the practical applications of AI tools and concepts in modern IT support environments",
          "Explored how AI can enhance efficiency and problem-solving in IT"
        ]
      },
      {
        title: "Cybersecurity Basics",
        points: [
          "Learned fundamental cybersecurity concepts, including common threats, encryption, and network security measures",
          "Understood the importance of data protection and privacy"
        ]
      }
    ]
  },
];

const Education: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="education section-padding" id="education">
      <div className="container">
        <h2 className="text-gradient">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <h3>{edu.degree}</h3>
                <div className="institution-info">
                  <span className="institution">
                    {edu.logo ? (
                      <img src={edu.logo} alt={`${edu.institution} logo`} className="institution-logo" />
                    ) : (
                      <i className="fas fa-university"></i>
                    )}
                    {edu.institution}
                  </span>
                  <div className="education-meta">
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i> {edu.location}
                    </span>
                    <span className={`status ${edu.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      <i className="fas fa-graduation-cap"></i> {edu.status}
                    </span>
                    <span className="period">
                      <i className="far fa-calendar-alt"></i> {edu.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="education-card-body">
                {edu.details && (
                  <ul className="education-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {edu.keySkills && (
                  <div className="key-skills-preview">
                    <h4>Key Areas of Study</h4>
                    <div className="skill-tags">
                      {edu.keySkills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                {edu.expandedDetails && (
                  <div className="expanded-details-section">
                    <button 
                      className="expand-button"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedCard === index ? (
                        <>
                          <span>Show Less</span>
                          <i className="fas fa-chevron-up"></i>
                        </>
                      ) : (
                        <>
                          <span>View Detailed Skills & Coursework</span>
                          <i className="fas fa-chevron-down"></i>
                        </>
                      )}
                    </button>
                    {expandedCard === index && (
                      <div className="expanded-content">
                        {edu.expandedDetails.map((category, i) => (
                          <div key={i} className="skill-category">
                            <h4>{category.title}</h4>
                            <ul>
                              {category.points.map((point, j) => (
                                <li key={j}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 