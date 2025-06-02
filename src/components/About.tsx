import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "React Native", "Node.js", "Express.js", "Django", "Redux", "Next.js"]
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Kotlin", "Swift"]
  },
  {
    title: "Databases & Backend",
    skills: ["MongoDB", "Firebase", "REST APIs", "SQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Azure", "CI/CD Pipelines"]
  },
  {
    title: "Other",
    skills: ["Responsive Design", "Web Accessibility", "Performance Optimization", "SEO Strategies"]
  }
];

const professionalSkills: string[] = [
  "Problem-Solving",
  "Teaching & Mentorship",
  "Analytical Thinking",
  "Team Collaboration",
  "Effective Communication",
  "Time Management"
];

const About: React.FC = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <h2 className="text-gradient">About Me</h2>
        
        <div className="professional-summary">
          <p>
            Multi Disciplined Full Stack Developer with experience in designing, building, and deploying 
            scalable web and mobile applications using React.js, React Native, and Node.js, Next.js and more. 
            Transitioned from a Junior Full Stack Developer crafting client-tailored solutions to a Senior 
            Mobile Developer leading complex application development.
          </p>
          <p>
            Passionate about delivering high-quality, user-centric outcomes with a strong focus on performance 
            optimization and UX design. Proven adaptability across industries including education, logistics, 
            construction, mining, and hospitality.
          </p>
        </div>

        <div className="skills-section">
          <div className="technical-skills">
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {technicalSkills.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4>{category.title}</h4>
                  <div className="skill-tags">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="skill-tags">
              {professionalSkills.map((skill, index) => (
                <span key={index} className="skill-tag professional">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 