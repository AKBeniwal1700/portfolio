import { experiences } from '../staticData/experiences';
import { IconCode } from '../svgs/Icons';

function ExperienceSection() {
  return (
    <section id="experience" className="section experience-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">
                      {exp.company}
                      <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-muted)', marginLeft: 10 }}>
                        ({exp.location})
                      </span>
                    </h3>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-role">
                  <IconCode /> &nbsp;{exp.role}
                  {exp.current && (
                    <span style={{ marginLeft: 10, background: 'rgba(67,233,123,0.12)', color: 'var(--accent-green)', fontSize: 11, padding: '2px 8px', borderRadius: 4 }}>
                      CURRENT
                    </span>
                  )}
                </p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
