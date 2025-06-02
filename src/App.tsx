import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import LogoLoop from './components/LogoLoop';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoLoop />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default App;
