import { useEffect } from 'react';
import './index.css';
import './App.css';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <div className="portfolio">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-logo">AB</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="nav-cta">Contact</a></li>
          </ul>
        </div>
      </nav>


      {/* ── Main Content ── */}
      <main className="main-content">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="footer">
          <p>Designed &amp; Built by <span>Abhishek Beniwal</span> · {new Date().getFullYear()}</p>
        </footer>
      </main>

    </div>
  );
}

export default App;