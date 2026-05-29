import { skills } from '../staticData/skills';

// Helper to render customized, premium forest-green SVG icons for each tech stack category
function getSkillIcon(title) {
  const t = title.toLowerCase();
  
  if (t.includes('mobile')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
        <path d="M9 5h6" strokeWidth="1.5" opacity="0.7" />
        <path d="M8 9h8" strokeWidth="1.5" opacity="0.9" />
        <path d="M10 13h4" strokeWidth="1.5" opacity="0.5" />
      </svg>
    );
  }
  
  if (t.includes('web')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="6" y1="21" x2="18" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        {/* Browser control dots */}
        <circle cx="5" cy="5.5" r="0.5" fill="var(--accent-primary)" stroke="none" />
        <circle cx="7" cy="5.5" r="0.5" fill="var(--accent-primary)" stroke="none" />
        <circle cx="9" cy="5.5" r="0.5" fill="var(--accent-primary)" stroke="none" />
      </svg>
    );
  }
  
  if (t.includes('state') || t.includes('logic')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }
  
  if (t.includes('payment') || t.includes('integration')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="3" ry="3" />
        <line x1="1" y1="9" x2="23" y2="9" />
        <rect x="4" y="13" width="4" height="3" rx="0.5" />
        <path d="M12 15h6" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    );
  }
  
  if (t.includes('tools') || t.includes('workflow')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        {/* Palette mixing circles */}
        <circle cx="7.5" cy="10.5" r="1.5" fill="var(--accent-primary)" stroke="none" />
        <circle cx="11.5" cy="7.5" r="1.5" fill="var(--accent-primary)" stroke="none" />
        <circle cx="16.5" cy="9.5" r="1.5" fill="var(--accent-primary)" stroke="none" />
        <circle cx="15.5" cy="14.5" r="2" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" />
      </svg>
    );
  }
  
  // Fallback icon
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span>Tech Stack</span></h2>
        </div>
        <div className="skills-grid">
          {skills.map((cat) => (
            <div key={cat.title} className="skill-category">
              <span className="skill-cat-icon">{getSkillIcon(cat.title)}</span>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
