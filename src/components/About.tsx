import React from 'react';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Languages",
    icon: "fas fa-code",
    skills: [
      { name: "JavaScript", logo: `${process.env.PUBLIC_URL}/images/logos/javascript-logo.jpg` },
      { name: "TypeScript", logo: `${process.env.PUBLIC_URL}/images/logos/typescript-logo.jpg` },
      { name: "Python", logo: `${process.env.PUBLIC_URL}/images/logos/python-logo.png` },
      { name: "HTML", logo: `${process.env.PUBLIC_URL}/images/logos/html-logo.png` },
      { name: "CSS", logo: `${process.env.PUBLIC_URL}/images/logos/css-logo.png` }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "fas fa-layer-group",
    skills: [
      { name: "React.js", logo: `${process.env.PUBLIC_URL}/images/logos/react-logo.png` },
      { name: "Next.js", logo: `${process.env.PUBLIC_URL}/images/logos/nextjs-logo.png` },
      { name: "Node.js", logo: `${process.env.PUBLIC_URL}/images/logos/nodejs-logo.png` },
      { name: "Django", logo: `${process.env.PUBLIC_URL}/images/logos/django-logo.png` },
      { name: "Express.js", logo: `${process.env.PUBLIC_URL}/images/logos/express-js.png` },
      { name: "Tailwind", logo: `${process.env.PUBLIC_URL}/images/logos/tailwind-logo.png` },
      { name: "Bootstrap", logo: `${process.env.PUBLIC_URL}/images/logos/bootstrap-logo.png` },
      { name: "Sass", logo: `${process.env.PUBLIC_URL}/images/logos/sass-logo.png` }
    ]
  },
  {
    title: "Mobile Development",
    icon: "fas fa-mobile-alt",
    skills: [
      { name: "React Native", logo: `${process.env.PUBLIC_URL}/images/logos/reactnative-logo.jpg` },
      { name: "Flutter", logo: `${process.env.PUBLIC_URL}/images/logos/flutter-logo.png` },
      { name: "Kotlin", logo: `${process.env.PUBLIC_URL}/images/logos/kotlin-logo.png` },
      { name: "Swift", logo: `${process.env.PUBLIC_URL}/images/logos/swift-logo.png` },
      { name: "Android", logo: `${process.env.PUBLIC_URL}/images/logos/android-logo.jpg` },
      { name: "Expo", logo: `${process.env.PUBLIC_URL}/images/logos/expo-logo.jpg` }
    ]
  },
  {
    title: "Databases & Backend",
    icon: "fas fa-database",
    skills: [
      { name: "MongoDB", logo: `${process.env.PUBLIC_URL}/images/logos/mongodb-logo.png` },
      { name: "MySQL", logo: `${process.env.PUBLIC_URL}/images/logos/mysql-logo.png` },
      { name: "Firebase", logo: `${process.env.PUBLIC_URL}/images/logos/firebase-logo.jpg` },
      { name: "Supabase", logo: `${process.env.PUBLIC_URL}/images/logos/supabase-logo.jpg` }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "fas fa-tools",
    skills: [
      { name: "Git", logo: `${process.env.PUBLIC_URL}/images/logos/git-logo.png` },
      { name: "GitHub", logo: `${process.env.PUBLIC_URL}/images/logos/github-logo.jpg` },
      { name: "Docker", logo: `${process.env.PUBLIC_URL}/images/logos/docker-logo.png` },
      { name: "AWS", logo: `${process.env.PUBLIC_URL}/images/logos/aws-logo.jpg` },
      { name: "VS Code", logo: `${process.env.PUBLIC_URL}/images/logos/Visual_Studio_Code_logo.png` },
      { name: "Postman", logo: `${process.env.PUBLIC_URL}/images/logos/postman-logo.png` },
      { name: "Jest", logo: `${process.env.PUBLIC_URL}/images/logos/jest-logo.png` }
    ]
  }
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
          <h3 className="text-gradient">Technical Expertise</h3>
          <div className="skills-grid">
            {technicalSkills.map((category, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <i className={category.icon}></i>
                  <h4>{category.title}</h4>
                </div>
                <div className="skills-container">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <img src={skill.logo} alt={`${skill.name} logo`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 