import React from 'react';
import LogoLoop from './LogoLoop';

const Hero: React.FC = () => {
  return (
    <section className="hero section-padding" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-photo">
            <img src="/images/profile-photo.jpg" alt="Codie Tomlinson" />
          </div>
          <h1>Codie Tomlinson</h1>
          <h2>Full Stack Developer & Cyber Security</h2>
          <div className="contact-info">
            <a href="mailto:codie.tomlinson@hotmail.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>codie.tomlinson@hotmail.com</span>
            </a>
            <a href="tel:0404556593" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>0404 556 593</span>
            </a>
            <div className="contact-link">
              <i className="fas fa-map-marker-alt"></i>
              <span>Perth, WA</span>
            </div>
            <a href="https://github.com/CodieT93" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-github"></i>
              <span>github.com/CodieT93</span>
            </a>
          </div>
          <p className="hero-description">
            Passionate Full Stack Developer with expertise in modern web technologies
            and a growing focus on cyber security. Committed to creating secure,
            efficient, and user-friendly applications.
          </p>
          <div className="hero-cta">
            <button className="primary-btn">View My Work</button>
            <button className="secondary-btn">Download Resume</button>
          </div>
        </div>
      </div>
      <LogoLoop />
    </section>
  );
};

export default Hero; 