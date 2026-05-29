import heroImg from '../assets/images/hero_desk_setup.png';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Column: Hero Text Content */}
        <div className="hero-content">
          <p className="hero-intro">Hi, I'm</p>
          <h1 className="hero-name">Abhishek Beniwal</h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-description">
            Senior Mobile &amp; Web Developer with a passion for designing premium, high-impact digital products. Over the past 4+ years, I have successfully engineered scalable architectures using React Native, React.js, and Node.js, integrating advanced payment frameworks and custom B2B SaaS dashboards, while ensuring top-tier performance, clean code standards, and seamless store deployments.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/Abhishek_Beniwal_Resume.txt" download="Abhishek_Beniwal_Resume.txt" className="btn-secondary">
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Lines of Code</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="hero-illustration">
          <img src={heroImg} alt="Abhishek Beniwal - Workspace Setup" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
